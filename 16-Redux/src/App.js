import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";
function App() {
  const loginFormIsShown = useSelector((state) => state.auth.loginFormIsShown);
  const isAutheticated = useSelector((state) => state.auth.isAutheticated);
  return (
    <>
      <Header />
      {loginFormIsShown && <Auth />}
      {isAutheticated && <UserProfile />}
      <Counter />;
    </>
  );
}

export default App;
