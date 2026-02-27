import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/abubakar751', label: 'GitHub', username: '@abubakar751' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abu-bakar-b3aa9b2b5/', label: 'LinkedIn', username: 'Abu Bakar' },
    { icon: Twitter, href: 'https://twitter.com/abubakar731743', label: 'Twitter', username: '@abubakar731743' },
    { icon: Mail, href: 'mailto:abubakartechsak01@gmail.com', label: 'Email', username: 'abubakartechsak01@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/', description: 'Abu Bakar Software Developer - Home' },
    
    { name: 'Projects', path: '/projects', description: 'Software Projects by Abu Bakar' },
    { name: 'About', path: '/about', description: 'About Abu Bakar - Full Stack Software Developer' },
    { name: 'Contact', path: '/contact', description: 'Contact Abu Bakar Software Developer' },
  ];

  const services = [
    'Full Stack Development',
    'Java Spring Boot',
    'Angular Development',
    'REST API Development',
  ];

  return (
    <>
      {/* ================= OPTIMIZED SEO ================= */}
      <Helmet>
        {/* Title - Focus on Software Developer */}
        <title>Abu Bakar | Software Developer | Full Stack Developer India</title>

        {/* Meta Description - Optimized for Software Developer */}
        <meta
          name="description"
          content="Abu Bakar is a Software Developer and Full Stack Developer from India, specializing in Java, Spring Boot, Angular, and scalable web applications. View portfolio and projects."
        />

        {/* Keywords - Balanced mix */}
        <meta
          name="keywords"
          content="
          Abu Bakar Software Developer,
          Abu Bakar Full Stack Developer,
          Abu Bakar Java Developer,
          Abu Bakar India,
          Abu Bakar Mumbai,
          Abu Bakar Spring Boot,
          Abu Bakar Angular Developer,
          Software Developer India,
          Full Stack Developer India,
          Java Developer Portfolio
          "
        />

        <meta name="author" content="Abu Bakar - Software Developer" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:site_name" content="Abu Bakar Software Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abubakar.ujiyaar.com" />
        <meta property="og:title" content="Abu Bakar | Software Developer" />
        <meta property="og:description" content="Portfolio of Abu Bakar - Full Stack Software Developer from India" />
        <meta property="og:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@abubakar_dev" />
        <meta name="twitter:creator" content="@abubakar_dev" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abubakar.ujiyaar.com" />
        
        {/* JSON-LD Structured Data for Person - IMPROVED */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://abubakar.ujiyaar.com/#person",
            "name": "Abu Bakar",
            "alternateName": "Abubakar",
            "description": "Full Stack Software Developer from India specializing in Java, Spring Boot, and Angular",
            "url": "https://abubakar.ujiyaar.com",
            "image": "https://abubakar.ujiyaar.com/photo.jpg",
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "sameAs": [
              "https://github.com/abubakar751",
              "https://linkedin.com/in/abu-bakar-software-developer",
              "https://twitter.com/abubakar_dev"
            ],
            "email": "abubakartechsak01@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "telephone": "+918591131541",
            "knowsAbout": ["Software Development", "Java", "Spring Boot", "Angular", "React", "Full Stack Development", "REST APIs"]
          })}
        </script>
        
        {/* JSON-LD for Website - IMPROVED */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://abubakar.ujiyaar.com/#website",
            "url": "https://abubakar.ujiyaar.com",
            "name": "Abu Bakar Software Developer",
            "description": "Official portfolio website of Abu Bakar - Full Stack Software Developer from India",
            "publisher": {
              "@id": "https://abubakar.ujiyaar.com/#person"
            },
            "inLanguage": "en-US",
            "copyrightYear": currentYear,
            "copyrightHolder": {
              "@id": "https://abubakar.ujiyaar.com/#person"
            }
          })}
        </script>
        
        {/* JSON-LD for SiteNavigationElement - CRITICAL FOR GOOGLE SITE LINKS */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https://abubakar.ujiyaar.com/#navigation",
            "name": quickLinks.map(link => link.name),
            "description": quickLinks.map(link => link.description),
            "url": quickLinks.map(link => `https://abubakar.ujiyaar.com${link.path}`),
            "about": {
              "@id": "https://abubakar.ujiyaar.com/#person"
            }
          })}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      <footer className="bg-primary text-primary-foreground" role="contentinfo" aria-label="Website footer">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Main Footer */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand - Enhanced with better SEO */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-secondary">
                  <img
                    src="/photo.jpg"
                    alt="Abu Bakar - Software Developer Profile Photo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h2 className="font-heading font-semibold text-xl">
                    Abu Bakar
                  </h2>
                  <p className="text-primary-foreground/70 text-sm">
                    <span itemProp="jobTitle">Software Developer</span> & Full Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-primary-foreground/80 max-w-md mb-6 leading-relaxed">
                Passionate <strong>Software Developer</strong> specializing in building robust,
                scalable web applications with Java, Spring Boot, and modern frontend technologies.
              </p>

              {/* Services/Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {services.map((service) => (
                  <span 
                    key={service} 
                    className="px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label={`Follow Abu Bakar on ${social.label} - ${social.username}`}
                    title={`${social.label}: ${social.username}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links - Enhanced with descriptions */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center group"
                      aria-label={`Go to ${link.name} page`}
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Enhanced */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <address className="not-italic text-primary-foreground/70">
                    Saki Naka, Mumbai<br />
                    Maharashtra, India - 400072
                  </address>
                </li>

                <li>
                  <a
                    href="tel:+918591131541"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors group"
                    aria-label="Call Abu Bakar at +91 8591131541"
                  >
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="group-hover:underline">+91 85911 31541</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:abubakartechsak01@gmail.com"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors group break-all"
                    aria-label="Email Abu Bakar at abubakartechsak01@gmail.com"
                  >
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="group-hover:underline">abubakartechsak01@gmail.com</span>
                  </a>
                </li>
              </ul>

              {/* Availability Status */}
              <div className="mt-6 p-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <p className="text-sm text-primary-foreground/80 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Available for freelance opportunities</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="py-6 border-t border-primary-foreground/10 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {currentYear} <Link to="/" className="hover:text-secondary transition-colors">Abu Bakar</Link>. 
              All rights reserved. | <span className="text-primary-foreground/40">Software Developer</span>
            </div>
            
            {/* Footer Navigation */}
            <nav className="flex gap-4 text-xs" aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < quickLinks.length - 1 && (
                    <span className="text-primary-foreground/30">•</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
            
            {/* Developer Credit */}
            <div className="text-primary-foreground/40 text-xs">
              Built with React & Spring Boot
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;