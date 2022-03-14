import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = function (props) {
  return (
    <div className="expenses">
      {props.info.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
