import { useState } from "react";

export default function ArticleForm({ onAddArticle }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !content.trim()) return;

    const newArticle = {
      id: Date.now(),
      avatar: "images/avatar-placeholder.png", // default avatar
      author: author.trim(),
      date: new Date().toDateString(),
      title: title.trim(),
      content: {
        preview: content.slice(0, 100) + "...",
        hidden: content.slice(100),
      },
    };

    // Pass new article to parent App
    onAddArticle(newArticle);

    // Clear form
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <div id="new-article-section">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            minLength="3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            minLength="3"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            rows="8"
            minLength="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="accent-btn">
          POST
        </button>
      </form>
    </div>
  );
}
