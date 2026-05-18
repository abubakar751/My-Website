import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const word = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AnimatedHeadline({ lines = [], accentLast = true }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="h-display text-[clamp(2.5rem,6.4vw,5.5rem)]"
    >
      {lines.map((line, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`block ${accentLast && i === lines.length - 1 ? "text-accent italic font-display" : ""}`}
        >
          {line}
        </motion.span>
      ))}
    </motion.h1>
  );
}
