import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [inputIsValidState, setInputIsValidState] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = formInputRef.current.value;
    if (enteredAmount.trim().length === 0) {
      setInputIsValidState(false);
      return;
    }
    props.onAddItem(+enteredAmount);
  };
  const formInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={formInputRef}
        input={{
          id: "amount_" + props.id,
          label: "+++",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1",
        }}
        label="Amount"
      />
      <button>+ Add</button>
      {!inputIsValidState && <p>Please enter a valid input</p>}
    </form>
  );
};

export default MealItemForm;
