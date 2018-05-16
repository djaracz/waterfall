export namespace CounterState {
  type Entity = number;
  export type Type = { counter: Entity };

  export const INITIAL: Type = {
    counter: 0
  };
}
