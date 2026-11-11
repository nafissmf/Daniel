import type { Metadata } from "next";
import { Countdown } from "@/components/countdown";
import { DepartmentPanel } from "@/components/department-panel";
import { Motion } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  faqs,
  gallery,
  missions,
  pills,
  profiles,
  programs,
  team,
} from "@/lib/content";
import { jsonLd } from "@/lib/seo";

const preview = process.env.VERCEL_ENV === "preview";

export const metadata: Metadata = {
  robots: preview
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
      <SiteHeader />
      <Motion />

      <main>
      <header className="hero" id="beranda">
        <div className="bg ia im" role="img" aria-label="Gedung Rektorat Universitas Diponegoro" />
        <div
          className="blob"
          style={{
            width: 420,
            height: 160,
            right: -120,
            bottom: 60,
            borderRadius: "50%",
            transform: "rotate(-18deg)",
            zIndex: 2,
          }}
        />
        <div className="wrap">
          <div className="txt">
            <span className="tag">Bersama untuk FSM yang Lebih Baik</span>
            <h1>
              Daniel <span>&</span> Kaylila
            </h1>
            <p className="sub">
              Dua mahasiswa Undip dengan pengalaman kepemimpinan, organisasi, dan pengabdian.
            </p>
            <div className="cta">
              <a href="#tentang" className="btn btn-o">
                Kenali Lebih Lanjut →
              </a>
              <button type="button" className="play">
                <i>▶</i> Tonton Video
              </button>
            </div>
          </div>
          <div className="duo">
            <div className="ph i4 im" role="img" aria-label="Daniel dan Kaylila" />
          </div>
        </div>
        <div className="pills">
          {pills.map((pill) => (
            <div key={pill.title}>
              {pill.icon}
              <span>
                <b>{pill.title}</b>
                <small>{pill.text}</small>
              </span>
            </div>
          ))}
        </div>
      </header>

      <section id="tentang" className="reveal" style={{ paddingTop: 70 }}>
        <div className="wrap about">
          <div>
            <span className="dash" />
            <small>Tentang Paslon</small>
            <div className="big">Daniel & Kaylila</div>
            <p>
              Daniel Lamganda Tua Gultom dari Informatika dan Kaylila Alexandra Nesta dari Kimia
              hadir dengan rekam jejak kepemimpinan, riset, serta kerja kolaboratif di lingkungan
              Undip.
            </p>
            <a href="#visi" className="btn btn-o" style={{ marginTop: 20 }}>
              Selengkapnya →
            </a>
          </div>
          <div className="pic i3 im" role="img" aria-label="Daniel dan Kaylila di taman kampus">
            <div className="script">
              Bersama
              <br />
              Mewujudkan
              <br />
              Undip yang
              <br />
              Lebih Baik
            </div>
          </div>
        </div>
      </section>

      <section id="profil" className="reveal" style={{ paddingTop: 15 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <span className="dash" />
              <h2>Profil Kandidat</h2>
              <p>Rekam jejak kepemimpinan dan kontribusi di kampus.</p>
            </div>
          </div>
          <div className="profiles">
            {profiles.map((profile) => (
              <article key={profile.name} className="card profile">
                <span className="role">{profile.role}</span>
                <h3>{profile.name}</h3>
                <p>{profile.summary}</p>
                <ul>
                  {profile.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visi" className="reveal" style={{ paddingTop: 20 }}>
        <div className="wrap vm">
          <div className="visi ib im">
            <h2>👁 Visi</h2>
            <p>
              Menghadirkan ruang kolaboratif bagi mahasiswa untuk bertumbuh, berdaya, dan memberi
              dampak melalui kepemimpinan yang inklusif.
            </p>
          </div>
          <div className="card misi">
            <span className="sq">〰</span>
            <h2>🎯 Misi</h2>
            <ol>
              {missions.map((mission, index) => (
                <li key={mission}>
                  <span>{index + 1}</span>
                  {mission}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="program" className="reveal">
        <div className="prog-w" style={{ maxWidth: 1300, margin: "0 auto", paddingRight: 24 }}>
          <div className="circ ia im" role="img" aria-label="Kampus Undip" />
          <div>
            <div className="head">
              <div>
                <span className="dash" />
                <h2>Program Unggulan</h2>
                <p>Program kerja kami untuk mewujudkan Undip yang lebih baik.</p>
              </div>
              <a href="#program" className="btn btn-l">
                Lihat Semua →
              </a>
            </div>
            <div className="prog">
              {programs.map((program) => (
                <a key={program.title} href="#program" className="card">
                  <div className="t">
                    <span className="ic">{program.icon}</span>
                    <div>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                    </div>
                  </div>
                  <em>→</em>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reveal" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="dept">
            <div className="ph ib im" aria-hidden="true" />
            <h2>Untuk Setiap Departemen</h2>
            <p>Program kerja yang relevan untuk seluruh departemen di Undip</p>
            <DepartmentPanel />
          </div>
        </div>
      </section>

      <section id="galeri" className="reveal">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="dash" />
              <h2>Momen Kampanye</h2>
              <p>Potret perjalanan dan semangat kami dalam berkampanye</p>
            </div>
            <a href="#galeri" className="btn btn-l">
              Lihat Galeri →
            </a>
          </div>
          <div className="gal">
            {gallery.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className={item.className}
                data-l={item.label}
                role="img"
                aria-label={item.label}
                style={item.position ? { backgroundPosition: item.position } : undefined}
              >
                {item.label === "Dokumentasi" ? <i>▶</i> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aspirasi" className="reveal">
        <div className="wrap asp">
          <div>
            <span className="dash" />
            <h2>Sarap Aspirasi</h2>
            <p>Kami mendengar dan berkomitmen untuk menampung aspirasi seluruh mahasiswa.</p>
            <a href="#aspirasi" className="btn btn-n">
              Kirim Aspirasi →
            </a>
          </div>
          <div className="card quote">
            <q>Bersama, kita wujudkan Undip yang lebih inklusif, inovatif, dan berdaya saing.</q>
            <span>— Daniel & Kaylila</span>
          </div>
          <div className="mega" aria-hidden="true">
            📢
          </div>
        </div>
      </section>

      <section id="pemilihan" className="reveal" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="vote">
            <div className="ph ia im" aria-hidden="true" />
            <div>
              <h2>Hari Pemilihan</h2>
              <p className="l">Jangan lupa gunakan hak suara Anda!</p>
              <Countdown />
            </div>
            <div className="side">
              <a href="#pemilihan" className="btn btn-o">
                Suara Sekarang →
              </a>
              <br />
              <span className="script">
                Suara Anda
                <br />
                Untuk Masa Depan Undip!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="reveal" style={{ paddingTop: 20 }}>
        <div className="wrap tf">
          <div>
            <span className="dash" />
            <h2>Tim & Pendukung</h2>
            <p style={{ fontSize: ".82rem", color: "var(--muted)", marginTop: 4 }}>
              Bersama tim solid untuk kemenangan kita!
            </p>
            <div className="team">
              {team.map((member) => (
                <div key={member.name}>
                  <i>{member.icon}</i>
                  {member.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="head" style={{ margin: 0 }}>
              <div>
                <span className="dash" />
                <h2>FAQ</h2>
                <p>Pertanyaan yang sering diajukan</p>
              </div>
              <a href="#faq" className="btn btn-l">
                Lihat Semua →
              </a>
            </div>
            <div className="card faq">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
