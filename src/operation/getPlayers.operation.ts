import QueryOperation from "./query.operation";

type Context = {
  host: string;
  port: number;
};

class GetPlayersOperation {
  private constructor(private readonly context: Context) {}

  public static build(context: Context) {
    return new GetPlayersOperation(context);
  }

  public async execute() {
    const dataOrError = await QueryOperation
      .build(this.context)
      .execute();

    if (dataOrError instanceof Error) return dataOrError.message;

    // TODO: everything here is ugly, need to refactor
    let result = "";
    
    if (!dataOrError.length) {
      result += "Сейчас на сервере нет игроков"
      return result;
    }

    if (!dataOrError.filter((item) => !!item).length) {
      result += `Сейчас на сервере ${dataOrError.length} игроков`;
      return result;
    }

    result += `Список игроков онлайн (${dataOrError.length}):`;

    for (const player of dataOrError.sort()) {
      if (!player) continue;

      result += `\n- ${player}`;
    }

    return result;
  }
}

export default GetPlayersOperation;