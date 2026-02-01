import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    category: "Machine Learning",
    description: "Deep learning platform for predictive business analytics",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
    tech: ["Python", "TensorFlow", "FastAPI"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce with real-time inventory management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Neural Style Transfer",
    category: "Machine Learning",
    description: "Real-time artistic style transfer using GANs",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800",
    tech: ["PyTorch", "OpenCV", "Flask"],
    github: "#",
    live: "#",
  },
];

const FeaturedWorks = () => {
  return (
    <section id="works" className="py-32 bg-charcoal-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Featured Works
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-lg overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-card/90 flex items-center justify-center text-foreground hover:text-gold transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="w-12 h-12 rounded-full bg-card/90 flex items-center justify-center text-foreground hover:text-gold transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gold text-xs tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#skills"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm tracking-wider uppercase"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
