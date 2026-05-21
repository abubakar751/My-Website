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

// Professional Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2,
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

const cardHover = {
  rest: { 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 25 } 
  },
  hover: { 
    scale: 1.02, 
    y: -4, 
    transition: { 
      duration: 0.3, 
      type: "spring", 
      stiffness: 300,
      damping: 20
    } 
  }
};

const timelineItem = {
  hidden: { opacity: 0, x: -30 },
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
    x: 8,
    transition: { duration: 0.2, type: "spring", stiffness: 400 }
  }
};

// Solo Pilot Animation Component
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
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 animate-ping-slow">
            <div className="w-2 h-2 rounded-full bg-accent/40 blur-md" />
          </div>
          <div className="relative w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,196,0.8)]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Professional Glow Trail
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
        x: mousePos.x - 10,
        y: mousePos.y - 10,
        opacity: isMoving ? 0.6 : 0,
        scale: isMoving ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
    >
      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-accent/20 to-accent/5 blur-md" />
    </motion.div>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
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
        title="About | Abu Bakar"
        description="Full Stack Developer specializing in enterprise software with Java, Spring Boot, React, and Angular. 8+ years of experience building scalable systems."
        path="/about"
      />

      {/* Animation Keyframes */}
      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(3); opacity: 0; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes soft-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .soft-float {
          animation: soft-float 6s ease-in-out infinite;
        }
      `}</style>
      
      {/* Solo Pilot Animation - Only on desktop */}
      {showPilot && !isMobile && <SoloPilot />}
      
      {/* Mouse glow trail */}
      <GlowTrail />
      
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Black Gradient Background - Changed to black */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-ink-950 to-black" />
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Hero Section - Image only at top on mobile, side by side on desktop */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative"
      >
        {/* Mobile Layout: Image at top, then text */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Image Section - Shows at top on mobile, right side on desktop */}
          <div className="lg:order-2 block">
            <motion.div 
              variants={fadeInRight}
              className="flex-shrink-0 relative group"
            >
              {/* Outer ring glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-transparent blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Rotating border */}
              <div className="absolute inset-[-3px] rounded-full border border-accent/40 animate-spin-slow" />
              
              {/* Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 shadow-2xl mx-auto lg:mx-0">
                <img 
                  src="/Photograph.jpg" 
                  alt="Abu Bakar - Full Stack Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Professional decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-accent/10 pointer-events-none hidden lg:block" />
              
              {/* Status Badge */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-black/95 backdrop-blur-sm rounded-full border border-accent/30 shadow-lg whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium tracking-wide">OPEN FOR WORK</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <motion.div 
              variants={fadeInLeft}
              className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-wider justify-center lg:justify-start"
            >
              <span className="w-8 h-px bg-accent/50 hidden lg:inline-block" />
              ABOUT ME
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent gradient-shift"
            >
              Engineer for the
              <br />
              long run.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I'm Abu Bakar — a full stack developer with deep Java expertise
              and a frontend craft. I build systems that outlast their launch hype.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-slate-400">Available for contracts</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-700" />
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-sm text-slate-400">📍 Remote | On Site · UTC+5</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Grid - Professional Layout */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-6 text-slate-300 leading-relaxed"
        >
          <motion.p variants={fadeInLeft} className="text-base">
            Most of my work is invisible to the people it serves — internal
            tools, back-office platforms, the systems that quietly keep
            warehouses, finance teams and sales orgs moving. That suits me.
          </motion.p>
          <motion.p variants={fadeInLeft} className="text-base">
            I write Java and Spring Boot on the backend, React or Angular on
            the frontend, and PostgreSQL underneath when I have a choice. I've
            shipped microservices when the system needed them, and well-factored
            monoliths when it didn't.
          </motion.p>
          <motion.p variants={fadeInLeft} className="text-base">
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
          className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-accent/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h3 className="text-accent font-mono text-sm tracking-wider">TECH STACK</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Backend", value: "Java, Spring Boot, Spring Security, REST APIs, Microservices, Spring Cloud" },
              { label: "Frontend", value: "React, Angular" },
              { label: "Database", value: "PostgreSQL, Oracle, MongoDB" },
              { label: "DevOps", value: "AWS, Docker, Kubernetes, Jenkins" },
              { label: "Experience", value: "3+ Years" },
              { label: "Location", value: "Remote | On Site · UTC+5" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="space-y-1"
              >
                <dt className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</dt>
                <dd className="text-sm text-white font-medium">{item.value}</dd>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </section>

      {/* Principles Section */}
      <motion.section 
        ref={principlesRef}
        initial="hidden"
        animate={principlesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <SectionHeader eyebrow="Principles" title="What I won't compromise on." />
        <motion.div 
          variants={staggerGrid}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          {principles.map((p) => (
            <motion.div
              key={p.t}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                {p.t}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">
                {p.d}
              </p>
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
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <SectionHeader eyebrow="Experience" title="Recent journey." />
        <div className="mt-12 relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />
          
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div 
                key={item.y} 
                variants={timelineItem}
                custom={idx}
                whileHover="hover"
                className="relative pl-8 group"
              >
                <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-black group-hover:ring-accent/20 transition-all" />
                <div className="text-xs font-mono text-accent mb-1">{item.y}</div>
                <div className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                  {item.t}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Professional CTA Section */}
      <motion.section 
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-2xl border border-accent/20 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 mb-6">
            I'm currently accepting one new engagement for the next quarter.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-accent text-black font-semibold rounded-lg shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-accent/20 flex items-center justify-center z-50 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </>
  );
}