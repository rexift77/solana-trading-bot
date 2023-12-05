import { Conversation, ConversationFlavor } from "@grammyjs/conversations";
import { MyContext } from "../bot";
export * from "./setCustomTotalSupply.conversation";
export * from "./setCustomInitTax.conversation";
export * from "./setTokenMetadata.conversation";
export * from "./setCustomFinalTax.conversation";
export * from "./withdrawEth.conversations";
type MyContext2 = MyContext & ConversationFlavor;
export type MyConversation = Conversation<MyContext2>;
export async function initConversation() {}
