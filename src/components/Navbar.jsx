import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

// Logo Animation Variants
const logoVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
};

const logoImageVariants = {
  hover: {
    rotate: [0, -5, 5, -3, 3, 0],
    transition: { duration: 0.5 }
  }
};

// Menu Button Variants
const menuButtonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const menuLineVariants = {
  top: {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  },
  middle: {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  },
  bottom: {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  }
};

// Mobile Menu Item Variants
const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut"
    }
  }),
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.2 }
  }
};

// Desktop Nav Item Variants
const desktopNavVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const navItemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 }
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-page container-px h-16 flex items-center justify-between">
        {/* Logo with Image */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setHoveredLogo(true)}
          onHoverEnd={() => setHoveredLogo(false)}
        >
          <Link to="/" className="group inline-flex items-center gap-2">
  <motion.div 
    variants={logoImageVariants}
    animate={hoveredLogo ? "hover" : "initial"}
    className="relative h-14 w-28 rounded-md"
  >
    {/* Border around full image */}
    <div className="absolute inset-0 rounded-md border border-white/30 shadow-sm" />
    
    <img 
      src="/favicon.svg" 
      alt="Logo"
      className="w-full h-full object-contain p-0.5"
    />
    
    {/* Hover effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
  </motion.div>
</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          variants={desktopNavVariants}
          initial="initial"
          animate="animate"
          className="hidden lg:flex items-center gap-1"
        >
          {NAV.map((item) => (
            <motion.div
              key={item.to}
              variants={navItemVariants}
              whileHover="hover"
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-accent to-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                      />
                    )}
                    {!isActive && (
                      <motion.span
                        className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent/50"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link 
              to="/contact" 
              className="hidden lg:inline-flex btn-primary !py-2 !px-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Start a project</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            variants={menuButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <motion.span 
                className="h-px w-5 bg-white/80"
                variants={menuLineVariants.top}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="h-px w-5 bg-white/80"
                variants={menuLineVariants.middle}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="h-px w-5 bg-white/80"
                variants={menuLineVariants.bottom}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl relative z-50"
            >
              <div className="max-w-page container-px py-6">
                <div className="grid gap-1">
                  {NAV.map((item, i) => (
                    <motion.div
                      key={item.to}
                      custom={i}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          `block px-3 py-3 rounded-lg text-sm transition-all duration-200 ${
                            isActive 
                              ? "bg-accent/10 text-accent font-medium" 
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`
                        }
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {location.pathname === item.to && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 bg-accent rounded-full"
                            />
                          )}
                        </div>
                      </NavLink>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    custom={NAV.length}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-4 pt-2 border-t border-white/10"
                  >
                    <Link 
                      to="/contact" 
                      className="btn-primary w-full justify-center relative overflow-hidden group"
                      onClick={() => setOpen(false)}
                    >
                      <span className="relative z-10">Start a project</span>
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </div>
                
                {/* Footer info in mobile menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-4 border-t border-white/10"
                >
                  <div className="text-xs text-white/35 text-center">
                    <p>Available for new projects</p>
                    <p className="mt-1">
                      <a href="mailto:hello@example.com" className="text-accent hover:text-accent/80">
                        hello@example.com
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0 }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
}