import { useMemo, useState, useRef, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SEO from "../components/SEO.jsx";

// Tech Stack Data - 3+ Years Experience Focus
const techStack = {
  "3+ Years Experience": [
    "Advanced Java",
    "Core Java",
    "Spring Boot",
    "Spring Security",
    "Microservices",
    "Spring Cloud",
    "REST APIs",
    "JWT Authentication",
    "OAuth 2.0",
    "API Gateway",
    "Service Discovery"
  ],
  "Message Queue & Database": [
    "Apache Kafka",
    "RabbitMQ",
    "Redis",
    "WebSockets",
    "PostgreSQL",
    "MySQL",
    "MongoDB"
  ],
  "DevOps & Cloud": [
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Nginx"
  ],
  "Testing & Architecture": [
    "JUnit",
    "Mockito",
    "Swagger / OpenAPI",
    "System Design",
    "Scalable Architecture"
  ]
};

// Sample projects data - Replace with your actual projects
const projects = [
  {
    title: "Enterprise Banking Platform",
    category: "Full Stack",
    description: "Microservices-based lending platform handling $50M+ in transactions with Spring Boot and React",
    tech: ["Spring Boot", "Microservices", "React", "PostgreSQL", "Kafka"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    title: "Real-time Inventory System",
    category: "Backend",
    description: "Inventory management system used by 200+ stores with 3-second sync latency",
    tech: ["Java", "Spring Boot", "WebSockets", "Redis", "Angular"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    title: "Cloud Retail Platform",
    category: "Full Stack",
    description: "E-commerce platform with microservices architecture and real-time updates",
    tech: ["Spring Cloud", "Docker", "Kubernetes", "React", "MongoDB"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    title: "Authentication Service",
    category: "Backend",
    description: "Centralized auth service with OAuth 2.0 and JWT for 10+ microservices",
    tech: ["Spring Security", "OAuth 2.0", "JWT", "Redis", "PostgreSQL"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    title: "Payment Gateway Integration",
    category: "Integration",
    description: "Unified payment processing system supporting multiple payment providers",
    tech: ["Spring Boot", "RabbitMQ", "MySQL", "REST APIs", "Swagger"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    title: "Admin Dashboard",
    category: "Frontend",
    description: "Real-time analytics dashboard with data visualization and reporting",
    tech: ["React", "TypeScript", "WebSockets", "Chart.js", "Tailwind"],
    image: "/api/placeholder/400/300",
    link: "#"
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const buttonVariants = {
  initial: { scale: 1, opacity: 0.7 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Optimized Background
const OptimizedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
      
      {/* Animated Gradient Orbs */}
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
      
      {/* Center subtle glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
// Scroll Progress
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalScroll) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl">📁</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-2 py-1 bg-emerald-500/10 rounded-full text-emerald-400">
            {project.category}
          </span>
        </div>
        
        <p className="text-sm text-slate-400 mb-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 bg-white/10 rounded-md text-slate-300">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 bg-white/10 rounded-md text-slate-300">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        
        <a
          href={project.link}
          className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          View Project
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
};

// Tech Stack Section
const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="max-w-6xl mx-auto px-6 py-16 relative"
    >
      <div className="text-center mb-10">
        <motion.div 
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider mb-3"
        >
          <span className="w-6 h-px bg-emerald-500/50" />
          EXPERTISE
          <span className="w-6 h-px bg-emerald-500/50" />
        </motion.div>
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          3+ Years of Enterprise Java Development
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-slate-400 text-sm max-w-2xl mx-auto"
        >
          Battle-tested technologies for scalable, production-ready systems
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {Object.entries(techStack).map(([category, technologies], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-emerald-500/30 transition-all duration-300"
          >
            <h3 className="text-emerald-400 font-semibold text-sm mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-emerald-500 rounded-full" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/10 rounded-md text-xs text-slate-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Badge */}
      <motion.div 
        variants={fadeInUp}
        className="flex justify-center mt-8"
      >
        <div className="flex items-center gap-6 px-6 py-3 bg-white/5 rounded-full border border-white/10">
          <div className="text-center">
            <div className="text-xl font-bold text-emerald-400">3+</div>
            <div className="text-[10px] text-slate-400">Years Experience</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-xl font-bold text-emerald-400">30+</div>
            <div className="text-[10px] text-slate-400">Tech Stack</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-xl font-bold text-emerald-400">15+</div>
            <div className="text-[10px] text-slate-400">Projects</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const filterInView = useInView(filterRef, { once: true, amount: 0.1 });

  const filtered = useMemo(() => {
    return active === "All" ? projects : projects.filter((p) => p.category === active);
  }, [active]);

  const handleCategoryChange = (category) => {
    setActive(category);
  };

  return (
    <>
      <SEO
        title="Portfolio | Enterprise Java & Spring Boot Expert"
        description="3+ years of experience in Advanced Java, Spring Boot, Microservices, and Enterprise Architecture."
        path="/portfolio"
      />
      
      <ScrollProgress />
      <OptimizedBackground />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-6 pt-20 pb-10 relative"
      >
        <motion.div 
          variants={fadeInLeft}
          className="text-emerald-400 font-mono text-sm tracking-wider mb-4"
        >
          PORTFOLIO
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
        >
          Enterprise Java Solutions That Scale
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-slate-300 text-base leading-relaxed"
        >
          Senior Full Stack Developer with 3+ years of expertise in Spring Boot, 
          Microservices, and Cloud Architecture. Building production-grade systems 
          used by thousands.
        </motion.p>
      </motion.section>

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Filter Section */}
      <motion.section 
        ref={filterRef}
        initial="hidden"
        animate={filterInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-6 py-10 relative"
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
              onClick={() => handleCategoryChange(c)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                active === c
                  ? "bg-emerald-500 text-slate-950 font-medium shadow-lg shadow-emerald-500/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {c}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm text-slate-400"
          >
            Showing <span className="text-emerald-400 font-medium">{filtered.length}</span> projects
            {active !== 'All' && (
              <span> in <span className="text-emerald-400">{active}</span></span>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Projects Grid */}
      <motion.section className="max-w-6xl mx-auto px-6 pb-24 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerGrid}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={`${active}-${project.title}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.3, delay: i * 0.03 }
                  }
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-slate-400">No projects found in this category.</p>
              <button
                onClick={() => handleCategoryChange("All")}
                className="mt-4 px-6 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-emerald-400 text-sm transition-all"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-emerald-500/20 flex items-center justify-center z-50 hover:bg-emerald-500/20 transition-all group"
        aria-label="Scroll to top"
      >
        <span className="text-emerald-400 text-lg">↑</span>
      </button>
    </>
  );
}