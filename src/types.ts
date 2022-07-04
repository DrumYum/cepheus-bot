import { Context, MiddlewareFn, NarrowedContext } from "telegraf";
import { Update } from "telegraf/types";
import { MountMap } from "telegraf/typings/telegram-types";

export type CommandContext = NarrowedContext<Context<Update>, MountMap["text"]>;
export type CommandMiddleware<C extends CommandContext> = MiddlewareFn<C>;

export type QueryOperationContext = { host: string, port: number };

export type GetPlayersOperationContext = QueryOperationContext;
export type GetPlayersCommandContext = CommandContext & GetPlayersOperationContext;