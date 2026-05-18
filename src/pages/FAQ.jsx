import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO.jsx";
import { faqs } from "../data/faqs.js";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to the questions I get most often from prospective clients."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <section className="max-w-page container-px pt-20 pb-10">
        <div className="eyebrow mb-6">FAQ</div>
        <h1 className="h-display text-4xl md:text-6xl max-w-3xl">
          The questions that come up most.
        </h1>
      </section>

      <section className="max-w-3xl container-px py-12 mx-auto">
        <ul className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <li key={f.q} className="border border-line rounded-xl overflow-hidden bg-ink-900/50">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-white">{f.q}</span>
                  <span className={`h-6 w-6 rounded-full border border-white/15 grid place-items-center text-xs transition ${isOpen ? "rotate-45 border-accent text-accent" : "text-white/60"}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 text-white/65 text-sm leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
