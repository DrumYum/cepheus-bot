import GetPlayersOperation from "../operation/getPlayers.operation";
import { GetPlayersCommandContext } from "../types";

class GetPlayersCommand {
  public static readonly COMMAND = "players";

  private constructor(
    private readonly context: GetPlayersCommandContext
  ) {}

  public static async middleware(context: GetPlayersCommandContext, next: () => Promise<void>) {
    const command = new GetPlayersCommand(context);

    await command.execute();
  }

  private async execute() {
    try {
      const result = await GetPlayersOperation
        .build(this.context)
        .execute();

      this.context.reply(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      }

      this.context.reply(`Сервер недоступен или не может ответить на запрос`);
    }
  }
}

export default GetPlayersCommand;
