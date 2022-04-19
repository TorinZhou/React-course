import { useState } from "react";

const useInput = (validationFn) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const inputValueIsValid = validationFn(inputValue);
  const hasError = inputIsTouched && !inputValueIsValid;
  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const init = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    inputValue,
    inputValueIsValid,
    setInputIsTouched,
    hasError,
    onChange,
    init,
  };
};

export default useInput;
