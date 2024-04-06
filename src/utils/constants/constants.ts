export const COOKIE_KEY = "sprintiq::session_token";

export const LABELS = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect",
  "no-wallet": "Select Wallet",
} as const;
export enum Routes {
  HOME = "home",
  GAME = "game",
  JOIN = "join",
  CREATE = "create",
  GENERATE_CODE = "generate_code",
  GET_CODE = "get-code"
}
export enum QuestionType {
  TEXT = "text",
  IMAGE = "image",
  VIDEO = "video",
}
