import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enterValue, setEnterValue] = useState("Torin");
  const inputRef = useRef();

  // * Ref-based submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const data = inputRef.current.value;
    console.log(data);
  };
  // * State-based key-stroke handler
  const valueChangeHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setEnterValue(value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          value={enterValue}
          // * defaultValue="Torin"
          onChange={valueChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
