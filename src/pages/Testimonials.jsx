import SEO from "../components/SEO.jsx";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="What clients have said about working with Abu Bakar."
        path="/testimonials"
      />
      <section className="max-w-page container-px pt-20 pb-10">
        <div className="eyebrow mb-6">Testimonials</div>
        <h1 className="h-display text-4xl md:text-6xl max-w-3xl">
          Words from people who had to depend on the work.
        </h1>
      </section>

      <section className="max-w-page container-px py-16 grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="card p-8">
            <div className="text-accent font-display text-4xl leading-none">"</div>
            <blockquote className="mt-3 font-display text-2xl leading-snug text-white">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6">
              <div className="text-sm text-white">{t.name}</div>
              <div className="text-xs text-white/45">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
