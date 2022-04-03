import React, {useState, useEffect} from "react";


const LoginContext = React.createContext({
  isLoggedIn: false,
  onLogout: ()=>{},
});

export const LoginComponent = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Calling LoginComponent");
  
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("storedLoginState", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("storedLoginState");
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
      {props.content}
    </LoginContext.Provider>
  );
}

export default LoginContext;
