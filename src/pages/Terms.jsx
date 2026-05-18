import SEO from "../components/SEO.jsx";

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms governing the use of this website." path="/terms" />
      <section className="max-w-3xl container-px pt-20 pb-24 mx-auto">
        <div className="eyebrow mb-6">Terms & Conditions</div>
        <h1 className="h-display text-4xl md:text-5xl">Terms & Conditions</h1>
        <p className="mt-6 text-white/55 text-sm">Last updated: January 2025</p>

        <div className="mt-10 space-y-6 text-white/70 leading-relaxed">
          <Section title="Use of this website">
            This website is a personal portfolio. You may view and share its contents for
            non-commercial purposes. Republication of long-form content without permission isn't
            permitted.
          </Section>
          <Section title="Intellectual property">
            All written content, code samples, design and brand assets remain my property unless
            otherwise stated. Client work shown here is published with permission.
          </Section>
          <Section title="No warranty">
            The site is provided "as is". I make no warranties about its accuracy or fitness for a
            particular purpose. External links are provided for convenience, not endorsement.
          </Section>
          <Section title="Engagement terms">
            Any project work is governed by a separate, signed statement of work — not these site
            terms.
          </Section>
          <Section title="Changes">
            These terms may change. The "last updated" date above will reflect any revision.
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-white">{title}</h2>
      <p className="mt-3">{children}</p>
    </div>
  );
}
