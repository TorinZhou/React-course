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
    console.log(typeof year);
    setSelectedYear(year);
  };

  const filteredExpense = props.info.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter value={selectedYear} onSelectYear={selectYearHandler} />
      {filteredExpense.length === 0 && <p>There's no content!</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
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
