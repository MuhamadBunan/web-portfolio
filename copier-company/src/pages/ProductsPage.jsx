import Eyebrow from "../components/common/Eyebrow";
import ProductCard from "../components/products/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  return (
    <section className="block" id="produk">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Produk</Eyebrow>
            <h1>Produk Printing &amp; Document Management</h1>
          </div>
          <p>
            Pilihan perangkat untuk kebutuhan perkantoran, pendidikan,
            pemerintahan, hingga produksi dengan volume tinggi.
          </p>
        </div>

        <div className="grid-5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
