import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { caseStudies } from "../data/caseStudies.js";

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="In-depth looks at enterprise platforms shipped for real clients with measurable outcomes."
        path="/case-studies"
      />
      <section className="max-w-page container-px pt-20 pb-10">
        <div className="eyebrow mb-6">Case studies</div>
        <h1 className="h-display text-4xl md:text-6xl max-w-3xl">
          A few engagements, in full.
        </h1>
        <p className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed">
          Outcomes first, then the story behind them. Numbers are real, names
          are sometimes lightly anonymised.
        </p>
      </section>

      <section className="max-w-page container-px py-16 space-y-10">
        {caseStudies.map((c) => (
          <article key={c.slug} className="card p-8 lg:p-12">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
              <aside className="text-sm">
                <div className="text-xs uppercase tracking-[0.22em] text-accent">{c.client}</div>
                <dl className="mt-6 space-y-3">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <dt className="text-white/45">Role</dt><dd className="text-white">{c.role}</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <dt className="text-white/45">Duration</dt><dd className="text-white">{c.duration}</dd>
                  </div>
                  <div className="border-b border-white/5 pb-2">
                    <dt className="text-white/45 mb-2">Stack</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {c.stack.map((s) => (
                        <span key={s} className="text-[11px] font-mono text-white/65 border border-white/10 rounded px-2 py-0.5">{s}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white">{c.title}</h2>
                <p className="mt-4 text-white/65 leading-relaxed">{c.summary}</p>
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">Impact</div>
                  <ul className="mt-3 grid sm:grid-cols-3 gap-3">
                    {c.impact.map((i) => (
                      <li key={i} className="rounded-lg bg-white/[0.04] border border-white/8 p-4 text-sm text-white">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-page container-px py-16">
        <SectionHeader
          eyebrow="Want one of these for your team?"
          title="The next case study could be yours."
        />
        <div className="mt-10">
          <Link to="/contact" className="btn-primary">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
