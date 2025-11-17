import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImage from "@/assets/WhatsApp Image 2025-11-17 at 20.27.31.jpeg";
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for text readability - stronger overlay to reduce image prominence */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60" />
        {/* Additional overlay in content area for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/35 to-transparent" />
      </div>
      
      {/* Animated gradient background - subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-healing-terracotta/10 via-healing-sage/10 to-healing-gold/10 animate-gradient opacity-50" />

      {/* Particle effects */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-white mb-2"
            >
              מטפל? מנחה?
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-white mb-4"
            >
              מנהיג קבוצה?
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-primary text-5xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_12px_hsl(var(--healing-terracotta)/0.6)]"
            >
              מרחב מחכה לך.
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-relaxed px-2"
          >
            <p className="text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              אנחנו יוצרים רשת חדשה של מרחבי ריפוי עירוניים —
              חדרים רכים, אינטימיים, מעוצבים בקפידה
              שנבנו במיוחד עבור מנחים ומטפלים
              הזקוקים למרחב עקבי, נגיש ומזמין בלב העיר.
            </p>
            <p className="text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              הפיילוט הראשון שלנו מתחיל כעת.
            </p>
            <p className="text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              מעוניינים להצטרף לתנועה חדשה שמביאה ריפוי לעולם העירוני?
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 20px 50px -10px hsl(var(--healing-terracotta)/0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-10 md:py-4 bg-primary text-primary-foreground rounded-xl text-base md:text-lg font-medium shadow-[0_10px_30px_-10px_hsl(var(--healing-terracotta)/0.3)] transition-all duration-300 hover:animate-glow"
          >
            השאירו פרטים
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
