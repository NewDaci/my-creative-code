import { motion } from "framer-motion";
import { Code2, Brain, Database, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"],
  },
  {
    icon: Code2,
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your needs, goals, and vision through detailed discussions and research.",
  },
  {
    step: "02",
    title: "Design",
    description: "Creating wireframes and prototypes that align with your brand and user expectations.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building robust, scalable solutions using modern technologies and best practices.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Testing, optimization, and deployment with ongoing support and maintenance.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-charcoal-light">
      <div className="container mx-auto px-6">
        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border hover:border-gold/30 transition-colors duration-300"
            >
              <category.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            How I Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            My Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <p className="text-6xl font-display font-bold text-gold/20 mb-4">
                {step.step}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <p className="font-display text-2xl md:text-3xl italic text-foreground mb-4">
            "First, solve the problem. Then, write the code."
          </p>
          <cite className="text-gold text-sm tracking-wider">— John Johnson</cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Skills;
