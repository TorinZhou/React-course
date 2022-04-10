import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagrahp] = useState(false);
  const [enableButton, setEnableButton] = useState(false);
  console.log("App running");
  const toggleParagraphHandler = useCallback(() => {
    if (enableButton) setShowParagrahp((curState) => !curState);
    // setShowParagrahp(true);
  }, [enableButton]);
  const enableButtonHandler = useCallback(() => {
    setEnableButton(true);
  }, []);
  const arr = useMemo(() => {
    return [1, 2, 3, 4, 5];
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Additional paragraph</p>}
      <Button onClick={enableButtonHandler} arr={arr}>
        Enable the Button
      </Button>
      <Button onClick={toggleParagraphHandler}>Toggle a paragraph</Button>
    </div>
  );
}

export default React.Meme(App);
