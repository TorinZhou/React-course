import QuoteList from "../components/quotes/QuoteList";

const quotes = [
  { id: "q1", autor: "Torin", text: "1.Go Hustle!" },
  { id: "q2", autor: "Torin", text: "2.Do it!" },
];

export const AllQuotes = (props) => {
  return (
    <>
      <QuoteList quotes={quotes} />;
    </>
  );
};
