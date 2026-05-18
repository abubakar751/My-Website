import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group card overflow-hidden hover:border-white/20 transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-90 transition duration-700 group-hover:scale-[1.04]"
          style={{ backgroundImage: project.gradient }}
          aria-hidden
        />
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
          <div className="font-display text-2xl text-white drop-shadow">{project.short}</div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/80 bg-black/30 backdrop-blur px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{project.summary}</p>
        <ul className="mt-4 grid grid-cols-2 gap-y-1 gap-x-3 text-xs text-white/55">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-accent">›</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono text-white/65 border border-white/10 rounded px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <a
            href={project.live || "#"}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:text-accent-warm inline-flex items-center gap-1.5"
          >
            Live preview
            <span aria-hidden>→</span>
          </a>
          <span className="text-[11px] text-white/35 font-mono">{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}
