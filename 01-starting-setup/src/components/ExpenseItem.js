import "./ExpenseItem.css";

function ExpanseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 299;

  return (
    // One root element
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpanseItem;
