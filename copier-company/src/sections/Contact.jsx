import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import Eyebrow from "../components/common/Eyebrow";
import { PRODUCTS } from "../data/products";

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    perusahaan: "",
    email: "",
    telepon: "",
    kebutuhan: "",
    pesan: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
    setSubmitted(true);
  }

  return (
    <section className="block alt" id="kontak">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Kontak</Eyebrow>
            <h2>Minta Penawaran</h2>
          </div>

          <p>
            Ceritakan kebutuhan Anda, tim kami akan menghubungi dalam 1x24 jam
            kerja.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="row">
              <MapPin size={18} />
              <div>
                <h4>Kantor Pusat</h4>
                <p>Jl. Industri Raya No. 88, Jakarta Barat, Indonesia</p>
              </div>
            </div>

            <div className="row">
              <Phone size={18} />
              <div>
                <h4>Telepon</h4>
                <p>(021) 555-0182 · Layanan Darurat 24/7</p>
              </div>
            </div>

            <div className="row">
              <Mail size={18} />
              <div>
                <h4>Email</h4>
                <p>sales@presisioffice.co.id</p>
              </div>
            </div>

            <div className="row">
              <ShieldCheck size={18} />
              <div>
                <h4>Jam Operasional</h4>
                <p>Senin–Jumat, 08.00–17.00 WIB</p>
              </div>
            </div>
          </div>

          <div className="form-panel">
            <div className="panel-title">
              <span>Formulir Permintaan Penawaran</span>
              <span>Wajib diisi *</span>
            </div>

            {submitted && (
              <div className="success-msg">
                <CheckCircle2 size={18} />
                <span>
                  Terima kasih, permintaan Anda telah kami terima. Tim kami akan
                  segera menghubungi Anda.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nama">Nama Lengkap *</label>
                  <input
                    id="nama"
                    name="nama"
                    required
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                  />
                </div>

                <div className="field">
                  <label htmlFor="perusahaan">
                    Nama Perusahaan/Instansi *
                  </label>
                  <input
                    id="perusahaan"
                    name="perusahaan"
                    required
                    value={form.perusahaan}
                    onChange={handleChange}
                    placeholder="Nama organisasi"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="telepon">Nomor Telepon *</label>
                  <input
                    id="telepon"
                    name="telepon"
                    required
                    value={form.telepon}
                    onChange={handleChange}
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="kebutuhan">Kebutuhan Produk</label>
                <select
                  id="kebutuhan"
                  name="kebutuhan"
                  value={form.kebutuhan}
                  onChange={handleChange}
                >
                  <option value="">Pilih kebutuhan</option>

                  {PRODUCTS.map((product) => (
                    <option key={product.name} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="pesan">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan cetak Anda, jumlah unit, atau lokasi."
                />
              </div>

              <button type="submit" className="btn accent contact-submit-btn">
                Kirim Permintaan <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}