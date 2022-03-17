import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = function (props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectYearHandler = (year) => {
    console.log("In Expense.js: ");
    console.log(year);
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter value={selectedYear} onSelectYear={selectYearHandler} />
      {props.info.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
