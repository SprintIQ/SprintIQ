import { appRouter } from "@src/server/api/root";
import { createTRPCContext } from "@src/server/api/trpc";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import ws from "ws";

const wss = new ws.Server({
  port: parseInt(process.env.PORT ?? "") || 3000,
});
const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext: createTRPCContext,
  onError: error => {
    // console.error("trpc error", error);
  },
});
wss.on("connection", ws => {
  console.log(`➕➕ Connection (${wss.clients.size})`);
  ws.once("close", () => {
    console.log(`➖➖ Connection (${wss.clients.size})`);
  });
});
console.log(
  `✅ WebSocket Server listening on ws://localhost:${process.env.PORT}`,
);

process.on("SIGTERM", () => {
  console.log("SIGTERM");
  handler.broadcastReconnectNotification();
  wss.close();
});
