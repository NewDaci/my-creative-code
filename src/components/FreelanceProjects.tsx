import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ainrionImg from "@/assets/freelance-ainrion.png";
import devranjitImg from "@/assets/freelance-devranjit.png";
import riarecoImg from "@/assets/freelance-riareco.png";
import fitoorImg from "@/assets/freelance-fitoor.png";
import a2kreationImg from "@/assets/freelance-a2kreation.png";

const freelanceProjects = [
  {
    id: 1,
    name: "Ainrion",
    url: "https://ainrion.com/",
    description: "Corporate R&D website for AI, Blockchain & IoT solutions",
    domain: "ainrion.com",
    category: "Corporate",
    image: ainrionImg,
  },
  {
    id: 2,
    name: "Dev Ranjit",
    url: "https://devranjit.in/",
    description: "Personal portfolio showcasing development expertise",
    domain: "devranjit.in",
    category: "Portfolio",
    image: devranjitImg,
  },
  {
    id: 3,
    name: "Ria Reco Pulp Solutions",
    url: "https://riarecopulpsolutions.com/",
    description: "Industrial business website for firewood & eco pulp supplies",
    domain: "riarecopulpsolutions.com",
    category: "Industrial",
    image: riarecoImg,
  },
  {
    id: 4,
    name: "Fitoor World",
    url: "https://fitoor.world/",
    description: "Travel platform for curated dream destinations",
    domain: "fitoor.world",
    category: "Travel",
    image: fitoorImg,
  },
  {
    id: 5,
    name: "A2 Kreation",
    url: "https://www.thea2kreation.com/",
    description: "Events & hospitality agency with bold visual identity",
    domain: "thea2kreation.com",
    category: "Events",
    image: a2kreationImg,
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

        {/* Projects Grid - First row 2 large cards, then 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {freelanceProjects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} large />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {freelanceProjects.slice(2).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  large = false,
}: {
  project: (typeof freelanceProjects)[0];
  index: number;
  large?: boolean;
}) => {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block bg-card rounded-xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover-lift"
    >
      {/* Browser-style top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-charcoal-light border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px]">
            {project.domain}
          </span>
        </div>
        <ArrowUpRight
          size={14}
          className="text-muted-foreground group-hover:text-gold group-hover:rotate-12 transition-all duration-300"
        />
      </div>

      {/* Screenshot */}
      <div className={`relative overflow-hidden bg-charcoal-light ${large ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        <img
          src={project.image}
          alt={`${project.name} website preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback if screenshot fails
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold bg-charcoal/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold/30">
            {project.category}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className={`font-display font-semibold text-foreground group-hover:text-gold transition-colors duration-300 ${large ? "text-3xl" : "text-2xl"}`}>
            {project.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            {project.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default FreelanceProjects;
