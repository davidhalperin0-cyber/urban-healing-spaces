import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-healing-warmth py-16 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            הצטרפו לתנועה
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            התחברו אלינו והיו חלק מיצירת מרחבי ריפוי ברחבי העיר
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 md:gap-6 flex-wrap"
          >
            {/* Social media icons placeholder - can be customized */}
            <SocialIcon href="#" label="Facebook" />
            <SocialIcon href="#" label="Instagram" />
            <SocialIcon href="#" label="LinkedIn" />
            <SocialIcon href="#" label="Email" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/20 text-sm text-muted-foreground"
          >
            <p>© 2024 רשת מרחבי ריפוי עירוניים. כל הזכויות שמורות.</p>
          </motion.div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 md:right-8 z-50 p-3 md:p-4 bg-primary text-primary-foreground rounded-full shadow-[0_10px_30px_-10px_hsl(var(--healing-terracotta)/0.5)] hover:shadow-[0_15px_40px_-10px_hsl(var(--healing-terracotta)/0.6)] hover:scale-110 transition-all duration-300"
          style={{
            animation: 'glow 1s ease-in-out infinite'
          }}
          aria-label="חזרה למעלה"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </footer>
  );
};

const SocialIcon = ({ href, label }: { href: string; label: string }) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-300"
    >
      <span className="text-lg font-semibold">{label[0]}</span>
    </motion.a>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Footer;
