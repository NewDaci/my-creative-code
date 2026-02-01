import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
  { value: "5+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass rounded-lg p-6 shadow-elegant"
            >
              <p className="text-4xl font-display font-bold text-gradient-gold">
                3+
              </p>
              <p className="text-sm text-muted-foreground">Years of Coding</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Passionate Developer & ML Enthusiast
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a full-stack developer and machine learning engineer with a passion 
                for building elegant, scalable solutions. My journey began with curiosity 
                about how things work, and evolved into a career crafting digital experiences 
                that make a difference.
              </p>
              <p>
                I specialize in modern web technologies like React, Node.js, and TypeScript, 
                while also diving deep into machine learning with Python, TensorFlow, and PyTorch. 
                Whether it's building responsive web applications or training neural networks, 
                I bring the same dedication to every project.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-10">
              <p className="font-display text-2xl italic text-gold">Your Name</p>
              <p className="text-sm text-muted-foreground">Developer & ML Engineer</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-display font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
