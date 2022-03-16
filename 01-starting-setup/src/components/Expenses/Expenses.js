import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = function (props) {
  const [selectedYear, setSelectedYear] = useState("");
  const selectYearHandler = (year) => {
    console.log("In Expense.js: ");
    console.log(year);
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYearHandler} />
      <ExpenseItem
        title={props.info[0].title}
        amount={props.info[0].amount}
        date={props.info[0].date}
      />
      <ExpenseItem
        title={props.info[1].title}
        amount={props.info[1].amount}
        date={props.info[1].date}
      />
      <ExpenseItem
        title={props.info[2].title}
        amount={props.info[2].amount}
        date={props.info[2].date}
      />
      <ExpenseItem
        title={props.info[3].title}
        amount={props.info[3].amount}
        date={props.info[3].date}
      />
    </Card>
  );
};

export default Expenses;
