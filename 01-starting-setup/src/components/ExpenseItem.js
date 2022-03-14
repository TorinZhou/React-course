import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpanseItem(props) {
  return (
    // One root element
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpanseItem;
