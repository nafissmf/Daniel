import { faqs, profiles, site } from "@/lib/content";

const ogImage = {
  url: "/images/i4.jpg",
  width: 800,
  height: 1200,
  alt: "Daniel Lamganda Tua Gultom dan Kaylila Alexandra Nesta",
};

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const seo = {
  title: site.title,
  description: site.description,
  keywords: [
    "Daniel Lamganda Tua Gultom",
    "Kaylila Alexandra Nesta",
    "Daniel dan Kaylila",
    "paslon FSM",
    "FSM Undip",
    "Fakultas Sains dan Matematika",
    "Universitas Diponegoro",
    "pemilihan mahasiswa Undip",
  ],
  image: ogImage,
};

export function jsonLd() {
  const url = getSiteUrl();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: "Daniel & Kaylila",
        url,
        inLanguage: "id-ID",
        description: site.description,
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: site.title,
        description: site.description,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${url}/#website` },
        primaryImageOfPage: `${url}${ogImage.url}`,
        about: [{ "@id": `${url}/#daniel` }, { "@id": `${url}/#kaylila` }],
      },
      ...profiles.map((profile) => ({
        "@type": "Person",
        "@id": `${url}/#${profile.name.startsWith("Daniel") ? "daniel" : "kaylila"}`,
        name: profile.name,
        description: profile.summary,
        jobTitle: profile.role,
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "Universitas Diponegoro",
          url: "https://www.undip.ac.id/",
        },
        image: `${url}${ogImage.url}`,
      })),
      {
        "@type": "Event",
        name: "Hari Pemilihan Daniel & Kaylila",
        description: "Pemilihan pasangan calon FSM Universitas Diponegoro.",
        startDate: site.electionAt,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        image: `${url}${ogImage.url}`,
        location: {
          "@type": "Place",
          name: "Universitas Diponegoro",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Semarang",
            addressRegion: "Jawa Tengah",
            addressCountry: "ID",
          },
        },
        organizer: { "@id": `${url}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
