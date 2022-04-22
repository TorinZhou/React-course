const Redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = Redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// * We pass the function to store through subscribe method, in this case this sub function will be called every time state changes.
store.subscribe(counterSubscriber);

// * dispatch: without dispatchm, subFn will not be called. with a dispatch, we get 1

store.dispatch({ type: "INCREMENT" }); // output: 1
store.dispatch({ type: "DECREMENT" }); // output: 2
