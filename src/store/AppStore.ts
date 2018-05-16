import { initStore, Store as WaterfallStore } from 'react-waterfall';
import * as devtools from 'react-waterfall-redux-devtools-middleware';
import { InitialState } from '../state/InitialState';
import { Actions } from './Actions';

export namespace AppStore {
  export type Store = WaterfallStore<InitialState.Type, Actions.Type>;
  const store: Store = {
    initialState: InitialState.entity,
    actions: { ...Actions.entity }
  };

  export const { Provider, Consumer, connect } = initStore(store, devtools());
}