import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SEO from "../components/SEO.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { Link } from "react-router-dom";

const principles = [
  { t: "Boring tech, ambitious outcomes", d: "I optimise for the third year of a system's life, not its launch week." },
  { t: "Write less, but write it well", d: "Smaller surface area, fewer dependencies, fewer surprises in production." },
  { t: "Make the business legible", d: "Code mirrors the domain. New hires shouldn't need a translator." },
  { t: "Quiet handovers", d: "If the launch is dramatic, something earlier went wrong." },
];

const timeline = [
  { y: "2022", t: "Lead Engineer @ FinScale", d: "Architected a microservices-based lending platform handling $50M+ in transactions. Led a team of 5 engineers." },
  { y: "2023", t: "Senior Full Stack @ CloudRetail", d: "Built a real-time inventory management system used by 200+ stores. Reduced sync latency from 5 minutes to 3 seconds." },
  { y: "2024", t: "Technical Consultant", d: "Helped 3 startups scale their platforms. Specialized in performance optimization and team mentorship." },
  { y: "2025", t: "Independent Practice", d: "Working with a small roster of clients on platforms they'll depend on for years." },
];

// Enhanced Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] // Custom easing
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
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
      delayChildren: 0.2,
      ease: "easeOut"
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

const timelineItem = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom) => ({ 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      delay: custom * 0.1,
      ease: "easeOut" 
    } 
  }),
  hover: {
    x: 10,
    transition: { duration: 0.2, type: "spring", stiffness: 400 }
  }
};

const glowPulse = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Enhanced Solo Pilot Animation Component with more dynamic movement
const SoloPilot = () => {
  const waypoints = [
    { x: "5%", y: "10%" },
    { x: "90%", y: "25%" },
    { x: "45%", y: "45%" },
    { x: "10%", y: "65%" },
    { x: "85%", y: "80%" },
    { x: "50%", y: "90%" },
    { x: "75%", y: "15%" },
    { x: "20%", y: "30%" },
    { x: "95%", y: "60%" },
  ];

  const duration = 30;

  return (
    <motion.div
      className="fixed z-[100] pointer-events-none"
      initial={{ x: waypoints[0].x, y: waypoints[0].y, opacity: 1 }}
      animate={{
        x: waypoints.map(w => w.x),
        y: waypoints.map(w => w.y),
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        times: waypoints.map((_, i) => i / (waypoints.length - 1)),
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 animate-ping-slow">
            <div className="w-3 h-3 rounded-full bg-accent/30 blur-md" />
          </div>
          <div className="relative w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,255,196,0.6)] animate-pulse" />
          <motion.div
            className="absolute -top-1 -left-1 w-1 h-1 rounded-full bg-accent/40"
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity },
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Glow Trail that follows mouse with trail effect
const GlowTrail = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = React.useState(false);
  let timeout;

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed z-[99] pointer-events-none"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
        opacity: isMoving ? 0.8 : 0,
        scale: isMoving ? 1 : 0.6,
      }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="relative">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-sm" />
          <div className="absolute inset-0 w-6 h-6 rounded-full bg-accent/15 blur-md" />
          <div className="absolute inset-1 w-4 h-4 rounded-full bg-accent/20 blur-sm" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-accent/10 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-10px",
          }}
          animate={{
            y: ["-100vh", "100vh"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
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

export default function About() {
  const [showPilot, setShowPilot] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const heroRef = useRef(null);
  const principlesRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);
  const snapshotRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const principlesInView = useInView(principlesRef, { once: true, amount: 0.1 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.1 });
  const snapshotInView = useInView(snapshotRef, { once: true, amount: 0.2 });

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setShowPilot(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <SEO
        title="About"
        description="Abu Bakar is a Full Stack Developer focused on enterprise software with Java, Spring Boot, React and Angular."
        path="/about"
      />

      {/* Animation Keyframes */}
      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(3); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
      `}</style>
      
      {/* Solo Pilot Animation - Only on desktop */}
      {showPilot && !isMobile && <SoloPilot />}
      
      {/* Mouse glow trail */}
      <GlowTrail />
      
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-page container-px pt-20 pb-16 relative"
      >
        <motion.div 
          variants={fadeInLeft}
          className="eyebrow mb-6 opacity-80 inline-block"
        >
          About
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="h-display text-4xl md:text-6xl max-w-3xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent gradient-shift"
        >
          An engineer for the long, unglamorous middle.
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed"
        >
          I'm Abu Bakar — a full stack developer with a Java backend background
          and a frontend obsession. I build software for teams who need it to
          keep working long after the launch announcement is forgotten.
        </motion.p>
      </motion.section>

      {/* Main Content Grid */}
      <section className="max-w-page container-px py-16 grid lg:grid-cols-[1.2fr_1fr] gap-14 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-6 text-white/70 leading-relaxed"
        >
          <motion.p 
            variants={fadeInLeft}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            Most of my work is invisible to the people it serves — internal
            tools, back-office platforms, the systems that quietly keep
            warehouses, finance teams and sales orgs moving. That suits me.
          </motion.p>
          <motion.p 
            variants={fadeInLeft}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            I write Java and Spring Boot on the backend, React or Angular on
            the frontend, and PostgreSQL underneath when I have a choice. I've
            shipped microservices when the system needed them, and well-factored
            monoliths when it didn't.
          </motion.p>
          <motion.p 
            variants={fadeInLeft}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            My favourite engagements are 3–9 months, with a single client, a
            real budget, and a clear measure of success. I keep my roster small
            on purpose.
          </motion.p>
        </motion.div>
        
        <motion.aside 
          ref={snapshotRef}
          initial="hidden"
          animate={snapshotInView ? "visible" : "hidden"}
          variants={fadeInRight}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="card p-7 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 shadow-2xl"
        >
          <motion.div 
            className="text-xs uppercase tracking-[0.22em] text-accent"
            whileHover={{ letterSpacing: "0.3em", transition: { duration: 0.3 } }}
          >
            Snapshot
          </motion.div>
          <dl className="mt-5 grid grid-cols-2 gap-y-4 text-sm">
            {[
              ["Role", "Full Stack Developer"],
              ["Years", "8+"],
              ["Backend", "Java, Spring Boot"],
              ["Frontend", "React, Angular"],
              ["Database", "PostgreSQL, Oracle"],
              ["Cloud", "AWS, Docker"],
              ["Working hours", "Remote, 4h overlap"],
              ["Languages", "English, Urdu"],
            ].map(([dt, dd], idx) => (
              <motion.div
                key={dt}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="contents"
              >
                <dt className="text-white/45">{dt}</dt>
                <dd className="text-white font-medium">{dd}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.aside>
      </section>

      {/* Principles Section */}
      <motion.section 
        ref={principlesRef}
        initial="hidden"
        animate={principlesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-page container-px py-16 relative"
      >
        <SectionHeader eyebrow="Principles" title="What I won't compromise on." />
        <motion.div 
          variants={staggerGrid}
          className="mt-14 grid md:grid-cols-2 gap-6"
        >
          {principles.map((p, idx) => (
            <motion.div
              key={p.t}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              animate="rest"
              custom={idx}
              className="card p-7 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              <motion.h3 
                className="font-display text-2xl text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {p.t}
              </motion.h3>
              <motion.p 
                className="mt-3 text-white/60 text-sm leading-relaxed"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                {p.d}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        ref={timelineRef}
        initial="hidden"
        animate={timelineInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-page container-px py-20 relative"
      >
        <SectionHeader eyebrow="Timeline" title="Recent journey." />
        <motion.div 
          variants={staggerContainer}
          className="mt-14 relative"
        >
          <motion.div 
            className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <ol className="relative pl-8 space-y-10">
            {timeline.map((t, idx) => (
              <motion.li 
                key={t.y} 
                variants={timelineItem}
                custom={idx}
                whileHover="hover"
                className="relative group"
              >
                <motion.span 
                  className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-ink-950 group-hover:ring-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.5 }}
                />
                <motion.div 
                  className="text-xs font-mono text-accent group-hover:text-accent/80 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.y}
                </motion.div>
                <motion.div 
                  className="font-display text-xl text-white mt-1 group-hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {t.t}
                </motion.div>
                <motion.p 
                  className="mt-2 text-white/60 text-sm leading-relaxed max-w-xl group-hover:text-white/80 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  {t.d}
                </motion.p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-page container-px py-20 relative"
      >
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
          className="card p-10 flex flex-wrap items-center justify-between gap-6 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-sm border border-accent/20 shadow-2xl relative overflow-hidden group"
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
          <div>
            <motion.h2 
              className="h-display text-3xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Have a project in mind?
            </motion.h2>
            <motion.p 
              className="mt-2 text-white/60 text-sm"
              whileHover={{ color: "rgba(255,255,255,0.8)" }}
            >
              I'm currently accepting one new engagement for the next quarter.
            </motion.p>
          </div>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <Link 
              to="/contact" 
              className="btn-primary relative overflow-hidden group inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
            >
              <span className="relative z-10">Get in touch</span>
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

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="text-accent text-xs font-mono"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ▼
        </motion.div>
      </motion.div>
    </>
  );
}