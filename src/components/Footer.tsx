import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gold">
              {"</>"}
            </span>
            <span className="text-foreground font-display"></span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} All rights reserved. Crafted with passion.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="text-sm text-muted-foreground hover:text-gold transition-colors uppercase tracking-wider"
          >
            Back to Top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
