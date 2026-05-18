import SEO from "../components/SEO.jsx";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How this site handles your data." path="/privacy" />
      <section className="max-w-3xl container-px pt-20 pb-24 mx-auto prose-invert">
        <div className="eyebrow mb-6">Privacy Policy</div>
        <h1 className="h-display text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mt-6 text-white/55 text-sm">Last updated: January 2025</p>

        <div className="mt-10 space-y-6 text-white/70 leading-relaxed">
          <p>This is a simple, plain-language summary of how this website handles your data.</p>

          <Section title="What I collect">
            This site does not run third-party analytics by default. If you fill in the contact
            form, your name, email, company name and message are sent directly to my inbox via
            your email client. Nothing is stored on this site.
          </Section>
          <Section title="Cookies">
            This site uses no tracking cookies. Any cookies are strictly functional (e.g. session
            settings) and never used for advertising.
          </Section>
          <Section title="Third parties">
            External links (WhatsApp, LinkedIn, GitHub, etc.) take you to those services, which
            have their own privacy policies.
          </Section>
          <Section title="Your rights">
            You can ask me to delete any correspondence at any time. Just reply to the email
            thread with the request.
          </Section>
          <Section title="Contact">
            Questions about this policy? Use the contact page or email directly.
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
