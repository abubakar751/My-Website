import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-16 lg:pt-0"> {/* Added pt-16 lg:pt-0 */}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTk2ZjMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8 lg:mt-0"> {/* Added mt-8 lg:mt-0 */}
          {/* Photo Section - Top on mobile, Left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1 relative flex justify-center lg:justify-start"
          >
            {/* Decorative elements */}
            <div className="relative">
              {/* Main photo container with frame effects */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto lg:mx-0"> {/* Reduced mobile size */}
                {/* Outer gradient ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-[2.5rem] lg:rounded-[3rem] blur-xl"></div>
                
                {/* Animated border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                  style={{
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '4px',
                  }}
                />
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background">
                  {/* Profile photo */}
                  <img
                    src="/photo.jpg"
                    alt="Abu Bakar - Software Developer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                  
                  {/* Floating tech badges */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-background border-2 border-primary/20 rounded-full p-1 lg:p-2 shadow-lg"
                  >
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs lg:text-sm">JD</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 bg-background border-2 border-secondary/20 rounded-full p-1 lg:p-2 shadow-lg"
                  >
                    <div className="w-6 h-6 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-[10px] lg:text-xs">API</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-3 right-2 lg:-bottom-4 lg:right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg text-sm lg:text-base"
              >
                <div className="flex items-center gap-1 lg:gap-2">
                  <span className="font-bold text-base lg:text-lg">3+</span>
                  <span className="text-xs lg:text-sm">Years Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 lg:mb-8"
            >
              
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Abu Bakar</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-4xl font-semibold text-foreground mb-3 lg:mb-4"
            >
              Software Developer &{' '}
              <span className="text-primary">Specialist Java Developer</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 leading-relaxed"
            >
              Building robust, scalable applications with Java, Spring Boot, and modern web technologies.
              Transforming ideas into powerful solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 lg:justify-start justify-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-2xl gradient-bg px-6 py-5 lg:px-8 lg:py-6 text-base lg:text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl px-6 py-5 lg:px-8 lg:py-6 text-base lg:text-lg font-semibold border-2 hover:bg-secondary/10 hover:border-secondary hover:text-secondary transition-all"
              >
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 lg:mt-16 flex flex-wrap items-center gap-2 lg:gap-4 lg:justify-start justify-center"
            >
              {['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST API', 'Microservices', 'Docker'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl bg-card shadow-soft border border-border text-xs lg:text-sm font-medium text-foreground hover:scale-105 transition-transform hover:border-primary/50 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Only show on larger screens */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;