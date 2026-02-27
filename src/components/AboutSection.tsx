import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Users, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // ✅ SEO IMPORT

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using Java, Spring Boot, Angular, and React',
    },
    {
      icon: Server,
      title: 'Backend Architecture',
      description: 'Design and development of RESTful APIs, microservices, and scalable server-side solutions',
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Efficient database design and optimization with MySQL, Oracle, and Hibernate',
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Leading development teams, code reviews, and mentoring junior developers',
    },
  ];

  const achievements = [
    { icon: Award, label: 'Led team of 34 developers', year: '2024' },
    { icon: Briefcase, label: '8+ Projects Delivered', year: '2022-2024' },
    { icon: GraduationCap, label: 'BCA Graduate 2024', year: 'Siddharth University' },
    { icon: MapPin, label: 'Mumbai, India', year: 'Available for work' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* ================= SEO OPTIMIZATION ================= */}
      <Helmet>
        {/* About Page Specific Meta */}
        <title>About Abu Bakar | Software Developer & Full Stack Developer India</title>
        <meta name="description" content="Learn about Abu Bakar, a passionate Software Developer and Full Stack Developer from Mumbai, India. Specializing in Java, Spring Boot, Angular, and scalable web applications. BCA graduate from Siddharth University (2024)." />
        <meta name="keywords" content="About Abu Bakar, Abu Bakar Software Developer, Abu Bakar Full Stack Developer, Abu Bakar Java Developer, Abu Bakar Mumbai, Abu Bakar BCA, Siddharth University, Software Developer India" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Abu Bakar | Software Developer India" />
        <meta property="og:description" content="Learn about Abu Bakar's journey as a Software Developer from Mumbai, India" />
        <meta property="og:url" content="https://abubakar.ujiyaar.com/about" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="About Abu Bakar | Software Developer" />
        <meta name="twitter:description" content="Learn about Abu Bakar - Full Stack Software Developer from India" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://abubakar.ujiyaar.com/about" />
        
        {/* JSON-LD for About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://abubakar.ujiyaar.com/about#aboutpage",
            "url": "https://abubakar.ujiyaar.com/about",
            "name": "About Abu Bakar - Software Developer",
            "description": "Professional background and expertise of Abu Bakar, Software Developer from India",
            "mainEntity": {
              "@id": "https://abubakar.ujiyaar.com/#person"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://abubakar.ujiyaar.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://abubakar.ujiyaar.com/about"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      <section id="about" className="py-24 bg-background" ref={ref} aria-label="About Abu Bakar - Software Developer">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              About Me
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Abu Bakar - <span className="gradient-text">Software Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full Stack Developer specializing in Java, Spring Boot, and modern web technologies
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {achievements.map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-card border border-border text-center">
                <item.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="font-semibold text-foreground">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.year}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Enhanced with better structure */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    Hello, I'm <span className="text-secondary">Abu Bakar</span>
                  </h2>
                  
                  <p className="mb-4">
                    I am a passionate <strong className="text-foreground">Software Developer</strong> from 
                    <strong className="text-foreground"> Mumbai, India</strong> with expertise in building robust 
                    web applications using <strong className="text-foreground">Java, Spring Boot, Angular, and MySQL</strong>. 
                    I specialize in designing scalable back-end services, developing RESTful APIs, and implementing 
                    security protocols with Spring Security.
                  </p>
                  
                  <p className="mb-4">
                    With strong hands-on experience in requirement analysis, system design, and end-to-end 
                    development of software solutions, I focus on creating high-performance, user-centric 
                    applications that prioritize quality, maintainability, and seamless user experiences.
                  </p>
                  
                  <p className="mb-4">
                    I graduated with a <strong className="text-foreground">BCA degree from Siddharth University in 2024</strong> 
                    and continuously strive to expand my knowledge and stay updated with the latest technologies 
                    and best practices in software development.
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 p-6 rounded-2xl bg-card border border-border">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                        <span><strong>Team Leadership:</strong> Led a team of 34 developers in Audit Management Software project</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                        <span><strong>Full Stack Expertise:</strong> Proficient in both frontend (Angular/React) and backend (Spring Boot)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></span>
                        <span><strong>Location:</strong> Based in Mumbai, available for remote work and collaboration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Services Grid - Enhanced */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid sm:grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl bg-card shadow-soft border border-border hover:shadow-card hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Work with Abu Bakar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Hidden SEO-friendly text */}
          <div className="sr-only">
            <p>
              Abu Bakar is a Software Developer and Full Stack Developer based in Mumbai, India. 
              Specializing in Java, Spring Boot, Angular, and MySQL. BCA graduate from Siddharth University (2024).
              Available for freelance software development projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;