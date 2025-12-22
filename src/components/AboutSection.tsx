import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Users } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code2,
      title: 'Java Development',
      description: 'Robust and scalable applications using Java 1.8, J2EE, and modern frameworks',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'RESTful APIs and microservices using Spring Boot and Spring MVC',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database solutions with MySQL, Oracle, and Hibernate ORM',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in working with cross-functional teams in Agile environments',
    },
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
    <section id="about" className="py-24 bg-background" ref={ref}>
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
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Software Developer{' '}
            <span className="gradient-text">Specialist Java Developer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specializing in building robust web applications with a focus on quality and user experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a passionate Java developer with expertise in building robust web applications 
                using <span className="text-foreground font-medium">Java, Spring Boot, Angular, and MySQL</span>. 
                I specialize in designing scalable back-end services, developing RESTful APIs, and 
                implementing security protocols with Spring Security.
              </p>
              <p>
                With strong hands-on experience in requirement analysis, system design, and end-to-end 
                development of software solutions, I focus on creating high-performance, user-centric 
                applications that prioritize quality, maintainability, and seamless user experiences.
              </p>
              <p>
                I graduated with a <span className="text-foreground font-medium">BCA degree from 
                Siddharth University in 2024</span> and continuously strive to expand my knowledge 
                and stay updated with the latest technologies and best practices in software development.
              </p>
            </div>
          </motion.div>

          {/* Right - Services Grid */}
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
      </div>
    </section>
  );
};

export default AboutSection;
