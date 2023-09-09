import { Telegraf } from "telegraf";
import { CommandContext, CommandMiddleware } from "./types";


class BotWrapper {
  private readonly telegrafBot: Telegraf;

  constructor(token: string) {
    this.telegrafBot = new Telegraf(token);
  }

  public start() {
    this.telegrafBot.launch();
  }

  public useCommand<C extends CommandContext>(command: string, middleware: CommandMiddleware<C>, context: Omit<C, keyof CommandContext>) {
    this.telegrafBot.command(command, (ctx, next) => {
      const mergedContext = Object.assign(ctx, context) as unknown as C;
      middleware(mergedContext, next);
    });
  }
}

export default BotWrapper;
