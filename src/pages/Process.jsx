import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SEO from "../components/SEO.jsx";
import { processSteps } from "../data/processSteps.js";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const processCardHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 } 
  },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 15
    } 
  }
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5, x: -20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    x: 0,
    transition: { 
      duration: 0.5,
      type: "spring",
      stiffness: 500
    }
  },
  hover: {
    scale: 1.1,
    x: 5,
    color: "#00ffc4",
    transition: { duration: 0.2 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, delay: 0.1 }
  },
  hover: {
    x: 5,
    transition: { duration: 0.2 }
  }
};

const bodyVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 }
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.2 }
  }
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Floating Icons Component
const FloatingIcons = () => {
  const icons = ['⚡', '🎯', '💡', '🔧', '📋', '✅', '🔄', '🚀'];
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/10 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 60 - 30, 0],
            rotate: [0, 360],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: Math.random() * 12 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Timeline Connector Line
const TimelineConnector = () => {
  return (
    <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00ffc4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00ffc4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00ffc4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="10 10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </svg>
  );
};

// Step Number Badge Component
const StepBadge = ({ number }) => {
  return (
    <motion.div
      variants={numberVariants}
      whileHover="hover"
      className="relative inline-block"
    >
      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
      <div className="relative font-mono text-accent text-xs bg-accent/10 px-3 py-1 rounded-full border border-accent/20 inline-block">
        Step {number}
      </div>
    </motion.div>
  );
};

export default function Process() {
  const heroRef = useRef(null);
  const stepsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.1 });

  return (
    <>
      <SEO
        title="Process"
        description="How I run an engagement, from discovery to aftercare."
        path="/process"
      />
      
      <AnimatedBackground />
      <FloatingIcons />
      <TimelineConnector />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-page container-px pt-20 pb-10 relative z-10"
      >
        <motion.div 
          variants={fadeInLeft}
          className="eyebrow mb-6 inline-block"
        >
          Process
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="h-display text-4xl md:text-6xl max-w-3xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
        >
          A calm, predictable rhythm.
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed"
        >
          The way the work happens matters as much as the work itself. Here's
          what to expect, week by week.
        </motion.p>
        
        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/30 text-xs"
          >
            <span>Explore process</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Process Steps Grid Section */}
      <motion.section 
        ref={stepsRef}
        initial="hidden"
        animate={stepsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-page container-px py-16 relative z-10"
      >
        <motion.div 
          variants={dividerVariants}
          className="border-t border-line origin-left mb-12"
        />
        
        <motion.div 
          variants={staggerGrid}
          className="grid md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line"
        >
          {processSteps.map((s, idx) => (
            <motion.article
              key={s.n}
              variants={processCardHover}
              initial="rest"
              whileHover="hover"
              animate="rest"
              custom={idx}
              className="bg-ink-900/70 p-8 lg:p-10 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              {/* Step number badge */}
              <div className="relative z-10">
                <StepBadge number={s.n} />
              </div>
              
              {/* Title */}
              <motion.h2 
                variants={titleVariants}
                className="mt-6 font-display text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300 relative z-10"
              >
                {s.title}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                variants={bodyVariants}
                className="mt-4 text-white/65 text-sm leading-relaxed relative z-10"
              >
                {s.body}
              </motion.p>
              
              {/* Animated progress bar at bottom */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent/0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Step number in background */}
              <motion.div 
                className="absolute bottom-4 right-4 text-6xl font-black text-white/5 font-mono pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {s.n.toString().padStart(2, '0')}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="max-w-page container-px py-20 relative z-10"
      >
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
          className="card p-10 text-center bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-sm border border-accent/20 shadow-2xl relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />
          
          <motion.h2 
            className="text-2xl md:text-3xl font-display text-white"
            whileHover={{ scale: 1.02 }}
          >
            Ready to start the process?
          </motion.h2>
          <motion.p 
            className="mt-3 text-white/60 text-sm max-w-md mx-auto"
            whileHover={{ color: "rgba(255,255,255,0.8)" }}
          >
            Let's discuss your project and see if we're a good fit.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className="mt-6"
          >
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-accent text-ink-950 rounded-lg font-medium shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a conversation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center z-50 hover:bg-accent/20 transition-all duration-300 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 400 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="text-accent text-lg"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.div>
      </motion.button>

      {/* Process counter */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 left-8 z-50 hidden lg:block"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <div className="text-[10px] text-white/45 font-mono">Process Steps</div>
          <div className="text-accent font-mono text-sm">{processSteps.length}</div>
        </div>
      </motion.div>
    </>
  );
}