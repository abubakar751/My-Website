import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SEO from "../components/SEO.jsx";
import ContactButtons from "../components/ContactButtons.jsx";
import { contact } from "../data/contact.js";

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

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  focus: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      type: "spring",
      stiffness: 400
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.3, type: "spring", stiffness: 300 }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  },
  hover: {
    x: 5,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    transition: { duration: 0.2 }
  }
};

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
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
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px]"
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
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
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
            opacity: [0, 0.25, 0],
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

// Animated Paper Plane Icon
const PaperPlaneIcon = ({ animate = false }) => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={animate ? { x: [0, 10, 0], y: [0, -5, 0] } : {}}
    transition={{ duration: 0.5 }}
  >
    <path
      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const handleFieldChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Start a conversation. WhatsApp, email, LinkedIn or GitHub — whichever is easiest."
        path="/contact"
      />
      
      <AnimatedBackground />
      <FloatingParticles />
      
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
          Contact
        </motion.div>
        <motion.h1 
          variants={fadeInUp}
          className="h-display text-4xl md:text-6xl max-w-3xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
        >
          Say a little, hear back a lot.
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed"
        >
          Tell me what you're trying to build — a sentence is enough to start.
          I reply within a business day.
        </motion.p>
      </motion.section>

      {/* Contact Form and Info Section */}
      <motion.section 
        ref={formRef}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-page container-px py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10 relative z-10"
      >
        {/* Contact Form */}
        <motion.form 
          variants={cardVariants}
          whileHover="hover"
          onSubmit={onSubmit} 
          className="card p-8 lg:p-10 space-y-5 relative overflow-hidden group"
        >
          {/* Animated gradient border effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          <div className="relative z-10">
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div
                variants={formFieldVariants}
                animate={focusedField === 'name' ? 'focus' : 'visible'}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              >
                <Field 
                  label="Name" 
                  required 
                  value={form.name} 
                  onChange={(v) => handleFieldChange('name', v)} 
                  focused={focusedField === 'name'}
                />
              </motion.div>
              <motion.div
                variants={formFieldVariants}
                animate={focusedField === 'company' ? 'focus' : 'visible'}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
              >
                <Field 
                  label="Company" 
                  value={form.company} 
                  onChange={(v) => handleFieldChange('company', v)} 
                  focused={focusedField === 'company'}
                />
              </motion.div>
            </div>
            
            <motion.div variants={formFieldVariants}>
              <Field 
                type="email" 
                label="Email" 
                required 
                value={form.email} 
                onChange={(v) => handleFieldChange('email', v)}
                focused={focusedField === 'email'}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>
            
            <motion.div variants={formFieldVariants}>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-white/45">Message *</span>
                <motion.textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="mt-2 w-full bg-ink-800/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent/60 transition-all duration-300 resize-none"
                  placeholder="What are you trying to build, and by when?"
                  whileFocus={{ scale: 1.01, borderColor: "#00ffc4" }}
                  transition={{ duration: 0.2 }}
                />
              </label>
            </motion.div>
            
            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <motion.button 
                type="submit" 
                className="btn-primary relative overflow-hidden group"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PaperPlaneIcon animate={sent} />
                  Send enquiry
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <AnimatePresence>
                {sent && (
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="text-xs text-accent flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-2 h-2 bg-accent rounded-full"
                    />
                    Opening your email client…
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.aside 
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Direct Contact Card */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="card p-7 relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="text-xs uppercase tracking-[0.22em] text-accent"
                whileHover={{ letterSpacing: "0.3em" }}
              >
                Direct
              </motion.div>
              <div className="mt-5 space-y-3 text-sm">
                <Row label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <Row label="WhatsApp" value={contact.phone} href={contact.whatsappUrl} />
                <Row label="LinkedIn" value="View profile" href={contact.linkedin} />
                <Row label="GitHub" value="View repos" href={contact.github} />
                <Row label="Location" value={contact.location} />
              </div>
            </div>
          </motion.div>

          {/* Quickest Path Card */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="card p-7 relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="text-xs uppercase tracking-[0.22em] text-accent"
                whileHover={{ letterSpacing: "0.3em" }}
              >
                Quickest path
              </motion.div>
              <motion.p 
                className="mt-4 text-sm text-white/65 leading-relaxed"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                For new project enquiries, WhatsApp gets a same-day reply. The
                button below opens a prefilled message.
              </motion.p>
              <motion.div 
                className="mt-5"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <ContactButtons />
              </motion.div>
            </div>
          </motion.div>

          {/* Availability Indicator */}
          <motion.div 
            variants={cardVariants}
            className="card p-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <div className="text-xs text-white/45">Currently accepting new projects</div>
            </div>
            <motion.div 
              className="mt-3 text-sm text-white/65"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Expected reply time: <span className="text-accent">&lt; 24 hours</span>
            </motion.div>
          </motion.div>
        </motion.aside>
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
    </>
  );
}

function Field({ label, type = "text", value, onChange, required, focused = false, onFocus, onBlur }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-white/45">
        {label}{required && " *"}
      </span>
      <motion.input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="mt-2 w-full bg-ink-800/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent/60 transition-all duration-300"
        animate={focused ? { scale: 1.02, borderColor: "#00ffc4" } : { scale: 1, borderColor: "rgba(255,255,255,0.1)" }}
        transition={{ duration: 0.2 }}
      />
      {focused && (
        <motion.div
          layoutId="fieldGlow"
          className="absolute mt-1 h-[2px] bg-accent/50"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </label>
  );
}

function Row({ label, value, href }) {
  return (
    <motion.div 
      variants={rowVariants}
      whileHover="hover"
      className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 transition-colors duration-200 rounded px-2 -mx-2"
    >
      <span className="text-white/45 text-xs">{label}</span>
      {href ? (
        <motion.a 
          href={href} 
          target="_blank" 
          rel="noreferrer" 
          className="text-white hover:text-accent transition-all duration-300 text-sm"
          whileHover={{ x: 3 }}
        >
          {value}
        </motion.a>
      ) : (
        <span className="text-white text-sm">{value}</span>
      )}
    </motion.div>
  );
}