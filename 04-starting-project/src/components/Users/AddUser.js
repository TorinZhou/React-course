import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log("😀😀😀");
    console.log(`${enteredUsername} : ${enteredAge}`);
  };

  const inputHandler = (type) => (event) => {
    type === "username"
      ? setEnteredUserName(event.target.value)
      : setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form className={styles.form} onSubmit={addUserHandler}>
        <label htmlFor="username">Course Goal</label>
        <input id="username" type="text" onChange={inputHandler("username")} />
        <label htmlFor="age">Age(Year)</label>
        <input id="age" type="number" onChange={inputHandler("age")} />
        <Button className="big" type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
