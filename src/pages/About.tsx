import { motion } from 'framer-motion';
import { Code2, Server, Database, Users, GraduationCap, Award, Coffee, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useLenis } from '@/hooks/useLenis';

const About = () => {
  useLenis();

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

  const highlights = [
    { icon: GraduationCap, label: 'BCA Graduate', value: 'Siddharth University 2024' },
    { icon: Award, label: 'Projects Delivered', value: '10+' },
    { icon: Coffee, label: 'Lines of Code', value: '100K+' },
    { icon: Lightbulb, label: 'Technologies', value: '15+' },
  ];

  const skills = [
    { name: 'Java', percentage: 95 },
    { name: 'Spring Boot', percentage: 90 },
    { name: 'SQL/MySQL', percentage: 85 },
    { name: 'Hibernate', percentage: 85 },
    { name: 'Angular', percentage: 75 },
    { name: 'HTML/CSS', percentage: 80 },
    { name: 'REST APIs', percentage: 90 },
    { name: 'Git', percentage: 85 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Software Developer{' '}
                <span className="gradient-text">Specialist Java Developer</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Passionate about building robust, scalable applications that solve real-world problems
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card shadow-soft border border-border text-center"
                >
                  <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <p className="font-heading font-bold text-xl text-foreground mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section - Mobile: Image top, Desktop: Image left */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Section - Top on mobile, Left on desktop */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-1 relative flex justify-center lg:justify-start"
              >
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                  {/* Outer gradient ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-[3rem] blur-xl"></div>
                  
                  {/* Animated border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    style={{
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      padding: '4px',
                    }}
                  />
                  
                  {/* Photo container */}
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background">
                    {/* Profile photo */}
                    <img
                      src="/photo.jpg"
                      alt="Abu Bakar - Java Developer"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                    
                    {/* Floating tech badges */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="absolute -top-3 -right-3 bg-background border-2 border-primary/20 rounded-full p-2 shadow-lg"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">JD</span>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                      className="absolute -bottom-3 -left-3 bg-background border-2 border-secondary/20 rounded-full p-2 shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">API</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Experience badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute -bottom-4 right-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">3+</span>
                      <span className="text-sm">Years Experience</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section - Bottom on mobile, Right on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-2 text-center lg:text-left"
              >
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  My Journey in{' '}
                  <span className="gradient-text">Software Development</span>
                </h2>
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
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                What I Do
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Services & <span className="gradient-text">Expertise</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Technical Skills
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Technologies & <span className="gradient-text">Tools</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-heading font-semibold text-foreground">{skill.name}</span>
                    <span className="text-secondary font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full gradient-bg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;