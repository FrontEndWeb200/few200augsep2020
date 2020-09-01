import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
// describe this for typescript

export interface CounterState {
  current: number;
}

// what would it be when the application starts?

const initialState: CounterState = {
  current: 0
};

const reducerFunction = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (s) => ({ current: s.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 }))
);

export function reducer(previousState: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(previousState, action);
}
