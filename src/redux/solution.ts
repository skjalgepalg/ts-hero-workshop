// # Task 1
// 1. Redux is all about reducers, but what is a reducer? Describe it in as few words as possible.

// A reducer takes as input <State, Action> and returns a new State modified by the action.

// 2. Try to turn this definition into a Generic TypeScript function.
type Reducer<State, Action> = (
  state: State,
  action: Action
) => State;

// # Task 2
// 1. Create a "Counter" reducer that can INCREMENT and DECREMENT a number.

function CounterReducer(
  state: number,
  action: "INCREMENT" | "DECREMENT"
) {
  switch (action) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
  }
}