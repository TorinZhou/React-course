import { useState, useEffect } from "react";
const useCounter = (sign) => {
  const [counter, setCounter] = useState(0);
  console.log(sign);
  useEffect(() => {
    const interval = sign
      ? setInterval(() => {
          setCounter((prevCounter) => prevCounter + 1);
        }, 1000)
      : setInterval(() => {
          setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleaner Run");
    };
  }, [sign]);
  return counter;
};

export default useCounter;
