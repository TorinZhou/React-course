import { useState, useEffect } from "react";

const useHttp = async (handlerFn, url) => {
  console.log(url);
  const response = await fetch(url);
  console.log("Response from server is: ", response);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  console.log("Data in the response is: ", data);
  handlerFn(data);
};

export default useHttp;
