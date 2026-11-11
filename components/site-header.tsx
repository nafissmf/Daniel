"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#beranda");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav>
      <div className="wrap">
        <Logo />
        <div className={open ? "links open" : "links"} id="site-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "on" : undefined}
              onClick={() => {
                setActive(link.href);
                setOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "✕" : "☰"}
          </button>
          <a href="#pemilihan" className="btn btn-o">
            <span className="cta-full">Suara Sekarang →</span>
            <span className="cta-short">Suara →</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
