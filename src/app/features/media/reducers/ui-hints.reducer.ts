import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/ui-hints.actions';
export interface UiHintsState {
  listSort: string;
}

const initialState: UiHintsState = {
  listSort: 'All'
};

const reducerFunction = createReducer(
  initialState,
  on(actions.mediaFilterSet, (s, a) => ({ ...s, listSort: a.by }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return reducerFunction(state, action);
}
