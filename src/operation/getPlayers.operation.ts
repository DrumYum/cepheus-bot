import { QueryOperationContext } from "../types";
import QueryOperation from "./query.operation";

class GetPlayersOperation {
  private constructor(private readonly context: QueryOperationContext) {}

  public static build(context: QueryOperationContext) {
    return new GetPlayersOperation(context);
  }

  public async execute() {
    const data = await QueryOperation
      .build(this.context)
      .execute();

    let result = "";
    
    if (!data.players.list.length) {
      result += "Сейчас на сервере нет игроков"
      return result;
    }

    result += "Список игроков онлайн:";

    for (const player of data.players.list) {
      result += `\n- ${player}`;
    }

    return result;
  }
}

export default GetPlayersOperation;