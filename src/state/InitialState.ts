import { CounterState } from './CounterState';

export namespace InitialState {
  export type Type = CounterState.Type;
  export const entity: Type = CounterState.INITIAL;
}
