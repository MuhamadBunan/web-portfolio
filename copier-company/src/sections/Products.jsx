import { PRODUCTS } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import SectionFrame from "../components/common/SectionFrame";
import SectionHeader from "../components/common/SectionHeader";

export default function Products() {
  return (
    <section className="block" id="produk">
      <div className="wrap">
        <SectionFrame>

          <SectionHeader
            eyebrow="Produk"
            title="Lini Produk Lengkap, Satu Mitra"
            description="Dari unit tunggal untuk ruang kerja kecil hingga mesin produksi kapasitas tinggi."
          />

          <div className="grid-5">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
              />
            ))}
          </div>

        </SectionFrame>
      </div>
    </section>
  );
}