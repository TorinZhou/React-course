import { useState } from "react";

const useInput = (validationFn) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const inputValueIsValid = validationFn(inputValue);
  const hasError = inputIsTouched && !inputValueIsValid;

  console.log(inputValueIsValid, inputIsTouched);
  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log(inputValueIsValid);
  };
  const init = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return [
    inputValue,
    setInputValue,
    inputIsTouched,
    setInputIsTouched,
    hasError,
    onChange,
    init,
  ];
};

export default useInput;
