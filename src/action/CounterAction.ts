import { CounterState } from '../state/CounterState';
import { InitialState } from '../state/InitialState';

export namespace CounterAction {
  export type Increment = (state: InitialState.Type) => CounterState.Type;
  export const increment = (state: InitialState.Type) => ({ counter: state.counter + 1 });

  export type Decrement = (state: InitialState.Type) => CounterState.Type;
  export const decrement = (state: InitialState.Type) => ({ counter: state.counter - 1 });

  export type Type = {
    increment: Increment
    decrement: Decrement
  };

  export const actions: Type = {
    increment,
    decrement
  };
}
