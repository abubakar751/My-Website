import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, intro, align = "left" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="h-display text-3xl sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {intro && (
        <p className="mt-5 text-white/60 text-base leading-relaxed">{intro}</p>
      )}
    </div>
  );
}
