import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const freelanceProjects = [
  {
    id: 1,
    name: "Ainrion",
    url: "https://ainrion.com/",
    description: "Corporate website with modern design and seamless UX",
    domain: "ainrion.com",
  },
  {
    id: 2,
    name: "Dev Ranjit",
    url: "https://devranjit.in/",
    description: "Personal portfolio showcasing development expertise",
    domain: "devranjit.in",
  },
  {
    id: 3,
    name: "Ria Reco Pulp Solutions",
    url: "https://riarecopulpsolutions.com/",
    description: "Industrial business website for recycling solutions",
    domain: "riarecopulpsolutions.com",
  },
  {
    id: 4,
    name: "Fitoor World",
    url: "https://fitoor.world/",
    description: "Lifestyle brand platform with immersive storytelling",
    domain: "fitoor.world",
  },
  {
    id: 5,
    name: "A2 Kreation",
    url: "https://www.thea2kreation.com/",
    description: "Creative agency site with bold visual identity",
    domain: "thea2kreation.com",
  },
];

const FreelanceProjects = () => {
  return (
    <section id="freelance" className="py-32 bg-background">
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
            Client Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Freelance Projects
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of websites and platforms I've crafted for clients across industries.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {freelanceProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 md:p-8 bg-card rounded-lg border border-border hover:border-gold/50 transition-all duration-300 hover-lift"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gold text-xs tracking-wider uppercase font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border max-w-[40px]" />
                  <span className="text-xs text-muted-foreground font-mono truncate">
                    {project.domain}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {project.description}
                </p>
              </div>
              <div className="ml-6 w-12 h-12 rounded-full border border-border group-hover:border-gold group-hover:bg-gold/10 flex items-center justify-center text-foreground/60 group-hover:text-gold transition-all duration-300 shrink-0">
                <ExternalLink size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceProjects;
