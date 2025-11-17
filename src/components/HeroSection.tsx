import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImage from "@/assets/hero-healing-space.jpg";
import Scene3D from './Scene3D';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-healing-terracotta/20 via-healing-sage/20 to-healing-gold/20 animate-gradient" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-60">
        <Scene3D />
      </div>

      {/* Particle effects */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-foreground mb-2"
            >
              Healer? Facilitator?
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-foreground mb-4"
            >
              Group Leader?
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-primary text-5xl md:text-7xl lg:text-8xl"
            >
              A space is waiting for you.
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              We are creating a new network of urban healing spaces —
              soft, intimate, beautifully designed rooms
              built especially for facilitators and practitioners
              who need a consistent, accessible, welcoming space in the heart of the city.
            </p>
            <p className="text-foreground font-medium">
              Our first pilot is launching now.
            </p>
            <p>
              Interested in joining a new movement that brings healing into the urban world?
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 20px 50px -10px hsl(var(--healing-terracotta)/0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-medium shadow-[0_10px_30px_-10px_hsl(var(--healing-terracotta)/0.3)] transition-all duration-300 hover:animate-glow"
          >
            Leave Your Details
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
