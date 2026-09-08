import { Link, useParams } from "react-router-dom";
import Eyebrow from "../components/common/Eyebrow";
import { PRODUCTS } from "../data/products";

export default function ProductDetailPage() {
  const { slug } = useParams();

  const product = PRODUCTS.find(
    (item) =>
      item.slug === slug ||
      item.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    return (
      <section className="block">
        <div className="wrap">
          <Eyebrow>404</Eyebrow>
          <h1>Produk Tidak Ditemukan</h1>
          <p>Produk yang Anda cari tidak tersedia.</p>
          <Link to="/produk" className="btn">
            Kembali ke Produk
          </Link>
        </div>
      </section>
    );
  }

  const Icon = product.icon;

  return (
    <section className="block">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Detail Produk</Eyebrow>
            <h1>{product.name}</h1>
          </div>
        </div>

        <div className="product-detail">
          <div className="product-detail__icon">
            <Icon size={48} />
          </div>

          <div>
            {product.spec && (
              <span className="product-detail__spec mono">
                {product.spec}
              </span>
            )}

            <p>
              {product.description ||
                "Solusi perangkat printing dan document management untuk kebutuhan bisnis Anda."}
            </p>

            <Link to="/kontak" className="btn accent">
              Konsultasi Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
