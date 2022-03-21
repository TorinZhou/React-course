import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log("😀😀😀");
  };
  return (
    <Card className={styles.input}>
      <form className={styles.form} onSubmit={addUserHandler}>
        <label htmlFor="username">Course Goal</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Year)</label>
        <input id="age" type="number" />
        <Button className="big" type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
