import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  console.log("Calling Backdrop");
  <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  console.log("Calling ModalOverlay");
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>;
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  console.log("Calling Modal");
  console.log(portalElement);
  console.log(props.children);
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
