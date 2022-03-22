import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  if (!props.errorState) return null;
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <div className={styles.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
