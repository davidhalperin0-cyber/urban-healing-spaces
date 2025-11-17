import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-healing-warmth relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-healing-warmth/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Design Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              World-Class Design & Advanced Experience
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              <p>
                This landing page is crafted with a premium, world-class design —
                clean, timeless and visually refined.
                Every detail has been shaped with the most advanced features,
                smooth modern interactions and cutting-edge technology.
              </p>
              <p>
                The aesthetic is intentionally soft, elegant and high-end —
                reflecting the essence of our healing spaces:
                warmth, intimacy, depth and beauty.
              </p>
              <p className="text-foreground font-medium">
                This is not just a website —
                it is a state-of-the-art digital experience,
                built to inspire trust, connection and a sense of belonging.
              </p>
            </div>
          </motion.div>

          {/* About the Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.15)] p-8 md:p-12 space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-foreground text-center">
              About the Project
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are building a network of urban healing spaces:
                soft, intimate, designed rooms
                integrated within public urban buildings.
              </p>
              <div className="bg-healing-warmth rounded-xl p-6 border-l-4 border-primary">
                <p className="text-foreground font-semibold text-xl mb-2">Our mission:</p>
                <p>
                  to make healing, resilience and meaningful human connection
                  accessible inside people's daily lives —
                  circles, workshops, movement, breathwork, deep processes —
                  in the heart of the city, within walking distance,
                  in safe and welcoming spaces.
                </p>
              </div>
              <p>
                There are many facilitators and healers with powerful, life-changing content,
                but many don't have a stable, suitable space for their work.
                That's exactly what we are creating:
              </p>
              <p className="text-foreground font-medium text-center text-xl">
                Spaces designed for breath, dialogue, movement and healing —
                with good conditions, soft aesthetics, and a sense of community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
