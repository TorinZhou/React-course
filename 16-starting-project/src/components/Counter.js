import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const counterIsShown = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterIsShown && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={incrementHandler}>INCREMENT</button>
      </div>
      <button onClick={toggleHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
