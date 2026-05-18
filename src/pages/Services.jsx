import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { services } from "../data/services.js";

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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 400 } 
  },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { 
      duration: 0.3, 
      type: "spring", 
      stiffness: 300,
      damping: 15
    } 
  }
};

const serviceCardHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 } 
  },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 400
    } 
  }
};

const engagementHover = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.2 } 
  },
  hover: { 
    scale: 1.05, 
    y: -8,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 300
    } 
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 500 }
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(0, 255, 196, 0.15)",
    borderColor: "rgba(0, 255, 196, 0.3)",
    transition: { duration: 0.2 }
  }
};

const numberVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, delay: 0.1 }
  },
  hover: {
    x: 5,
    color: "#00ffc4",
    transition: { duration: 0.2 }
  }
};

// Background Animation Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
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
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px]"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
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
  const icons = ['⚡', '💻', '🚀', '🎯', '⚙️', '🔧', '📊', '🔄'];
  
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
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const engagementsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const engagementsInView = useInView(engagementsRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.1 });

  return (
    <>
      <SEO
        title="Services"
        description="Enterprise web applications, dashboards, APIs, modernization, frontend engineering and cloud delivery."
        path="/services"
      />
      
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingIcons />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-page container-px pt-20 pb-10 relative"
      >
        <motion.div 
          variants={fadeInLeft}
          className="eyebrow mb-6 inline-block"
        >
          Services
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="h-display text-4xl md:text-6xl max-w-3xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
        >
          Six engagements. Deliberately narrow.
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed"
        >
          Each one represents work I've shipped more than ten times. If your
          project doesn't fit cleanly, write anyway — I'll refer you if I'm not
          the right person.
        </motion.p>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section 
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-page container-px py-16 relative"
      >
        <motion.div 
          variants={staggerGrid}
          className="grid lg:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line"
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.n}
              variants={serviceCardHover}
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
              
              <div className="flex items-center justify-between relative z-10">
                <motion.span 
                  variants={numberVariants}
                  className="font-mono text-xs text-accent"
                >
                  {s.n}
                </motion.span>
                <motion.span 
                  className="text-[11px] uppercase tracking-[0.22em] text-white/35"
                  whileHover={{ letterSpacing: "0.3em", color: "#00ffc4" }}
                  transition={{ duration: 0.3 }}
                >
                  Service
                </motion.span>
              </div>
              
              <motion.h2 
                className="mt-6 font-display text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {s.title}
              </motion.h2>
              
              <motion.p 
                className="mt-3 text-white/65 text-sm leading-relaxed max-w-xl relative z-10"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {s.body}
              </motion.p>
              
              <motion.div 
                className="mt-6 flex flex-wrap gap-2 relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {s.deliverables.map((d, idx) => (
                  <motion.span
                    key={d}
                    variants={badgeVariants}
                    custom={idx}
                    whileHover="hover"
                    className="text-[11px] font-mono text-white/65 border border-white/10 rounded px-2 py-1 cursor-default transition-all duration-200"
                  >
                    {d}
                  </motion.span>
                ))}
              </motion.div>

              {/* Animated border bottom on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent/0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Engagement Models Section */}
      <motion.section 
        ref={engagementsRef}
        initial="hidden"
        animate={engagementsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-page container-px py-20 relative"
      >
        <SectionHeader eyebrow="How we'd work" title="Engagement models." />
        
        <motion.div 
          variants={staggerGrid}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { t: "Fixed-scope phase", d: "A defined slice with a clear deliverable. Best for greenfield builds and discrete feature work.", k: "From 4 weeks" },
            { t: "Weekly retainer", d: "Embedded with your team. Best for ongoing roadmap delivery and platform work.", k: "Min. 8 weeks" },
            { t: "Architecture audit", d: "A short paid review of your current system, with a written plan and a call.", k: "1 week" },
          ].map((m, idx) => (
            <motion.div
              key={m.t}
              variants={engagementHover}
              initial="rest"
              whileHover="hover"
              animate="rest"
              custom={idx}
              className="card p-7 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <motion.div 
                className="text-xs font-mono text-accent relative z-10"
                whileHover={{ scale: 1.05, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {m.k}
              </motion.div>
              
              <motion.h3 
                className="font-display text-xl text-white mt-3 relative z-10 group-hover:text-accent transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {m.t}
              </motion.h3>
              
              <motion.p 
                className="mt-3 text-sm text-white/60 leading-relaxed relative z-10"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                {m.d}
              </motion.p>
              
              {/* Animated icon that appears on hover */}
              <motion.div 
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: 10 }}
                whileHover={{ x: 0 }}
              >
                <motion.span 
                  className="text-accent text-xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className="inline-block"
          >
            <Link 
              to="/contact" 
              className="btn-primary relative overflow-hidden group inline-block px-8 py-4 bg-accent text-white rounded-lg font-medium shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discuss your project
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
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center z-50 hover:bg-accent/20 transition-all duration-300 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="text-accent text-sm"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.div>
      </motion.button>
    </>
  );
}