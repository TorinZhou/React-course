import classes from "./SuccessMessage.module.css";

const SuccessMessage = (props) => {
  return (
    <div className={classes.successContainer}>
      <p>{props.message}</p>
    </div>
  );
};

export default SuccessMessage;
