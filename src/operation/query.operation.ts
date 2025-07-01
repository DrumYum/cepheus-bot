import * as MinecraftProtocol from "minecraft-protocol";

type Context = {
  host: string;
  port: number;
};

class QueryOperation {
  private constructor(private readonly context: Context) {}

  public static build(context: Context) {
    return new QueryOperation(context);
  }

  public async execute() {
    const { host, port } = this.context;

    const response = await MinecraftProtocol.ping({ host, port, closeTimeout: 5000 }); // TODO: get rid of magic number
    
    const playerCount = ("players" in response) ? (response.players.online) : (response.playerCount);
    const playerList =
      (("players" in response) && (Array.isArray(response.players.sample)))
      ? (response.players.sample.map((item) => item.name))
      : (Array(playerCount) as unknown[]);

    return playerList;
  }
}

export default QueryOperation;