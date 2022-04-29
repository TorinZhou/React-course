import QuoteForm from "../components/quotes/QuoteForm";
export const AddNewQuote = (props) => {
  const addQuoteHandler = (quoteObj) => {
    console.log(quoteObj);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
