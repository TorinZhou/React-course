import React from "react";
const LoginContext = React.createContext({
  isLoggedIn: false,
});

export const LoginComponent = (props) => {
  return <LoginContext>{props.content}</LoginContext>
}

export default LoginContext;
