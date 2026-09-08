import Eyebrow from "../components/common/Eyebrow";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <Eyebrow>Distributor &amp; Layanan Purna Jual Resmi</Eyebrow>

          <div className="hero-title-wrap">
            <h1 className="hero-title">
              <span className="layer c" aria-hidden="true">
                Solusi Printing &amp; Document Management untuk Bisnis Anda.
              </span>
              <span className="layer m" aria-hidden="true">
                Solusi Printing &amp; Document Management untuk Bisnis Anda.
              </span>
              <span className="layer y" aria-hidden="true">
                Solusi Printing &amp; Document Management untuk Bisnis Anda.
              </span>
              <span className="layer k">
                Solusi Printing &amp; Document Management untuk Bisnis Anda.
              </span>
            </h1>
          </div>

          <p className="hero-sub">
            Kami membantu perusahaan, sekolah, instansi pemerintah, dan pelaku
            industri percetakan memilih, memasang, dan merawat armada mesin
            fotokopi serta printer mereka — dari satu unit hingga ratusan
            cabang.
          </p>

          <div className="hero-actions">
            <a href="#kontak" className="btn accent">
              Konsultasi Gratis
            </a>

            <a href="#produk" className="btn ghost hero-catalog-btn">
              Lihat Katalog Produk
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num mono">500+</span>
              <span className="stat-label">Klien Korporat</span>
            </div>

            <div className="stat">
              <span className="stat-num mono">15+</span>
              <span className="stat-label">Tahun Pengalaman</span>
            </div>

            <div className="stat">
              <span className="stat-num mono">24/7</span>
              <span className="stat-label">Technical Support</span>
            </div>

            <div className="stat">
              <span className="stat-num mono">6</span>
              <span className="stat-label">Brand Resmi</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-head">
            <span>Ref. No. QT-2026-081</span>
            <span>Status: Siap Cetak</span>
          </div>

          <ul>
            <li>
              <span>Konsultasi kebutuhan</span>
              <span className="dot mono">01</span>
            </li>
            <li>
              <span>Rekomendasi unit &amp; brand</span>
              <span className="dot mono">02</span>
            </li>
            <li>
              <span>Instalasi &amp; pelatihan</span>
              <span className="dot mono">03</span>
            </li>
            <li>
              <span>Maintenance berkala</span>
              <span className="dot mono">04</span>
            </li>
            <li>
              <span>Dukungan teknis 24/7</span>
              <span className="dot mono">05</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}