import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0) return;
    if (+enteredAge <= 0) return;
    props.onAddUser({
      name: enteredUsername,
      age: +enteredAge,
      id: Math.random().toString(),
    });
    setEnteredUserName("");
    setAge("");
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
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={inputHandler("username")}
        />
        <label htmlFor="age">Age(Year)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={inputHandler("age")}
        />
        <Button className="big" type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
