import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpanseItem = (props) => {
  const [title, setTitle] = useState(props.title); // One of React Hook, useState always return a array with two el

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    // One root element
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpanseItem;
