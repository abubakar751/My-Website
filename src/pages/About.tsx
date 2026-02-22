import { motion } from 'framer-motion';
import { Code2, Server, Database, Users, GraduationCap, Award, Coffee, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useLenis } from '@/hooks/useLenis';
import { Helmet } from 'react-helmet-async';

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
    <>
      {/* ========== SEO META TAGS ========== */}
      <Helmet>
        <title>About Abu Bakar (Abubakar) | Software Developer & Java Developer | India</title>
        <meta name="description" content="Learn about Abu Bakar (Abubakar) – Professional Software Developer, Java Developer from India. BCA graduate from Siddharth University (2024). Expert in Java, Spring Boot, Angular, MySQL. Available in Maharashtra, UP." />
        <meta name="keywords" content="About Abu Bakar, About Abubakar, Abu Bakar Software Developer, Abubakar Java Developer, Abu Bakar BCA Siddharth University, Java Developer Profile India, Full Stack Developer About, Abu Bakar Skills, Abubakar Experience, Java Spring Boot Developer India" />
        <meta name="author" content="Abu Bakar (Abubakar) - Software Developer" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Abu Bakar (Abubakar) | Software Developer & Java Developer | India" />
        <meta property="og:description" content="Learn about Abu Bakar – Professional Software Developer, Java Developer from India. BCA graduate, expert in Java, Spring Boot, Angular." />
        <meta property="og:url" content="https://abubakar.ujiyaar.com/about" />
        <meta property="og:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Abu" />
        <meta property="profile:last_name" content="Bakar" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="About Abu Bakar (Abubakar) | Software Developer | India" />
        <meta name="twitter:description" content="Learn about Abu Bakar – Java Developer & Software Developer from India. BCA graduate, Spring Boot expert." />
        <meta name="twitter:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abubakar.ujiyaar.com/about" />
        
        {/* ========== STRUCTURED DATA (SCHEMA.ORG) ========== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://abubakar.ujiyaar.com/about#aboutpage",
            "url": "https://abubakar.ujiyaar.com/about",
            "name": "About Abu Bakar - Software Developer",
            "description": "Professional profile of Abu Bakar (Abubakar), Software Developer and Java Developer from India",
            "mainEntity": {
              "@type": "Person",
              "@id": "https://abubakar.ujiyaar.com/#person",
              "name": "Abu Bakar",
              "alternateName": "Abubakar",
              "jobTitle": "Software Developer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Siddharth University",
                "sameAs": "https://www.siddharthuniversity.in/"
              },
              "birthDate": "2024",
              "knowsAbout": ["Java", "Spring Boot", "Angular", "MySQL", "Hibernate", "REST APIs"],
              "description": "BCA graduate from Siddharth University (2024) specializing in Java and full-stack development"
            }
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abubakar.ujiyaar.com/" },
              { "@type": "ListItem", "position": 2, "name": "About Abu Bakar", "item": "https://abubakar.ujiyaar.com/about" }
            ]
          })}
        </script>
        
        {/* Person Schema (Detailed) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://abubakar.ujiyaar.com/#person",
            "name": "Abu Bakar",
            "alternateName": "Abubakar",
            "givenName": "Abu",
            "familyName": "Bakar",
            "jobTitle": ["Software Developer", "Java Developer", "Full Stack Developer"],
            "image": "https://abubakar.ujiyaar.com/photo.jpg",
            "url": "https://abubakar.ujiyaar.com/",
            "sameAs": [
              "https://github.com/abubakar751",
              "https://linkedin.com/in/abubakar751"
            ],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Siddharth University",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India",
                "addressRegion": "Uttar Pradesh"
              }
            },
            "knowsAbout": [
              "Java Development",
              "Spring Boot",
              "Angular",
              "MySQL",
              "Hibernate",
              "REST APIs",
              "Microservices",
              "Git"
            ],
            "description": "Professional Software Developer and Java Developer from India, BCA graduate from Siddharth University (2024)",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India",
              "addressRegion": ["Maharashtra", "Uttar Pradesh"]
            },
            "knowsLanguage": ["English", "Hindi", "Urdu"]
          })}
        </script>
      </Helmet>

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

          {/* Story Section */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-1 lg:order-1 relative flex justify-center lg:justify-start"
                >
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                    {/* Image container code... (aapka existing code) */}
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background">
                      <img
                        src="/photo.jpg"
                        alt="Abu Bakar - Java Developer from India, BCA Graduate Siddharth University"
                        className="w-full h-full object-cover"
                      />
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

                {/* Content Section */}
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
                      I am <strong>Abu Bakar (Abubakar)</strong>, a passionate Java developer with expertise in building robust web applications 
                      using <strong>Java, Spring Boot, Angular, and MySQL</strong>. 
                      I specialize in designing scalable back-end services, developing RESTful APIs, and 
                      implementing security protocols with Spring Security.
                    </p>
                    <p>
                      With strong hands-on experience in requirement analysis, system design, and end-to-end 
                      development of software solutions, I focus on creating high-performance, user-centric 
                      applications that prioritize quality, maintainability, and seamless user experiences.
                    </p>
                    <p>
                      I graduated with a <strong>BCA degree from Siddharth University in 2024</strong> and continuously strive to expand my knowledge 
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
    </>
  );
};

export default About;