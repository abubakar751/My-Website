import { motion } from "framer-motion";

const ICONS = [
  { label: "Java", x: "8%", y: "20%", d: 9 },
  { label: "Spring", x: "85%", y: "18%", d: 11 },
  { label: "React", x: "12%", y: "70%", d: 12 },
  { label: "Angular", x: "82%", y: "72%", d: 10 },
  { label: "Node", x: "50%", y: "10%", d: 13 },
  { label: "AWS", x: "48%", y: "82%", d: 9 },
  { label: "Postgres", x: "92%", y: "45%", d: 14 },
  { label: "Docker", x: "4%", y: "45%", d: 12 },
];

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {ICONS.map((i, idx) => (
        <motion.div
          key={i.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.06, duration: 0.6 }}
          style={{ left: i.x, top: i.y }}
          className="absolute"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: i.d, repeat: Infinity, ease: "easeInOut" }}
            className="px-3 py-1.5 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur text-[11px] font-mono text-white/80 shadow-soft"
          >
            {i.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
