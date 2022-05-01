import { Fragment } from "react";
import { sortQuotes } from "../extraFiles/sorting";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const isAscending = searchParam.get("sort") === "asc";
  console.log(isAscending);
  const sortedQuotes = sortQuotes(props.quotes, isAscending);
  const sortingToggleHandler = () => {
    // history.push(`${location.pathname}?sort=${isAscending ? "desc" : "asc"}`);
    history.push({
      pathname: location.pathname,
      search: isAscending ? "desc" : "asc",
    });
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingToggleHandler}>
          {isAscending ? "Desending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
