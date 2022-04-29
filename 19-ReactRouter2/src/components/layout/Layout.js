import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <section>
        <MainNavigation />
      </section>
      <section className={classes.main}>{props.children}</section>
    </>
  );
};

export default Layout;
