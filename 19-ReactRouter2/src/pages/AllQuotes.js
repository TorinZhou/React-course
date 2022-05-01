import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

export const AllQuotes = (props) => {
  const {
    sendRequest,
    data: loadedQuotes,
    status,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />;
      </div>
    );
  }
  if (error) {
    return (
      <div className="centered">
        <p>{error}</p>
      </div>
    );
  }
  if (!loadedQuotes || loadedQuotes.length === 0) {
    return (
      <>
        <NoQuotesFound />
      </>
    );
  }

  return <QuoteList quotes={loadedQuotes} />;
};
