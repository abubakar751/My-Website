import { Link } from "react-router-dom";
import { contact } from "../data/contact.js";

const cols = [
  {
    title: "Work",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/case-studies", label: "Case studies" },
      { to: "/services", label: "Services" },
      { to: "/process", label: "Process" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/blog", label: "Journal" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="max-w-page container-px py-16 grid gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="font-display text-3xl text-white">Let's build something durable.</div>
          <p className="mt-3 text-white/55 max-w-md text-sm leading-relaxed">
            Available for select engagements with startups and established teams.
            From a single API to a full enterprise platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Start a project</Link>
            <a href={contact.calendar} className="btn-ghost">Book a call</a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-white/45 uppercase text-[11px] tracking-[0.22em] mb-4">
                {c.title}
              </div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-white/75 hover:text-accent transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="max-w-page container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
        <div>© {year} Abu Bakar. Crafted with care.</div>
        <div className="flex items-center gap-5">
          <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={`mailto:${contact.email}`} className="hover:text-white">Email</a>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
