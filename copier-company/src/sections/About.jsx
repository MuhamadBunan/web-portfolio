import { CheckCircle2 } from "lucide-react";

import Eyebrow from "../components/common/Eyebrow";

export default function About() {
  return (
    <section className="block" id="tentang">
      <div className="wrap about-grid">
        <div>
          <Eyebrow>Tentang Kami</Eyebrow>

          <h2 className="about-title">
            Mitra Cetak yang Mengerti Operasional Bisnis
          </h2>

          <p>
            PRESISI Office Solutions telah mendampingi ratusan organisasi di
            Indonesia dalam mengelola kebutuhan cetak dan dokumen mereka sejak
            lebih dari satu dekade lalu. Kami tidak hanya menjual mesin — kami
            merancang alur kerja dokumen yang lebih efisien.
          </p>

          <p>
            Tim teknisi bersertifikat, ketersediaan suku cadang, dan jaringan
            layanan di berbagai kota membuat kami menjadi pilihan instansi yang
            membutuhkan keandalan jangka panjang, bukan sekadar harga termurah.
          </p>
        </div>

        <ul className="about-list">
          <li>
            <CheckCircle2 size={18} />
            <span>
              Distributor resmi enam brand printing global dengan garansi
              penuh.
            </span>
          </li>

          <li>
            <CheckCircle2 size={18} />
            <span>
              Teknisi bersertifikat pabrikan tersebar di berbagai kota besar.
            </span>
          </li>

          <li>
            <CheckCircle2 size={18} />
            <span>
              Skema sewa dan beli putus, disesuaikan dengan anggaran organisasi.
            </span>
          </li>

          <li>
            <CheckCircle2 size={18} />
            <span>
              Waktu respons layanan darurat rata-rata di bawah 24 jam.
            </span>
          </li>

          <li>
            <CheckCircle2 size={18} />
            <span>
              Kontrak maintenance jangka panjang dengan laporan pemakaian
              rutin.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}