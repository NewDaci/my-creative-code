import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Antigravity from "@/components/Antigravity";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Antigravity Particle Background */}
      <Antigravity
        color="hsl(43, 74%, 49%)"
        count={400}
        particleShape="capsule"
        magnetRadius={15}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        autoAnimate={false}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        fieldStrength={10}
      />
      <div className="absolute inset-0 bg-charcoal/60 pointer-events-none" />

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
      >
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase -rotate-90 origin-center whitespace-nowrap">
          Est. 2024 — Developer
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold text-sm tracking-[0.4em] uppercase mb-6 font-medium"
        >
          Full-Stack Developer & ML Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
        >
          <span className="text-foreground">Ranjeet</span>
          <span className="text-gradient-gold">Sharma</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting elegant web experiences and intelligent ML solutions that push
          the boundaries of what's possible
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#works">View Projects</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#works"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors cursor-pointer pointer-events-auto"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
