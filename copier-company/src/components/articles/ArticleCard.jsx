function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className="article-card__image">
        {article.image ? (
          <img src={article.image} alt={article.title} />
        ) : (
          <div className="article-card__placeholder">
            <span>ARTICLE</span>
          </div>
        )}
      </div>

      <div className="article-card__content">
        <span className="article-card__category">
          {article.tag}
        </span>

        <h3>{article.title}</h3>

        <p>{article.excerpt}</p>

        <a href={article.link || "#"}>
          Baca Selengkapnya →
        </a>
      </div>
    </article>
  );
}

export default ArticleCard;