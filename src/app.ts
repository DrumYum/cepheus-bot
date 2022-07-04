import BotWrapper from "./bot.wrapper";
import GetPlayersCommand from "./command/getPlayers.command";

const BOT_TOKEN = process.env.BOT_TOKEN ?? "";
const HOST = process.env.HOST ?? "localhost";
const PORT = Number(process.env.PORT) ?? 25565;

class App {
	private readonly bot: BotWrapper;

	constructor() {
		this.bot = new BotWrapper(BOT_TOKEN);
		
		this.bot.useCommand(GetPlayersCommand.COMMAND, GetPlayersCommand.middleware, { host: HOST, port: PORT });
		this.bot.start();
	}
}

new App();