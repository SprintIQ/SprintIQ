import { HistoryType } from "@prisma/client";
import {
  createTRPCRouter,
  loginProcedure,
  protectedProcedure,
  publicProcedure,
} from "@src/server/api/trpc";
import { z } from "zod";

export interface PrismaProfile {
  id: string;
  wallet_address: string;
  username: string;
  nonce: number;
  avatar_url: string | null;
  created_at: Date;
  is_subscribed: boolean;
}
export const playerRouter = createTRPCRouter({
  join_game: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userJoined = await ctx.db.profileHistory.findFirst({
        where: {
          game_id: input.game_id,
          user_id: ctx.user.id,
          status: "joined",
        },
      });
      if (userJoined) {
        return {
          success: false,
          error: "Already joined",
        };
      } else {
        const joined = await ctx.db.profileHistory.create({
          data: {
            user_id: ctx.user.id,
            game_id: input.game_id,
            status: "joined",
          },
        });
        return {
          success: true,
          message: "Joined Game",
        };
      }
    }),
  answer_question: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
        question_id: z.string(),
        option_id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const question = await ctx.db.question.findUnique({
        where: {
          id: input.question_id,
        },
      });
      if (!question) {
        return {
          success: false,
          error: "Question not found",
        };
      }
      const option = await ctx.db.options.findUnique({
        where: {
          id: input.option_id,
        },
      });
      if (!option) {
        return {
          success: false,
          error: "Option not found",
        };
      }
      const questionAnswered = await ctx.db.profileHistory.findFirst({
        where: {
          game_id: input.game_id,
          user_id: ctx.user.id,
          question_id: input.question_id,
          status: HistoryType.answered,
        },
      });
      if (questionAnswered) {
        return {
          success: false,
          error: "Already answered Question",
        };
      } else {
        const points = question.answer === option.value ? question.points : 0;
        const anwsered = await ctx.db.profileHistory.create({
          data: {
            user_id: ctx.user.id,
            game_id: input.game_id,
            question_id: input.question_id,
            option_id: input.option_id,
            points,
            status: HistoryType.answered,
          },
        });
        return {
          success: true,
          message: "Answered Question",
        };
      }
    }),
  finish_game: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const game = await ctx.db.game.findUnique({
        where: {
          id: input.game_id,
        },
      });
      if (!game) {
        return {
          success: false,
          error: "Game not found",
        };
      }
      const gameFinished = await ctx.db.profileHistory.findFirst({
        where: {
          game_id: input.game_id,
          user_id: ctx.user.id,
          status: HistoryType.completed,
        },
      });
      if (gameFinished) {
        return {
          success: false,
          error: "Already finished Game",
        };
      } else {
        const userAnswerHistory = await ctx.db.profileHistory.findMany({
          where: {
            game_id: input.game_id,
            user_id: ctx.user.id,
            status: HistoryType.completed,
          },
        });
        const totalPoints = userAnswerHistory.reduce(
          (acc, curr) => acc + curr.points,
          0,
        );
        const finished = await ctx.db.profileHistory.create({
          data: {
            user_id: ctx.user.id,
            game_id: input.game_id,
            status: HistoryType.completed,
            points: totalPoints,
          },
        });
        return {
          success: true,
          message: "Finished Game",
        };
      }
    }),
  get_history: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
        limit: z.number().optional(),
        page: z.number().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const currentPage = input.page ?? 1;
      const pageSize = input.limit ?? 10;
      const skip = (currentPage - 1) * pageSize;
      const history = await ctx.db.profileHistory.findMany({
        take: pageSize,
        skip,
        where: {
          game_id: input.game_id,
          user_id: ctx.user.id,
          status: HistoryType.answered,
        },
        orderBy: {
          points: "desc",
        },
      });
      const total_pages = await ctx.db.profileHistory.count({
        where: {
          game_id: input.game_id,
          user_id: ctx.user.id,
        },
      });
      return {
        success: true,
        history: history,
        page_info: {
          current_page: currentPage,
          total_pages: Math.ceil(total_pages / pageSize),
          total_count: total_pages,
        },
      };
    }),
  leader_board: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
        limit: z.number().optional(),
        page: z.number().optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const currentPage = input.page ?? 1;
      const pageSize = input.limit ?? 10;
      const skip = (currentPage - 1) * pageSize;
      const history = await ctx.db.profileHistory.findMany({
        take: pageSize,
        skip,
        where: {
          game_id: input.game_id,
          status: HistoryType.completed,
        },
        orderBy: {
          points: "desc",
        },
      });
      const total_pages = await ctx.db.profileHistory.count({
        where: {
          game_id: input.game_id,
        },
      });
      return {
        success: true,
        history: history,
        page_info: {
          current_page: currentPage,
          total_pages: Math.ceil(total_pages / pageSize),
          total_count: total_pages,
        },
      };
    }),
  get_winners: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const game = await ctx.db.game.findUnique({
        where: {
          id: input.game_id,
        },
        include: {
          percentages: true,
        },
      });
      const positions = game?.percentages ?? [];
      const winners = await ctx.db.profileHistory.findMany({
        where: {
          game_id: input.game_id,
          status: HistoryType.completed,
        },
        orderBy: {
          points: "desc",
        },
        take: positions.length,
      });
      return {
        success: true,
        winners,
      };
    }),
});
