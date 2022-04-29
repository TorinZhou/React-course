import QuoteList from "../components/quotes/QuoteList";

const quotes = [
  { id: "q1", autor: "Torin", text: "Go Hustle!" },
  { id: "q2", autor: "Torin", text: "Do it!" },
];

export const AllQuotes = (props) => {
  return <QuoteList quotes={quotes} />;
};
