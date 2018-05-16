import { CounterAction } from '../action/CounterAction';

export namespace Actions {
  export type Type = CounterAction.Type;
  export const entity: Type = {
    ...CounterAction.actions,
  };
}
