import {
  useParams,
  Route,
  Link,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuotes from "../components/quotes/HighlightedQuote";

export const QuoteDetail = (props) => {
  const params = useParams();
  const location = useLocation();
  const routeMatch = useRouteMatch();

  console.log(location, routeMatch);
  const quotes = [
    { id: "q1", autor: "Torin", text: "Go Hustle!" },
    { id: "q2", autor: "Torin", text: "Do it!" },
  ];
  const quote = quotes.find((quote) => {
    return quote.id === params.quotesId;
  });
  return (
    <>
      <HighLightedQuotes text={quote.text} author={quote.autor} />
      <Route path={`${routeMatch.url}`} exact>
        <div className="centered">
          <Link className="btn--flat " to={`${routeMatch.url}/comments`}>
            {"Go to comments"}
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
