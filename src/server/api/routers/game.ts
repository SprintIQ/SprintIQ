import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@src/server/api/trpc";
import { z } from "zod";

export const gameRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {}),
});
