import Eyebrow from "../components/common/Eyebrow";
import { BRANDS } from "../data/brands";

export default function Brands() {
  return (
    <section className="block brand-section" id="brand">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Brand</Eyebrow>
            <h2 className="brand-title">Mitra Resmi Brand Global</h2>
          </div>

          <p>
            Bergaransi resmi, suku cadang original, teknisi bersertifikat
            pabrikan.
          </p>
        </div>
      </div>

      <div className="brand-wall">
        {BRANDS.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </section>
  );
}