
import * as fromCounter from './counter.reducer';

// Describe, for TYPESCRIPT what the application state looks like.

export interface AppState {
  counter: fromCounter.CounterState;
}

// Create an object which points to the reducer functions that maintain the state

export const reducers = {
  counter: fromCounter.reducer
};


// Selector Functions

// 1. Create a feature selector (if you are in a feature. we aren't. We will later.)

// 2. Create a selector per "branch" of your application state.

// 3. Create any "helper" selectors you might need (optional)

// 4. Create a selector that returns specificially the data the component needs.

export const selectCurrentCount = (state: AppState) => state.counter.current;
