import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Header = () => {
  const isAutheticated = useSelector((state) => state.auth.isAutheticated);
  const dispatch = useDispatch();

  const loginHandler = () => {
    console.log("11");
    dispatch(authActions.showLoginForm());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const autheticatedContent = (
    <>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </>
  );
  const unAutheticatedContent = (
    <>
      <li>
        <button onClick={loginHandler}>Login</button>
      </li>
    </>
  );
  const navContent = isAutheticated
    ? autheticatedContent
    : unAutheticatedContent;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>{navContent}</ul>
      </nav>
    </header>
  );
};

export default Header;
