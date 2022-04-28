import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export const MainHeader = (props) => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/welcome">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/products">
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
