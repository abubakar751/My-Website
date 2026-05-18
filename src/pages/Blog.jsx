import { motion } from "framer-motion";
import SEO from "../components/SEO.jsx";
import { posts } from "../data/blog.js";
import { formatDate } from "../utils/format.js";

export default function Blog() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.1,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        duration: 0.5,
      },
    },
    hover: {
      x: 10,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const dateVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const titleHoverVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const excerptVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.15 },
    },
    hover: {
      scale: 1.05,
      color: "#ffffff",
      transition: { duration: 0.2 },
    },
  };

  const readVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.2 },
    },
    hover: {
      x: -5,
      transition: { duration: 0.2 },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <SEO
        title="Journal"
        description="Notes on building enterprise software, design systems, and the quiet craft of shipping."
        path="/blog"
      />
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-page container-px pt-20 pb-10"
      >
        <motion.div variants={eyebrowVariants} className="eyebrow mb-6">
          Journal
        </motion.div>
        
        <motion.h1
          variants={titleVariants}
          className="h-display text-4xl md:text-6xl max-w-3xl"
        >
          Notes from the workbench.
        </motion.h1>
        
        <motion.p
          variants={descriptionVariants}
          className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed"
        >
          Short essays on the craft. No tutorials, no trend pieces.
        </motion.p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-page container-px py-16"
      >
        <motion.div
          variants={dividerVariants}
          className="border-t border-line origin-left"
        />
        
        <ul className="divide-y divide-line">
          {posts.map((p, index) => (
            <motion.li
              key={p.slug}
              variants={listItemVariants}
              custom={index}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              className="py-8 group rounded-lg transition-colors duration-200"
            >
              <a href={`#${p.slug}`} className="block">
                <div className="grid lg:grid-cols-[160px_1fr_120px] gap-6 items-baseline">
                  <motion.div variants={dateVariants} className="text-xs font-mono text-white/45">
                    {formatDate(p.date)}
                  </motion.div>
                  
                  <div>
                    <motion.div
                      variants={titleHoverVariants}
                      className="font-display text-2xl text-white group-hover:text-accent transition-colors duration-200"
                    >
                      {p.title}
                    </motion.div>
                    
                    <motion.p
                      variants={excerptVariants}
                      className="mt-2 text-sm text-white/60 max-w-2xl"
                    >
                      {p.excerpt}
                    </motion.p>
                    
                    <motion.div
                      variants={tagVariants}
                      whileHover="hover"
                      className="mt-3 text-[11px] uppercase tracking-[0.22em] text-accent inline-block"
                    >
                      {p.tag}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    variants={readVariants}
                    whileHover="hover"
                    className="text-right text-xs text-white/45 font-mono"
                  >
                    {p.read}
                  </motion.div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
        
        {/* Optional: Animated "Load More" button */}
        {posts.length >= 10 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 rounded-lg text-white/80 hover:text-white hover:border-accent transition-all duration-200 text-sm"
            >
              Load more articles →
            </motion.button>
          </motion.div>
        )}
      </motion.section>
    </>
  );
}