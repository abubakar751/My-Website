import SEO from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { techStack } from "../data/techStack.js";

export default function TechStack() {
  return (
    <>
      <SEO
        title="Tech Stack"
        description="Java, Spring Boot, React, Angular, Node.js, PostgreSQL, AWS — the tools I reach for."
        path="/tech-stack"
      />
      <section className="max-w-page container-px pt-20 pb-10">
        <div className="eyebrow mb-6">Tech stack</div>
        <h1 className="h-display text-4xl md:text-6xl max-w-3xl">
          A toolbox I actually know well.
        </h1>
        <p className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed">
          I'd rather be excellent with twelve tools than mediocre with forty.
          Below is the working set — the rest I'll learn for you when there's a
          reason it's the right answer.
        </p>
      </section>

      <section className="max-w-page container-px py-16 space-y-12">
        {techStack.map((g) => (
          <div key={g.group}>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl text-white">{g.group}</h2>
              <span className="text-xs uppercase tracking-[0.22em] text-white/40">
                {g.items.length} tools
              </span>
            </div>
            <div className="divider mt-4" />
            <div className="mt-6 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-4 py-2 rounded-full border border-white/12 bg-white/[0.03] text-sm text-white/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-page container-px py-20">
        <SectionHeader
          eyebrow="Adjacent"
          title="And the supporting cast."
          intro="Things I use weekly that don't fit neatly above."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
          {[
            { t: "Testing", l: ["JUnit", "Vitest", "Playwright", "RestAssured"] },
            { t: "Messaging", l: ["Kafka", "RabbitMQ", "AWS SQS"] },
            { t: "Observability", l: ["Grafana", "Prometheus", "Sentry", "CloudWatch"] },
            { t: "Build & CI", l: ["Maven", "Gradle", "GitHub Actions", "GitLab CI"] },
            { t: "Auth", l: ["OAuth 2", "OpenID Connect", "Keycloak", "Auth0"] },
            { t: "Tooling", l: ["Figma", "Notion", "Linear", "Postman"] },
          ].map((s) => (
            <div key={s.t} className="card p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-accent">{s.t}</div>
              <ul className="mt-4 space-y-1.5 text-white/70">
                {s.l.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
