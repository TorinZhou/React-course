import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagrahp] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagrahp((curState) => !curState);
    // setShowParagrahp(true);
  };
  console.log("App running");
  const removeParagraphHandler = () => {};
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Additional paragraph</p>}
      <Button onClick={toggleParagraphHandler}>Toggle a paragraph</Button>
    </div>
  );
}

export default App;
