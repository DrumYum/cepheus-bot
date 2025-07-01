import { Bot, Context, MiddlewareFn } from "grammy";

class BotWrapper {
  private readonly bot: Bot;

  constructor(token: string) {
    this.bot = new Bot(token);
  }

  public start() {
    this.bot.start();
  }

  public useCommand<C extends Context>(command: string, middleware: MiddlewareFn<C>, context: Omit<C, keyof Context>) {
    this.bot.command(command, (ctx, next) => {
      const mergedContext = Object.assign(ctx, context) as unknown as C; // TODO: looks ugly, need to refactor
      middleware(mergedContext, next);
    });
  }
}

export default BotWrapper;
