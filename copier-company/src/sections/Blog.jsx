import { ArrowRight } from "lucide-react";

import Eyebrow from "../components/common/Eyebrow";
import ArticleCard from "../components/articles/ArticleCard";
import { ARTICLES } from "../data/articles";

export default function Blog() {
  return (
    <section className="block" id="blog">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Blog / Berita</Eyebrow>
            <h2>Wawasan Seputar Printing &amp; Dokumen</h2>
          </div>

          <p>
            Panduan praktis, studi kasus, dan pembaruan industri.
          </p>
        </div>

        <div className="grid-3">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}