import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Calendar, Users, Database, Server, ShoppingCart, BookOpen, Building, ShoppingBag, Home, CheckSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useLenis } from '@/hooks/useLenis';
import { Helmet } from 'react-helmet-async';

const allProjects = [
  {
    id: 1,
    title: 'Audit Management Software',
    description: 'Developed the Risk Management Module and led a team of 34 developers.',
    longDescription: 'A comprehensive audit management solution designed to streamline risk assessment processes across enterprise organizations. The system includes automated risk scoring, compliance tracking, and real-time reporting dashboards.',
    tags: ['Spring Boot', 'Angular', 'MySQL', 'Hibernate', 'Liquibase'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: true,
    year: '2024',
    team: '34 developers',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'e-DigiSalesSystem',
    description: 'A digital sales management platform designed to streamline and automate the sales process.',
    longDescription: 'A comprehensive solution for managing product catalogs, customer orders, sales representatives, and real-time analytics.',
    tags: ['Java', 'Spring MVC', 'MySQL', 'REST API', 'JSP'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: true,
    year: '2023',
    team: '5 developers',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Employee Management System',
    description: 'A full-stack employee management application with features for tracking attendance and payroll.',
    longDescription: 'Built with Spring Boot and Angular for HR departments to manage employee records, attendance tracking, payroll processing, and leave management.',
    tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: false,
    year: '2023',
    team: '3 developers',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Online Learning Platform',
    description: 'An e-learning platform with course management and video streaming.',
    longDescription: 'A comprehensive learning management system with course creation, student enrollment, video lessons, quizzes, and progress tracking features.',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: false,
    year: '2023',
    team: '4 developers',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Hospital Management System',
    description: 'Comprehensive hospital management solution for patient records, appointments, and billing.',
    longDescription: 'A full-featured hospital management system that handles patient registration, doctor appointments, medical records, billing, and pharmacy management.',
    tags: ['Spring Boot', 'React', 'MySQL', 'Spring Security', 'REST API'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: true,
    year: '2023',
    team: '6 developers',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    longDescription: 'A complete e-commerce platform with product catalog, shopping cart, user authentication, payment gateway integration (Razorpay), and order management.',
    tags: ['Spring Boot', 'Angular', 'MySQL', 'Razorpay API', 'Redis'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: false,
    year: '2022',
    team: '4 developers',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Real Estate Portal',
    description: 'Property listing and management platform for real estate agencies.',
    longDescription: 'A real estate portal where users can browse properties, filter by location and price, schedule visits, and contact agents. Includes admin panel for property management.',
    tags: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'AWS S3'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: false,
    year: '2022',
    team: '5 developers',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Task Management Tool',
    description: 'Collaborative task management application with team features.',
    longDescription: 'A Kanban-style task management tool with features like task assignments, deadlines, progress tracking, team collaboration, and real-time updates using WebSockets.',
    tags: ['Spring Boot', 'Angular', 'MongoDB', 'WebSocket', 'JWT'],
    github: 'https://github.com/abubakar751',
    live: '#',
    featured: false,
    year: '2022',
    team: '3 developers',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

// Icons for different project types
const projectIcons = {
  'Audit Management Software': <Database className="w-12 h-12 text-primary-foreground" />,
  'e-DigiSalesSystem': <ShoppingCart className="w-12 h-12 text-primary-foreground" />,
  'Employee Management System': <Users className="w-12 h-12 text-primary-foreground" />,
  'Online Learning Platform': <BookOpen className="w-12 h-12 text-primary-foreground" />,
  'Hospital Management System': <Building className="w-12 h-12 text-primary-foreground" />,
  'E-Commerce Platform': <ShoppingBag className="w-12 h-12 text-primary-foreground" />,
  'Real Estate Portal': <Home className="w-12 h-12 text-primary-foreground" />,
  'Task Management Tool': <CheckSquare className="w-12 h-12 text-primary-foreground" />,
};

const Projects = () => {
  useLenis();
  const featuredProjects = allProjects.filter((p) => p.featured);
  const otherProjects = allProjects.filter((p) => !p.featured);

  return (
    <>
      {/* ========== SEO META TAGS - FIXED ========== */}
      <Helmet>
        {/* Primary Title - Abu Bakar Software Developer */}
        <title>Projects by Abu Bakar | Software Developer Portfolio | India</title>
        
        {/* Meta Description - Focus on Software Developer, not just Java */}
        <meta name="description" content="Explore software development projects by Abu Bakar (Abubakar) – Full Stack Software Developer from India. Featured projects: Audit Management Software, e-DigiSalesSystem, Hospital Management System, and more using Spring Boot, Angular, React." />
        
        {/* Keywords - Balanced with Software Developer focus */}
        <meta name="keywords" content="Abu Bakar Software Developer, Abubakar Portfolio, Full Stack Developer India, Software Developer Portfolio, Spring Boot Projects, Angular Projects, Java Projects India, Audit Management Software, Hospital Management System, E-Commerce Platform, Real Estate Portal" />
        
        <meta name="author" content="Abu Bakar (Abubakar) - Software Developer" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Projects by Abu Bakar | Software Developer | India" />
        <meta property="og:description" content="Explore software development projects by Abu Bakar – Full Stack Software Developer from India. Featured projects using Spring Boot, Angular, React, and more." />
        <meta property="og:url" content="https://abubakar.ujiyaar.com/projects" />
        <meta property="og:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abu Bakar Software Developer" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects by Abu Bakar | Software Developer | India" />
        <meta name="twitter:description" content="Explore software development projects by Abu Bakar – Full Stack Software Developer from India." />
        <meta name="twitter:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abubakar.ujiyaar.com/projects" />
        
        {/* ========== STRUCTURED DATA (SCHEMA.ORG) - FIXED ========== */}
        
        {/* Person Schema - Main Profile */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://abubakar.ujiyaar.com/#person",
            "name": "Abu Bakar",
            "alternateName": "Abubakar",
            "description": "Full Stack Software Developer from India specializing in modern web applications",
            "url": "https://abubakar.ujiyaar.com",
            "image": "https://abubakar.ujiyaar.com/photo.jpg",
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "sameAs": [
              "https://github.com/abubakar751"
            ],
            "knowsAbout": ["Software Development", "Full Stack Development", "Spring Boot", "Angular", "React", "Java", "Web Applications"]
          })}
        </script>
        
        {/* Collection Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://abubakar.ujiyaar.com/projects#collection",
            "url": "https://abubakar.ujiyaar.com/projects",
            "name": "Abu Bakar's Software Development Projects",
            "description": "Portfolio of software development projects by Abu Bakar (Abubakar), Full Stack Software Developer from India",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": featuredProjects.concat(otherProjects).map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareSourceCode",
                  "name": project.title,
                  "description": project.longDescription,
                  "programmingLanguage": project.tags,
                  "runtimePlatform": "Web",
                  "codeRepository": project.github,
                  "image": project.image,
                  "datePublished": project.year,
                  "author": {
                    "@id": "https://abubakar.ujiyaar.com/#person"
                  },
                  "keywords": project.tags.join(", ")
                }
              }))
            }
          })}
        </script>
        
        {/* Breadcrumb Schema - Complete with all pages */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Projects", 
                "item": "https://abubakar.ujiyaar.com/projects" 
              }
            ]
          })}
        </script>
        
        {/* Site Navigation Element Schema - For Google Site Links */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https://abubakar.ujiyaar.com/#navigation",
            "name": [
              "Home",
              "About",
              "Projects",
              "Contact"
            ],
            "url": [
              "https://abubakar.ujiyaar.com/",
              "https://abubakar.ujiyaar.com/about",
              "https://abubakar.ujiyaar.com/projects",
              "https://abubakar.ujiyaar.com/contact"
            ]
          })}
        </script>
        
        {/* WebSite Schema - Important for Google to understand site structure */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://abubakar.ujiyaar.com/#website",
            "url": "https://abubakar.ujiyaar.com",
            "name": "Abu Bakar Software Developer",
            "description": "Portfolio website of Abu Bakar - Full Stack Software Developer from India",
            "publisher": {
              "@id": "https://abubakar.ujiyaar.com/#person"
            },
            "inLanguage": "en-US",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://abubakar.ujiyaar.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Individual Project Schema for Featured Projects */}
        {featuredProjects.map((project) => (
          <script key={`schema-${project.id}`} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              "name": project.title,
              "description": project.longDescription,
              "programmingLanguage": project.tags,
              "runtimePlatform": "Web",
              "codeRepository": project.github,
              "image": project.image,
              "datePublished": project.year,
              "author": {
                "@id": "https://abubakar.ujiyaar.com/#person"
              },
              "keywords": project.tags.join(", ")
            })}
          </script>
        ))}
      </Helmet>

      {/* Rest of your component code remains exactly the same */}
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
                className="text-center"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                  My Work
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Featured <span className="gradient-text">Projects</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Showcasing my expertise in software development with real-world applications
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="space-y-24">
                {featuredProjects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.6 }} 
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Project Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative`}>
                      <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl group">
                        {/* Project Image with alt text for SEO */}
                        <div className="absolute inset-0">
                          <img
                            src={project.image}
                            alt={`${project.title} - Software project by Abu Bakar, Full Stack Software Developer`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        
                        {/* Action buttons */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          {project.live !== '#' && (
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-10 h-10 rounded-xl bg-card/90 backdrop-blumr-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                              aria-label={`View ${project.title} live demo`}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                        
                        {/* Tech tags overlay */}
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                        Featured Project
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {project.longDescription}
                      </p>
                      
                      {/* Project metadata */}
                      <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-secondary" />
                          <span className="font-medium">{project.year}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-secondary" />
                          <span className="font-medium">{project.team}</span>
                        </span>
                      </div>
                      
                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-4 py-2 rounded-xl bg-card text-foreground text-sm font-medium border border-border hover:border-secondary/50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Other Projects Section */}
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }} 
                className="text-center mb-16"
              >
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  More <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Additional projects showcasing diverse applications and technologies
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1 }} 
                    className="group relative overflow-hidden rounded-2xl bg-card shadow-soft border border-border hover:shadow-card hover:border-secondary/30 transition-all duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} - Software project by Abu Bakar, Full Stack Developer`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      
                      {/* GitHub link */}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    
                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" /> {project.year}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" /> {project.team}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-medium hover:text-foreground transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-medium">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Want to see more?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Check out my GitHub for more projects and code samples
                </p>
                <a
                  href="https://github.com/abubakar751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                  Visit My GitHub
                </a>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Projects;