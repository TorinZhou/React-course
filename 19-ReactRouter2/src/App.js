import React, { Suspense } from "react";
import Layout from "./components/layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
// import { AddNewQuote } from "./pages/AddNewQuote";
import { QuoteDetail } from "./pages/QuoteDetail";
import { AllQuotes } from "./pages/AllQuotes";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const AddNewQuote = React.lazy(() => import("./pages/AddNewQuote"));

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quotesId">
          <QuoteDetail />
        </Route>
        <Route path="/add-new-quote">
          <Suspense
            fallback={
              <div className="centered">
                <p>Loading!!!</p>
                <LoadingSpinner />
              </div>
            }
          >
            <AddNewQuote />
          </Suspense>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
