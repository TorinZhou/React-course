import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory, Prompt } from "react-router-dom";
import { useState, useEffect } from "react";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

const AddNewQuote = (props) => {
  const [formIsTouched, setFormIsTouched] = useState(false);
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [history, status]);
  const addQuoteHandler = (quoteObj) => {
    sendRequest(quoteObj);
  };
  const formIsTouchedHandler = () => {
    setFormIsTouched(true);
  };
  const formWillSubmit = () => {
    setFormIsTouched(false);
  };
  return (
    <>
      <Prompt
        when={formIsTouched}
        message="Are you sure you want to leave?"
      ></Prompt>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
        onFormIsTouched={formIsTouchedHandler}
        onFormWillSubmit={formWillSubmit}
      />
      ;
    </>
  );
};

export default AddNewQuote;
