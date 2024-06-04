/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */
import { type AppRouter } from "@src/server/api/root";
import {
  createWSClient,
  httpBatchLink,
  loggerLink,
  wsLink,
} from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import dotenv from "dotenv";
import getConfig from "next/config";
import superjson from "superjson";
dotenv.config();
const getBaseUrl = () => {
  if (typeof window !== "undefined") return window.location.origin;
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  if (process.env.RENDER_EXTERNAL_HOSTNAME)
    return `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};
console.log(process.env.WS_URL);
const wsClient = createWSClient({
  url: process.env.NEXT_PUBLIC_WS_URL ?? `ws://localhost:3000`,
});

/** A set of type-safe react-query hooks for your tRPC API. */
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      /**
       * Transformer used for data de-serialization from the server.
       *
       * @see https://trpc.io/docs/data-transformers
       */
      transformer: superjson,

      /**
       * Links used to determine request flow from client to server.
       *
       * @see https://trpc.io/docs/links
       */
      links: [
        loggerLink({
          enabled: opts =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        wsLink({
          client: wsClient,
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  /**
   * Whether tRPC should await queries when server rendering pages.
   *
   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false
   */
  ssr: false,
});

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;
