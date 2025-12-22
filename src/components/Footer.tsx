import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/abubakar751', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/abu bakar', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/abubakar', label: 'Twitter' },
    { icon: Mail, href: 'mailto:abubakartechsak01@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
  <div className="flex items-center gap-3 mb-6">

    {/* PROFILE IMAGE */}
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-secondary">
      <img
        src="/photo.jpg"   // public/profile.jpg
        alt="Abu Bakar"
        className="w-full h-full object-cover"
      />
    </div>

    {/* NAME + ROLE */}
    <div>
      <h3 className="font-heading font-semibold text-xl">Abu Bakar</h3>
      <p className="text-primary-foreground/70 text-sm">
        Software Developer
      </p>
    </div>

  </div>


            <p className="text-primary-foreground/80 max-w-md mb-6 leading-relaxed">
              Passionate Java developer specializing in building robust, scalable web applications 
              with modern technologies. Let's build something amazing together.
            </p>
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
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Saki Naka Mumbai, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+918591131541"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  +91 8591131541
                </a>
              </li>
              <li>
                <a
                  href="mailto:abubakartechsak01@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                  abubakartechsak01@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Abu Bakar. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
