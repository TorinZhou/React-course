import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = function (props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectYearHandler = (year) => {
    console.log("In Expense.js: ");
    console.log(year);
    console.log(typeof year);
    setSelectedYear(year);
  };
  const filteredExpense = props.info.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter value={selectedYear} onSelectYear={selectYearHandler} />
      <ExpensesList list={filteredExpense}></ExpensesList>
    </Card>
  );
};

export default Expenses;
