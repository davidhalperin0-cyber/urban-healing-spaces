import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeAreSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const benefits = [
    "A stable, consistent space for your sessions",
    "A room designed for depth, quiet, and meaningful gathering",
    "Good, accessible conditions in central locations",
    "Ability to run weekly or daily activities",
    "Opportunity to build long, transformative processes",
    "Simple logistics: one address, consistent space, continuity",
    "A framework that holds the facilitators — not the other way around",
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-healing-warmth to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              <p className="text-xl">
                We are <span className="text-primary font-semibold">Dvora and Yael</span> — an architect and a facilitator.
              </p>
              <p>
                We joined forces to create a new framework
                for deep and healing spaces across Israel.
              </p>
              <p>
                We believe the urban world needs:
                softness, beauty, intimacy, and human connection.
                Spaces that allow people to breathe, meet, and build community
                within real life, not outside of it.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-foreground text-center">
              What This Gives Facilitators & Practitioners
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl text-foreground font-medium italic">
                When there is a soft, designed and reliable space —
                your work becomes a growing, living community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
