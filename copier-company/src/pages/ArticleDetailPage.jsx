import { Link, useParams } from "react-router-dom";
import Eyebrow from "../components/common/Eyebrow";
import { ARTICLES } from "../data/articles";

export default function ArticleDetailPage() {
  const { slug } = useParams();

  const article = ARTICLES.find(
    (item) =>
      item.slug === slug ||
      item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!article) {
    return (
      <section className="block">
        <div className="wrap">
          <Eyebrow>404</Eyebrow>
          <h1>Artikel Tidak Ditemukan</h1>
          <p>Artikel yang Anda cari tidak tersedia.</p>

          <Link to="/blog" className="btn">
            Kembali ke Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="block">
      <div className="wrap">
        <div className="article-detail">
          <Eyebrow>{article.tag || "Artikel"}</Eyebrow>

          <h1>{article.title}</h1>

          {article.image && (
            <div className="article-detail__image">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <div className="article-detail__content">
            <p>{article.excerpt}</p>

            {article.content ? (
              <div>{article.content}</div>
            ) : (
              <p>
                Konten artikel akan tersedia di halaman ini. Tambahkan properti
                <span className="mono"> content </span>
                pada data artikel untuk menampilkan isi lengkap.
              </p>
            )}
          </div>

          <Link to="/blog" className="btn">
            ← Kembali ke Blog
          </Link>
        </div>
      </div>
    </article>
  );
}

