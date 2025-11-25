export default function Article({ avatar, author, date, title, content, onDelete }) {
  return (
    <article className="article-container">
      <button className="delete-btn" onClick={onDelete}>✕</button>
      <div className="article-header">
        <img src={avatar} alt="profile" className="avatar" />
        <div>{author} · {date}</div>
      </div>
      <div className="article-body">
        <h3>{title}</h3>
        <p>
          {content.preview}
          <span className="hidden">{content.hidden}</span>
        </p>
      </div>
    </article>
  );
}

