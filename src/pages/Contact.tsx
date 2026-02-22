import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useLenis } from '@/hooks/useLenis';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  useLenis();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent successfully!',
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abubakartechsak01@gmail.com',
      description: 'Send me an email anytime',
      href: 'mailto:abubakartechsak01@gmail.com',
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200',
      schema: 'email',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8591131541',
      description: 'Mon-Fri from 9am to 6pm',
      href: 'tel:+918591131541',
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200',
      schema: 'telephone',
    },
    {
      // WhatsApp with official logo and pre-filled message
      icon: 'whatsapp',
      title: 'WhatsApp',
      value: '+91 8591131541',
      description: 'Fast replies • Usually within hours',
      href: 'https://wa.me/918591131541?text=Hello%20Abu%20Bakar!%20I%20visited%20https://abubakar.ujiyaar.com%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.',
      color: 'bg-emerald-50 text-emerald-700',
      borderColor: 'border-emerald-200',
      badge: 'Live',
      badgeColor: 'bg-emerald-500 text-white',
      isWhatsApp: true,
      metadata: {
        responseTime: 'Quick response',
        availability: '9 AM - 10 PM IST',
        prefilledMessage: true
      },
      schema: 'contactPoint',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Saki Naka Mumbai, India',
      description: 'Available for remote work',
      href: '#',
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200',
      schema: 'address',
    },
  ];

  // WhatsApp Icon Component
  const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
    <div className="relative">
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411z"/>
      </svg>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
    </div>
  );

  return (
    <>
      {/* ========== SEO META TAGS ========== */}
      <Helmet>
        <title>Contact Abu Bakar (Abubakar) | Software Developer & Java Developer | India</title>
        <meta name="description" content="Contact Abu Bakar (Abubakar) – Software Developer & Java Developer from India. Reach out via email: abubakartechsak01@gmail.com, phone: +91 8591131541, WhatsApp, or contact form for project inquiries, freelance work, and collaboration." />
        <meta name="keywords" content="Contact Abu Bakar, Contact Abubakar, Abu Bakar Email, Abubakar Phone Number, Abu Bakar WhatsApp, Hire Java Developer India, Freelance Developer Contact, Software Developer Mumbai, Java Developer UP, abubakartechsak01@gmail.com, +91 8591131541" />
        <meta name="author" content="Abu Bakar (Abubakar) - Software Developer" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Abu Bakar (Abubakar) | Software Developer & Java Developer | India" />
        <meta property="og:description" content="Contact Abu Bakar – Software Developer from India. Email: abubakartechsak01@gmail.com, Phone: +91 8591131541, WhatsApp available." />
        <meta property="og:url" content="https://abubakar.ujiyaar.com/contact" />
        <meta property="og:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        <meta property="og:type" content="contact" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Contact Abu Bakar (Abubakar) | Software Developer | India" />
        <meta name="twitter:description" content="Contact Abu Bakar – Java Developer from India. Email, phone, and WhatsApp available." />
        <meta name="twitter:image" content="https://abubakar.ujiyaar.com/photo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abubakar.ujiyaar.com/contact" />
        
        {/* ========== STRUCTURED DATA (SCHEMA.ORG) ========== */}
        {/* ContactPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://abubakar.ujiyaar.com/contact#contactpage",
            "url": "https://abubakar.ujiyaar.com/contact",
            "name": "Contact Abu Bakar - Software Developer",
            "description": "Contact page for Abu Bakar (Abubakar), Software Developer and Java Developer from India",
            "mainEntity": {
              "@id": "https://abubakar.ujiyaar.com/#person"
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
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://abubakar.ujiyaar.com/contact" }
            ]
          })}
        </script>
        
        {/* Person Schema with Contact Points */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://abubakar.ujiyaar.com/#person",
            "name": "Abu Bakar",
            "alternateName": "Abubakar",
            "jobTitle": "Software Developer",
            "email": "abubakartechsak01@gmail.com",
            "telephone": "+918591131541",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+918591131541",
                "contactType": "WhatsApp",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Urdu"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "22:00"
                }
              },
              {
                "@type": "ContactPoint",
                "email": "abubakartechsak01@gmail.com",
                "contactType": "Email",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saki Naka, Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            }
          })}
        </script>
        
        {/* LocalBusiness Schema for better local SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Abu Bakar Software Development Services",
            "image": "https://abubakar.ujiyaar.com/photo.jpg",
            "url": "https://abubakar.ujiyaar.com",
            "telephone": "+918591131541",
            "email": "abubakartechsak01@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saki Naka, Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+918591131541",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "sameAs": [
              "https://github.com/abubakar751",
              "https://linkedin.com/in/abubakar751"
            ],
            "priceRange": "$$"
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
                className="text-center"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Let's Work <span className="gradient-text">Together</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Have a project in mind or just want to say hello? I'd love to hear from you.
                  Let's create something amazing together.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group p-6 rounded-2xl bg-card shadow-soft border ${method.borderColor} hover:shadow-card hover:border-secondary/30 transition-all duration-300`}
                    aria-label={`Contact via ${method.title}`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {method.isWhatsApp ? (
                        <WhatsAppIcon className="w-6 h-6" />
                      ) : (
                        <method.icon className="w-6 h-6" />
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {method.title}
                      </h3>
                      {method.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${method.badgeColor} font-medium`}>
                          {method.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className="font-medium text-foreground mb-1">{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    
                    {method.metadata && (
                      <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{method.metadata.responseTime}</span>
                        <span>•</span>
                        <span>{method.metadata.availability}</span>
                      </div>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Left Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Send Me a <span className="gradient-text">Message</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you have a question, want to discuss a project, or just want to connect,
                    fill out the form and I'll get back to you as soon as possible.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          Quick Response
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          I typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          Open for Opportunities
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Currently available for freelance projects and full-time positions.
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Contact Card */}
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">Quick Contact</p>
                      <a
                        href="https://wa.me/918591131541?text=Hello%20Abu%20Bakar!%20I%20visited%20https://abubakar.ujiyaar.com%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-300 hover:shadow-md border border-emerald-200"
                        aria-label="Contact on WhatsApp"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold">WhatsApp Chat</span>
                            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-medium">
                              Quick Reply
                            </span>
                          </div>
                          
                          <div className="text-sm mt-1 text-emerald-600">
                            Message me directly
                          </div>
                          
                          <div className="flex items-center gap-1 text-xs text-emerald-500 mt-1">
                            <Clock className="w-3 h-3" />
                            <span>Usually replies within hours</span>
                          </div>
                        </div>
                        
                        <svg className="w-4 h-4 text-emerald-600 opacity-70 group-hover:translate-x-1 transition-transform" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 rounded-3xl bg-card shadow-card border border-border"
                >
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="rounded-xl h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@example.com"
                          required
                          className="rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        className="rounded-xl h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, requirements, or any questions you have..."
                        required
                        rows={6}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full rounded-2xl gradient-bg py-6 text-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
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

export default Contact;