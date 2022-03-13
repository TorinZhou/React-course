import "./ExpenseItem.css";

function ExpanseItem(props) {
  // const expenseDate = new Date();
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 299;

  return (
    // One root element
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpanseItem;
