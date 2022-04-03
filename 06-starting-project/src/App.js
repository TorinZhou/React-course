import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import LoginContext from "./components/Context/login_context";

function App() {
  const ctx = useContext(LoginContext);
  return (
    <>
      <MainHeader onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
      </main>
    </>
    
  );
}

export default App;
