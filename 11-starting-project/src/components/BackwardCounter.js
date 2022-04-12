import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  console.log("back");
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
