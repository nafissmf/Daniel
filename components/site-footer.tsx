import { Logo } from "@/components/logo";
import { navLinks, socials } from "@/lib/content";

export function SiteFooter() {
  return (
    <>
      <svg className="wave" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C200 0 380 70 600 35 S1000 0 1200 30 L1200 70 L0 70Z" fill="#f97316" />
        <path d="M0 52 C240 20 420 70 640 46 S1020 14 1200 44 L1200 70 L0 70Z" fill="#0f2347" />
      </svg>
      <footer className="reveal">
        <div className="wrap">
          <div className="row">
            <div>
              <Logo />
              <p style={{ fontSize: ".76rem", marginTop: 8 }}>Bersama untuk Undip yang lebih baik</p>
            </div>
            <div className="links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="soc">
              {socials.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label}>
                  {item.short}
                </a>
              ))}
            </div>
            <a href="#pemilihan" className="btn btn-o">
              Suara Sekarang →
            </a>
          </div>
          <small>© 2026 Daniel & Kaylila. Universitas Diponegoro</small>
        </div>
      </footer>
    </>
  );
}
