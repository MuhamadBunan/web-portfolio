
import Eyebrow from "../components/common/Eyebrow";
import ArticleCard from "../components/articles/ArticleCard";
import { ARTICLES } from "../data/articles";

export default function BlogPage() {
  return (
    <section className="block" id="blog">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Blog / Berita</Eyebrow>
            <h1>Wawasan Printing &amp; Document Management</h1>
          </div>
          <p>
            Panduan, tips, studi kasus, dan informasi seputar kebutuhan
            printing bisnis.
          </p>
        </div>

        <div className="grid-3">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
