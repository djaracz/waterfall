import * as React from 'react';
import { AppStore } from '../../store/AppStore';
import './App.css';

const TestPure: React.SFC<any> = (waterfall: any) => (
  <>
    <button onClick={waterfall.actions.increment}>increment!</button>
    <button onClick={waterfall.actions.decrement}>decrement!</button>
    {console.log(waterfall.actions)}
    <div>{waterfall.counter}</div>
  </>
);

const Test = AppStore.connect(
  state => ({ counter: state.counter })
)(TestPure);

export class App extends React.Component {
  public render() {
    return (
      <AppStore.Provider>
        <Test />
      </AppStore.Provider>
    );
  }
}
