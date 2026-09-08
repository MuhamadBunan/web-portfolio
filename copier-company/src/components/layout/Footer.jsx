import { NAV_LINKS } from "../../data/navigation";
import { SERVICES } from "../../data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="brand-mark footer-brand-mark" />

              <span className="footer-brand-name">
                PRESISI
                <small>OFFICE SOLUTIONS</small>
              </span>
            </div>

            <p className="footer-description">
              Solusi printing dan document management untuk perusahaan,
              institusi pendidikan, dan pemerintahan di seluruh Indonesia.
            </p>
          </div>

          <div>
            <h4>Navigasi</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Layanan</h4>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <a href="#layanan">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Kontak</h4>
            <ul>
              <li>sales@presisioffice.co.id</li>
              <li>(021) 555-0182</li>
              <li>Jakarta Barat, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 PRESISI Office Solutions. Seluruh hak cipta dilindungi.
          </span>

          <span className="mono">REF. QT-2026-081</span>
        </div>
      </div>
    </footer>
  );
}