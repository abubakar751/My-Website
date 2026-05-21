import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SEO from "../components/SEO.jsx";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import CodeBackground from "../components/CodeBackground.jsx";
import FloatingTechIcons from "../components/FloatingTechIcons.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ContactButtons from "../components/ContactButtons.jsx";
import { projects } from "../data/projects.js";
import { services } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";
import { techStack } from "../data/techStack.js";
import { contact } from "../data/contact.js";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  jobTitle: contact.role,
  url: "/",
  sameAs: [contact.linkedin, contact.github],
};

const stats = [
  { k: "3+", v: "Years building" },
  { k: "10+", v: "Production systems" },
  { k: "3", v: "Industries served" },
  { k: "92%", v: "Repeat clients" },
];

const marqueeWords = [
  "Advanced Java", "Core Java", "Spring Boot", "Spring Security",
  "Microservices", "Spring Cloud", "REST APIs", "JWT Authentication",
  "OAuth 2.0", "API Gateway", "Service Discovery", "Apache Kafka",
  "RabbitMQ", "Redis", "WebSockets", "PostgreSQL", "MySQL",
  "MongoDB", "Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins",
  "GitHub Actions", "Nginx", "JUnit", "Mockito", "Swagger / OpenAPI",
  "System Design", "Scalable Architecture"
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// Mobile-optimized text animation
const AnimatedText = ({ text, className, delay = 0 }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  if (isMobile) {
    return <div className={className}>{text}</div>;
  }
  
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={fadeInUp}
          transition={{ delay: delay + i * 0.03 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Animated Background Circles Component - SAME AS BEFORE
const AnimatedBackgroundCircles = () => {
  const circles = [
    { size: "w-96 h-96", top: "-10%", left: "-5%", delay: 0, duration: 20, color: "from-accent/5" },
    { size: "w-[600px] h-[600px]", top: "40%", right: "-10%", delay: 5, duration: 25, color: "from-purple-500/5" },
    { size: "w-80 h-80", bottom: "0%", left: "20%", delay: 10, duration: 18, color: "from-blue-500/5" },
    { size: "w-[500px] h-[500px]", top: "60%", left: "-15%", delay: 15, duration: 22, color: "from-pink-500/5" },
    { size: "w-96 h-96", bottom: "20%", right: "15%", delay: 8, duration: 28, color: "from-cyan-500/5" },
    { size: "w-[400px] h-[400px]", top: "20%", right: "25%", delay: 12, duration: 24, color: "from-yellow-500/5" },
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className={`absolute ${circle.size} rounded-full bg-gradient-to-r ${circle.color} to-transparent blur-3xl`}
          style={{
            top: circle.top,
            left: circle.left,
            right: circle.right,
            bottom: circle.bottom,
          }}
          animate={{
            x: [0, 30, -30, 20, -20, 0],
            y: [0, -30, 20, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating particles component - SAME AS BEFORE
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
  }));
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: "100%",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Gradient text hover effect - SAME AS BEFORE
const GradientHover = ({ children, className = "" }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      whileHover={{
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Check mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Parallax effects (disabled on mobile for performance)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], isMobile ? [1, 1] : [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], isMobile ? [1, 1] : [1, 0.95]);
  
  // Mouse move effect (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);
  
  // Animated counter for stats
  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          stats.forEach((stat, idx) => {
            const target = parseInt(stat.k);
            if (counters[idx] === 0) {
              let start = 0;
              const increment = target / 40;
              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[idx] = target;
                    return newCounters;
                  });
                  clearInterval(timer);
                } else {
                  setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[idx] = Math.floor(start);
                    return newCounters;
                  });
                }
              }, 30);
              return () => clearInterval(timer);
            }
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [counters]);

  return (
    <>
      <SEO
        title="Full Stack Developer for serious software"
        description="Abu Bakar — Full Stack Developer specialising in Java, Spring Boot, React and Angular. Enterprise dashboards, ERPs, CRMs and modern web platforms."
        path="/"
        jsonLd={personJsonLd}
      />

      {/* Animated Background Elements - NO CHANGES */}
      <AnimatedBackgroundCircles />
      <FloatingParticles />

      {/* HERO SECTION */}
      <motion.section 
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <CodeBackground />
        <FloatingTechIcons />
        
        {/* Cursor following orb (desktop only) */}
        {!isMobile && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-0 opacity-30"
            animate={{
              background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(139, 92, 246, 0.15), transparent 50%)`
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
          />
        )}
        
        <div className="max-w-page container-px pt-20 pb-28 lg:pt-28 lg:pb-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-7"
          >
            <GradientHover>Abu Bakar · Full Stack Developer</GradientHover>
          </motion.div>
          
          <AnimatedHeadline
            lines={["Software that earns", "its place in the", "business."]}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 max-w-xl text-white/65 text-lg leading-relaxed"
          >
            <AnimatedText 
              text="I design and build enterprise web platforms — ERPs, CRMs, dashboards, booking systems — with Java, Spring Boot, React and Angular. Calm, durable, and built for teams that depend on them."
              delay={0.6}
            />
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/contact" className="btn-primary relative overflow-hidden group">
                <span className="relative z-10">Start a project</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <Link to="/portfolio" className="btn-ghost relative overflow-hidden group">
                <span className="relative z-10">See selected work</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats with Counter Animation */}
          <motion.div 
            id="stats-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line"
          >
            {stats.map((s, idx) => (
              <motion.div 
                key={s.v} 
                className="bg-ink-900/80 backdrop-blur px-4 md:px-6 py-5 md:py-7"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.8)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="font-display text-2xl md:text-3xl text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + idx * 0.1, type: "spring" }}
                >
                  <GradientHover>{counters[idx]}{s.k.includes('+') ? '+' : s.k.includes('%') ? '%' : ''}</GradientHover>
                </motion.div>
                <motion.div 
                  className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/45"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                >
                  {s.v}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Tech Marquee with your tech stack */}
        <div className="relative border-y border-line overflow-hidden bg-ink-900/40">
          <motion.div 
            className="flex whitespace-nowrap py-4 md:py-5"
            animate={{ x: [0, isMobile ? -500 : -1000] }}
            transition={{ repeat: Infinity, duration: isMobile ? 10 : 20, ease: "linear" }}
          >
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <motion.span
                key={i}
                className="mx-4 md:mx-8 font-display text-sm md:text-base lg:text-xl text-white/30"
                whileHover={{ color: "#8b5cf6", scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <GradientHover>{w}</GradientHover>
                <span className="ml-4 md:ml-8 text-accent/40">◆</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES PREVIEW */}
      <motion.section 
        className="max-w-page container-px py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeader
            eyebrow="What I do"
            title="Six things I'm worth hiring for."
            intro="Tightly scoped, deliberately limited. Depth over breadth."
          />
        </motion.div>
        
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-6">
          {services.slice(0, 4).map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeInUp}
              custom={i}
              whileHover={{ 
                y: isMobile ? -4 : -8,
                borderColor: "rgba(139, 92, 246, 0.5)",
                boxShadow: "0 20px 40px -20px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="card p-5 md:p-7 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <motion.span 
                  className="font-mono text-xs text-accent"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GradientHover>{s.n}</GradientHover>
                </motion.span>
                <motion.span 
                  className="text-white/30 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  Service
                </motion.span>
              </div>
              <motion.h3 
                className="mt-4 md:mt-5 font-display text-xl md:text-2xl text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <GradientHover>{s.title}</GradientHover>
              </motion.h3>
              <motion.p 
                className="mt-2 md:mt-3 text-xs md:text-sm text-white/60 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                {s.body}
              </motion.p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8 md:mt-10"
          variants={fadeInUp}
          whileHover={{ x: 5 }}
        >
          <Link to="/services" className="btn-ghost">All services →</Link>
        </motion.div>
      </motion.section>

      {/* SELECTED WORK */}
      <motion.section 
        className="max-w-page container-px py-16 md:py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-3xl blur-3xl" />
        
        <motion.div variants={fadeInUp}>
          <div className="flex items-end justify-between flex-wrap gap-4 md:gap-6">
            <SectionHeader
              eyebrow="Selected work"
              title="Three platforms that quietly carry their teams."
            />
            <motion.div 
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/portfolio" className="text-xs md:text-sm text-accent hover:text-accent-warm transition-colors">
                Full portfolio →
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={staggerContainer}
        >
          {projects.slice(0, 3).map((p, i) => (
            <motion.div key={p.title} variants={fadeInUp} custom={i}>
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section 
        className="max-w-page container-px py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeader
            eyebrow="Tools of the trade"
            title="A small set, used well."
            intro="The stack changes when there's a reason. Mostly there isn't."
          />
        </motion.div>
        
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((g, idx) => (
            <motion.div
              key={g.group}
              variants={fadeInUp}
              custom={idx}
              whileHover={!isMobile ? { 
                rotateY: 3,
                rotateX: 3,
                scale: 1.02,
              } : {}}
              transition={{ duration: 0.2 }}
              className="card p-4 md:p-6 transform-gpu"
            >
              <motion.div 
                className="text-xs uppercase tracking-[0.22em] text-accent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <GradientHover>{g.group}</GradientHover>
              </motion.div>
              <ul className="mt-4 md:mt-5 space-y-1 md:space-y-2">
                {g.items.map((it, i) => (
                  <motion.li 
                    key={it} 
                    className="text-white/75 text-xs md:text-sm flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                  >
                    <motion.span 
                      className="h-1 w-1 rounded-full bg-accent"
                      whileHover={{ scale: 2 }}
                    /> 
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + i * 0.08 }}
                    >
                      <GradientHover>{it}</GradientHover>
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section 
        className="max-w-page container-px py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeader eyebrow="In their words" title="Quiet praise from operators." />
        </motion.div>
        
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.slice(0, 2).map((t, idx) => (
            <motion.figure 
              key={t.name} 
              variants={fadeInUp}
              custom={idx}
              whileHover={{ y: isMobile ? -2 : -5, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="card p-6 md:p-8"
            >
              <motion.blockquote 
                className="font-display text-xl md:text-2xl leading-snug text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                >
                  "{t.quote}"
                </motion.span>
              </motion.blockquote>
              <figcaption className="mt-4 md:mt-6 text-sm">
                <motion.div 
                  className="text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 + 0.4 }}
                >
                  <GradientHover>{t.name}</GradientHover>
                </motion.div>
                <motion.div 
                  className="text-white/45 text-xs md:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.5 }}
                >
                  {t.role}
                </motion.div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="max-w-page container-px py-16 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <motion.div 
          className="card p-6 md:p-10 lg:p-14 relative overflow-hidden"
          whileHover={{ boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "linear"
            }}
          />
          
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end">
            <div>
              <motion.div 
                className="eyebrow mb-4 md:mb-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Currently accepting projects
              </motion.div>
              <motion.h2 
                className="h-display text-3xl md:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <GradientHover>Have something serious to build?</GradientHover>
              </motion.h2>
              <motion.p 
                className="mt-4 md:mt-5 text-white/60 text-sm md:text-base max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Send a short note about what you're trying to do. I reply within 24
                hours, usually with a question or two before anything else.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <ContactButtons stacked />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}