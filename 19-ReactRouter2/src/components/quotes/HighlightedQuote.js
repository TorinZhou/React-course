import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const quotes = [
    { id: "q1", autor: "Torin", text: "Go Hustle!" },
    { id: "q2", autor: "Torin", text: "Do it!" },
  ];
  const quote = quotes.find((quote) => {
    return quote.id === props.id;
  });
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
