import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addComment, getAllComments } from "../../lib/api";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const { quotesId } = useParams();
  const {
    sendRequest: sendPushRequest,
    status: statusPush,
    error: errorPush,
    data: dataPush,
  } = useHttp(addComment, false);
  const {
    sendRequest: sendPullRequest,
    status: statusPull,
    error: errorPull,
    data: dataPull,
  } = useHttp(getAllComments, false);
  const [isAddingComment, setIsAddingComment] = useState(false);

  useEffect(() => {
    console.log("fetch comments");
    sendPullRequest(quotesId);
  }, [sendPullRequest, quotesId, dataPush]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  console.log(dataPull);
  let comment;

  if (statusPull === "pending") {
    comment = <LoadingSpinner />;
  }
  if (statusPull === "completed" && dataPull.length !== 0) {
    comment = <CommentsList comments={dataPull} />;
  }
  if (statusPull === "completed" && dataPull.length === 0) {
    comment = (
      <div className="focused">
        <p>No Comments Yet</p>
      </div>
    );
  }

  const addNewCommentHandler = useCallback((quoteId, text) => {
    sendPushRequest({ quoteId, commentData: text });
    setIsAddingComment(false);
  }, []);

  return (
    <section className={classes.comments}>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddNewComment={addNewCommentHandler.bind(null, quotesId)}
        />
      )}

      <div className="centered">{comment}</div>
    </section>
  );
};

export default Comments;
