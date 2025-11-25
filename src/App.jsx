import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import Article from "./components/article";
import CommentBox from "./components/CommentBox";
import Login from "./components/Login";
import avatar1 from "./images/avatar1.png";
import "./App.css";

// Initial articles
const initialArticles = [
  {
    id: 1,
    avatar: avatar1,
    author: "Ava",
    date: "Tue Jan 17 2023",
    title: "HTML Semantic Tags",
    content: {
      preview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate sint ullam fugiat fugit magni...",
      hidden:
        "lectus eum a minus iure optio eveniet culpa, ipsum iste repellendus laudantium eos deserunt commodi animi distinctio ex hic? At amet dolore nemo accusamus nisi quae, ratione nam...",
    },
  },
];

export default function App() {
  const { user } = useContext(UserContext);
  const [articles, setArticles] = useState(initialArticles);

  // Delete an article
  const handleDelete = (id) => setArticles(articles.filter(a => a.id !== id));

  // If user not logged in, show login page
  if (!user) return <Login />;

  return (
    <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header with logout button */}
      <Header />

      {/* Main content area grows to fill the screen */}
      <main className="articles-wrapper">
        {articles.map(article => (
          <div key={article.id} className="article-with-comments">
            <Article {...article} onDelete={() => handleDelete(article.id)} />
            <CommentBox articleId={article.id} />
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer>
      </footer>
    </div>
  );
}
