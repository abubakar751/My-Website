import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Audit Management Software',
    description:
      'Developed the Risk Management Module and led a team of 34 developers. Utilized Liqui-base, Spring Boot, and Angular for module integration and feature delivery.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Spring Boot', 'Angular', 'MySQL', 'Hibernate'],
    github: 'https://github.com/abubakar751',
    live: '#',
  },
  {
    id: 2,
    title: 'e-DigiSalesSystem',
    description:
      'Digital sales management platform for streamlining sales processes with product catalogs, customer orders, and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'Spring MVC', 'MySQL', 'REST API'],
    github: 'https://github.com/abubakar751',
    live: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Some of my recent work showcasing my expertise as a <strong>Software Developer</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border hover:shadow-card hover:border-secondary/30 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <img
                    src={project.image}
                    alt={`${project.title} - Software project by Abu Bakar, Full Stack Developer`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium hover:bg-secondary/10 hover:text-secondary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary transition-colors text-sm font-medium flex-1"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Code className="w-4 h-4" />
                      View Code
                    </a>
                    {project.live !== '#' ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium flex-1"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground cursor-not-allowed text-sm font-medium flex-1 opacity-50"
                        aria-label="Live demo not available"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-2xl px-8 py-6 text-lg font-semibold border-2 hover:bg-secondary/10 hover:border-secondary hover:text-secondary transition-all group"
          >
            <Link to="/projects" className="flex items-center">
              View All Projects by Abu Bakar
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Hidden SEO-friendly text for better context */}
        <div className="sr-only">
          <p>
            Abu Bakar is a Full Stack Software Developer from India specializing in Java, 
            Spring Boot, Angular, and React. View more projects in his portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;