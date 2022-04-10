import classes from "./User.module.css";
import { useCallback } from "react";

const User = (props) => {
  const foo = useCallback(() => {
    console.log("bar");
  }, []);
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
