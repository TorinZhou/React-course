import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import Comments from "../components/comments/Comments";
import HighLightedQuotes from "../components/quotes/HighlightedQuote";

export const QuoteDetail = (props) => {
  const params = useParams();

  const routeMatch = useRouteMatch();
  const {
    sendRequest,
    data: loadedQuote,
    status,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quotesId);
  }, [sendRequest, params.quotesId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (status === "completed") {
    return (
      <>
        <HighLightedQuotes
          text={loadedQuote.text}
          author={loadedQuote.author}
        />
        <Route path={`${routeMatch.url}`} exact>
          <div className="centered">
            <Link className="btn--flat " to={`${routeMatch.url}/comments`}>
              {"Go to comments"}
            </Link>
          </div>
        </Route>
        <Route path={`${routeMatch.path}/comments`}>
          <Comments />
        </Route>
      </>
    );
  }
};
