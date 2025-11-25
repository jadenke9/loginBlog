import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function CommentBox() {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setCommentsList([...commentsList, { author: user, text: comment }]);
    setComment("");
  };

  if (!user) {
    return <p>Please log in to comment.</p>;
  }

  return (
    <div className="comment-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>

      <ul>
        {commentsList.map((c, idx) => (
          <li key={idx}>
            <strong>{c.author}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
