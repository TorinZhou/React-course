import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import store from "../store";

const Counter = () => {
  // ! use useSelector custom hook we don't need to subscribe or getState manually.
  // store.subscribe(Counter);
  // const counterValue = store.getState().counter;

  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {
    console.log("clicked");
    store.dispatch({ type: "INCREMENT" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
