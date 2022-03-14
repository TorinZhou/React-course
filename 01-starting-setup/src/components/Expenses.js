import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = function (props) {
  return (
    <div className="expenses">
      {/* {props.reduce((acc, cur)=>{

      },<></>)} */}
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
    </div>
  );
};

export default Expenses;
