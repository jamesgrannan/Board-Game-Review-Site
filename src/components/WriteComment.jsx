import { useContext, useState } from "react";
import { userContext } from "../contexts/user";
import { postComment } from "../utils";
import styles from "../css-modules/comments.module.css";

const WriteComment = ({ id, setCommented }) => {
  const { user } = useContext(userContext);
  const [inputComment, setInputComment] = useState("");
  const handleChange = (event) => setInputComment(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    return postComment(inputComment, user, id).then(() => {
      setCommented(true);
      setInputComment("");
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentsForm}>
      <label htmlFor="comment_body">Comment:</label>
      <input
        name="comment_body"
        id="comment_body"
        type="text"
        required
        onChange={handleChange}
        value={inputComment}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default WriteComment;
