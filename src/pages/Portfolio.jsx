import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SEO from "../components/SEO.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

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
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const buttonVariants = {
  initial: { scale: 1, opacity: 0.7 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  },
  exit: { 
    scale: 0.9, 
    opacity: 0,
    transition: { duration: 0.15 }
  }
};

const categoryContainer = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3
    }
  }
};

// Animated Background Component
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

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-accent/5 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-10px",
          }}
          animate={{
            y: ["-100vh", "100vh"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const filterInView = useInView(filterRef, { once: true, amount: 0.1 });

  const filtered = useMemo(() => {
    return active === "All" ? projects : projects.filter((p) => p.category === active);
  }, [active]);

  const handleCategoryChange = (category) => {
    setIsFiltering(true);
    setActive(category);
    setTimeout(() => setIsFiltering(false), 400);
  };

  return (
    <>
      <SEO
        title="Portfolio"
        description="Selected enterprise platforms, dashboards, ERPs, CRMs and business websites."
        path="/portfolio"
      />
      
      <ScrollProgress />
      <AnimatedBackground />
      <FloatingParticles />
      
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
          Portfolio
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="h-display text-4xl md:text-6xl max-w-3xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
        >
          Work I'm proud of, mostly because it still runs.
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed"
        >
          A small selection. Several engagements are under NDA and aren't shown
          here — happy to walk through them on a call.
        </motion.p>
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        ref={filterRef}
        initial="hidden"
        animate={filterInView ? "visible" : "hidden"}
        variants={categoryContainer}
        className="max-w-page container-px py-10 relative"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <motion.button
              key={c}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              exit="exit"
              onClick={() => handleCategoryChange(c)}
              className={`relative px-5 py-2.5 rounded-full text-sm border transition-all duration-300 overflow-hidden ${
                active === c
                  ? "border-accent text-ink-950 font-medium"
                  : "border-white/12 text-white/70 hover:border-white/25 hover:text-white"
              }`}
            >
              {/* Active background */}
              {active === c && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
              
              {/* Button text */}
              <span className={`relative z-10 flex items-center gap-2`}>
                {c}
                {active === c && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="inline-block w-1.5 h-1.5 bg-ink-950 rounded-full"
                  />
                )}
              </span>
            </motion.button>
          ))}
        </div>
        
        {/* Project count indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-6 text-sm text-white/45 font-mono flex items-center gap-2"
          >
            <span>Showing</span>
            <motion.span
              key={filtered.length}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-2 py-0.5 bg-accent/20 rounded-full text-accent font-medium"
            >
              {filtered.length}
            </motion.span>
            <span>project{filtered.length !== 1 ? 's' : ''}</span>
            {active !== 'All' && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white/35"
              >
                in <span className="text-accent">{active}</span>
              </motion.span>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Projects Grid Section */}
      <motion.section className="max-w-page container-px pb-24 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerGrid}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={`${active}-${p.title}`}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9,
                  transition: { duration: 0.2 }
                }}
                layout
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <p className="text-white/60 text-lg">
                No projects found in this category.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange("All")}
                className="mt-4 px-6 py-2 bg-accent/20 hover:bg-accent/30 rounded-lg text-accent text-sm transition-all duration-300"
              >
                View all projects
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Loading overlay */}
        <AnimatePresence>
          {isFiltering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink-950/60 backdrop-blur-sm z-40 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative"
              >
                <div className="w-16 h-16 border-3 border-accent/20 rounded-full" />
                <div className="absolute top-0 left-0 w-16 h-16 border-3 border-accent border-t-transparent rounded-full" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

      {/* View counter stats */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 left-8 z-50 hidden lg:block"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <div className="text-[10px] text-white/45 font-mono">Total Projects</div>
          <div className="text-accent font-mono text-sm">{projects.length}</div>
        </div>
      </motion.div>
    </>
  );
}