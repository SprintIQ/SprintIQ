import {
  createTRPCRouter,
  loginProcedure,
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
export const authRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ wallet_address: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        let user: PrismaProfile | null;
        user = await ctx.db.profile.findUnique({
          where: {
            wallet_address: input.wallet_address,
          },
        });
        if (!user) {
          const generatedUserName = ctx.helper.generateUserName();
          user = await ctx.db.profile.create({
            data: {
              wallet_address: input.wallet_address,
              username: generatedUserName,
            },
          });
        }
        ctx.user = {
          wallet_address: input.wallet_address,
          id: user.id,
          nonce: user.nonce,
        };
        return {
          success: true,
          user: user,
        };
      } catch (e) {
        return {
          success: false,
          error: e,
        };
      }
    }),
  login: loginProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    try {
      const user = await ctx.db.profile.findUnique({
        where: {
          wallet_address: input,
        },
      });
      if (!user) {
        return {
          success: false,
          error: "User not found",
        };
      }
      ctx.user = {
        wallet_address: user.wallet_address,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        nonce: user.nonce,
        id: user.id,
      };
      return {
        success: true,
        user: user,
      };
    } catch (e) {
      return {
        success: false,
        error: e,
      };
    }
  }),
});
