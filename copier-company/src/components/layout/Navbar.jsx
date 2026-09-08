import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { NAV_LINKS } from "../../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" onClick={handleLinkClick}>
          <span className="brand-mark" />

          <span>
            PRESISI
            <small>OFFICE SOLUTIONS</small>
          </span>
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <Link
            to="/kontak"
            className="btn"
            onClick={handleLinkClick}
          >
            Minta Penawaran
            <ArrowRight size={15} />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={handleMenuToggle}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="wrap mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
