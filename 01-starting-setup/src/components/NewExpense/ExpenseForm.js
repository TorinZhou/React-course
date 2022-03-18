import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [FormOpened, setFormOpened] = useState(false);

  // safe way 2:
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // unsafe way 1: 🧨
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // safe way 2:  ✨
    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredTitle: e.target.value};
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      // date: enteredDate,
    };
    props.onSaveExpenseData(expenseData); // Cool ✨🧨🎇
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFormOpened(false);
  };
  const cancelHandler = () => {
    setFormOpened(false);
  };
  const openFormHandler = (e) => {
    e.preventDefault();
    setFormOpened(true);
  };
  if (!FormOpened) {
    return (
      <form onSubmit={openFormHandler}>
        <button type="submit">Add New Expense</button>
      </form>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
