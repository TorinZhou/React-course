import { Route } from "react-router-dom";

export const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome my boy!</h1>
      <Route path="/welcome/new">
        <p>new user</p>
      </Route>
    </section>
  );
};
