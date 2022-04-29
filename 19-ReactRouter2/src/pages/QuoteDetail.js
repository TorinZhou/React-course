import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuotes from "../components/quotes/HighlightedQuote";

export const QuoteDetail = (props) => {
  const params = useParams();
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
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
