/* eslint-disable @typescript-eslint/no-misused-promises */
import { HistoryType, Status } from "@prisma/client";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@src/server/api/trpc";
import { z } from "zod";

export const gameRouter = createTRPCRouter({
  create_game: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        game_code: z.string().optional(),
        reward: z.number().optional(),
        percentages: z
          .array(
            z.object({
              position: z.number(),
              percentage: z.number(),
            }),
          )
          .optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const query = [];
      // check if game with
      if (input.game_code) {
        query.push({
          game_code: input.game_code,
        });
      }
      const game_exists = await ctx.db.game.findFirst({
        where: {
          OR: query,
        },
      });

      if (game_exists) {
        return {
          success: false,
          error: "Game already exists",
        };
      }
      const game = await ctx.db.game.create({
        data: {
          title: input.title,
          description: input.description,
          game_code: input.game_code,
          reward: input.reward,
          creator_id: ctx.user.wallet_address,
        },
      });
      if (input.percentages) {
        await ctx.db.percentages.createMany({
          data: input.percentages.map(p => ({
            game_id: game.id,
            position: p.position,
            percentage: p.percentage,
          })),
        });
      }
      return {
        success: true,
        game,
      };
    }),
  get_games: publicProcedure
    .input(
      z.object({
        game_code: z.string().optional(),
        title: z.string().optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const games = await ctx.db.game.findMany({
        where: {
          game_code: input.game_code,
          title: input.title,
        },
        select: {
          percentages: true,
        },
      });
      return {
        success: true,
        games,
      };
    }),
  get_created_games: protectedProcedure
    .input(
      z.object({
        limit: z.number(),
        skip: z.number().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const games = await ctx.db.game.findMany({
        take: input.limit,
        skip: input.skip,
        where: {
          creator_id: ctx.user.wallet_address,
          status: {
            not: Status.completed,
          },
        },
        orderBy: {
          created_at: "desc",
        },
      });
      return {
        success: true,
        games,
      };
    }),
  get_game: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const game = await ctx.db.game.findUnique({
        where: {
          id: input.id,
        },
        select: {
          percentages: true,
          title: true,
          description: true,
          game_code: true,
          reward: true,
          status: true,
          creator_id: true,
          created_at: true,
        },
      });
      return {
        success: true,
        game,
      };
    }),
  update_game: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        description: z.string().optional(),
        game_code: z.string().optional(),
        reward: z.number().optional(),
        percentages: z
          .array(
            z.object({
              position: z.number(),
              percentage: z.number(),
            }),
          )
          .optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const game = await ctx.db.game.update({
        where: {
          id: input.id,
          creator_id: ctx.user.wallet_address,
        },
        data: {
          title: input.title,
          description: input.description,
          game_code: input.game_code,
          reward: input.reward,
        },
      });
      if (input.percentages) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        for (const p of input.percentages) {
          const percentages = await ctx.db.percentages.findFirst({
            where: {
              game_id: game.id,
              position: p.position,
            },
          });
          if (percentages) {
            await ctx.db.percentages.update({
              where: {
                id: percentages.id,
                game: {
                  creator_id: ctx.user.wallet_address,
                },
              },
              data: {
                percentage: p.percentage,
              },
            });
          } else {
            await ctx.db.percentages.create({
              data: {
                game_id: game.id,
                position: p.position,
                percentage: p.percentage,
              },
            });
          }
        }
      }
      return {
        success: true,
        game,
      };
    }),
  create_question: protectedProcedure
    .input(
      z.array(
        z.object({
          type: z.enum(["text", "image", "video"]),
          question: z.string(),
          description: z.string().optional(),
          game_id: z.string(),
          answer: z.string(),
          points: z.number(),
          // duration in milliseconds
          duration: z.number(),
          options: z.array(z.string()),
        }),
      ),
    )
    .mutation(async ({ input, ctx }) => {
      const questions = await Promise.all(
        input.map(async q => {
          return ctx.db.question.create({
            data: {
              type: q.type,
              question: q.question,
              description: q.description,
              game_id: q.game_id,
              answer: q.answer,
              points: q.points,
              duration: q.duration,
              options: {
                createMany: {
                  data: q.options.map(o => ({
                    value: o,
                  })),
                },
              },
            },
          });
        }),
      );
      return {
        success: true,
        questions,
      };
    }),
  get_question: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const question = await ctx.db.question.findUnique({
        where: {
          id: input.id,
        },
      });
      return {
        success: true,
        question,
      };
    }),
  get_questions: publicProcedure
    .input(
      z.object({
        game_id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const questions = await ctx.db.question.findMany({
        where: {
          game_id: input.game_id,
        },
        select: {
          description: true,
          question: true,
          points: true,
          options: true,
          duration: true,
          game_id: true,
        },
      });
      return {
        success: true,
        questions,
      };
    }),
  update_question: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        type: z.enum(["text", "image", "video"]),
        question: z.string(),
        description: z.string().optional(),
        game_id: z.string(),
        answer: z.string(),
        points: z.number(),
        // duration in milliseconds
        duration: z.number(),
        options: z.array(
          z.object({
            id: z.string(),
            value: z.string(),
          }),
        ),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const question = await ctx.db.question.update({
        where: {
          id: input.id,
        },
        data: {
          type: input.type,
          question: input.question,
          description: input.description,
          game_id: input.game_id,
          answer: input.answer,
          points: input.points,
          duration: input.duration,
        },
      });
      if (input.options) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        for (const o of input.options) {
          const option = await ctx.db.options.findFirst({
            where: {
              question_id: question.id,
              id: o.id,
            },
          });
          if (option) {
            await ctx.db.options.update({
              where: {
                id: o.id,
              },
              data: {
                value: o.value,
              },
            });
          } else {
            await ctx.db.options.create({
              data: {
                question_id: question.id,
                value: o.value,
              },
            });
          }
        }
      }
      return {
        success: true,
        question,
      };
    }),
  delete_question: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const question = await ctx.db.question.delete({
        where: {
          id: input.id,
          game: {
            creator_id: ctx.user?.wallet_address,
          },
        },
      });
      return {
        success: true,
        question,
      };
    }),
  delete_game: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const game = await ctx.db.game.delete({
        where: {
          id: input.id,
          creator_id: ctx.user?.wallet_address,
        },
      });
      return {
        success: true,
        game,
      };
    }),
  delete_option: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        question_id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const option = await ctx.db.options.delete({
        where: {
          id: input.id,
          question_id: input.question_id,
          question: {
            game: {
              creator_id: ctx.user?.wallet_address,
            },
          },
        },
      });
      return {
        success: true,
        option,
      };
    }),
  full_game_create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        game_code: z.string().optional(),
        reward: z.number().optional(),
        percentages: z.array(
          z.object({
            position: z.number(),
            percentage: z.number(),
          }),
        ),
        questions: z.array(
          z.object({
            type: z.enum(["text", "image", "video"]),
            question: z.string(),
            description: z.string().optional(),
            answer: z.string(),
            points: z.number(),
            // duration in milliseconds
            duration: z.number(),
            options: z.array(z.string()),
          }),
        ),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const query = [];
      // check if game with
      if (input.game_code) {
        query.push({
          game_code: input.game_code,
        });
      }
      const game_exists = await ctx.db.game.findFirst({
        where: {
          OR: query,
        },
      });

      if (game_exists) {
        return {
          success: false,
          error: "Game already exists",
        };
      }
      const game = await ctx.db.game.create({
        data: {
          title: input.title,
          description: input.description,
          creator_id: ctx.user?.wallet_address,
          game_code: input.game_code,
          reward: input.reward,
          percentages: {
            createMany: {
              data: input.percentages?.map(p => ({
                position: p.position,
                percentage: p.percentage,
              })),
            },
          },
        },
      });
      if (game) {
        for (const data of input.questions) {
          const question = await ctx.db.question.create({
            data: {
              question: data.question,
              description: data.description,
              answer: data.answer,
              points: data.points,
              duration: data.duration,
              game_id: game.id,
            },
          });
          if (question) {
            for (const data1 of data.options) {
              await ctx.db.options.create({
                data: {
                  value: data1,
                  question_id: question.id,
                },
              });
            }
          }
        }
      }
      return {
        success: true,
        game,
      };
    }),
  change_game_status: protectedProcedure
    .input(
      z.object({
        game_id: z.string(),
        status: z.enum([Status.completed, Status.ongoing, Status.cancelled]),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const gameStarted = await ctx.db.game.findFirst({
        where: {
          id: input.game_id,
          creator_id: ctx.user.wallet_address,
        },
      });
      if (!gameStarted || gameStarted?.status === Status.completed) {
        return {
          success: false,
          message: "Game Already Started",
        };
      }
      await ctx.db.game.update({
        where: {
          id: input.game_id,
          creator_id: ctx.user.wallet_address,
        },
        data: {
          status: input.status,
        },
      });
      if (input.status === Status.completed) {
        const history = await ctx.db.profileHistory.groupBy({
          by: ["user_id"],
          where: {
            game_id: input.game_id,
            status: HistoryType.answered,
          },
          orderBy: [
            {
              _sum: {
                points: "desc",
              },
            },
            {
              _max: {
                created_at: "asc",
              },
            },
          ],
          _sum: {
            points: true,
          },
          _max: {
            created_at: true,
          },
        });
        for (const data of history) {
          await ctx.db.notification.create({
            data: {
              user_id: data.user_id,
              message: `Thank you for joining ${gameStarted?.title}`,
              ref_id: input.game_id,
            },
          });
        }
        await ctx.db.notification.create({
          data: {
            user_id: ctx.user?.id,
            message: `You just ended ${gameStarted?.title}`,
            ref_id: input.game_id,
          },
        });
        await ctx.db.notification.create({
          data: {
            user_id: ctx.user?.id,
            message: `Rewards have been successfully distributed to winners of ${gameStarted?.title}`,
            ref_id: input.game_id,
          },
        });
      }
      return {
        success: true,
        message: "Game Started Successfully",
      };
    }),
});
