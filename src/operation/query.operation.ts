import * as MinecraftServerUtil from 'minecraft-server-util';
import { QueryOperationContext } from '../types';

class QueryOperation {
  private constructor(private readonly context: QueryOperationContext) {}

  public static build(context: QueryOperationContext) {
    return new QueryOperation(context);
  }

  public async execute() {
    const { host, port } = this.context;

    return MinecraftServerUtil.queryFull(host, port);
  }
}

export default QueryOperation;