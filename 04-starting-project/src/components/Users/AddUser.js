import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [errorState, setErrorState] = useState(false);

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || +enteredAge <= 0) {
      setErrorState(true);
      return;
    }
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

  const onErrorHandler = () => {
    console.log("reset error");
    setErrorState(false);
  };
  return (
    <div>
      <ErrorModal
        title={"Invalid Input"}
        message={"Something went wrong!"}
        errorState={errorState}
        onConfirm={onErrorHandler}
      />
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
    </div>
  );
};

export default AddUser;
