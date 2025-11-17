import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticleBackground from './ParticleBackground';

const WhyNowSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ParticleBackground />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why Now */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              למה עכשיו?
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-xl">
                אחרי שנים של לחץ, חוסר יציבות וקונפליקט,
                אנשים בישראל זקוקים עמוקות למרחבים של ריפוי, חיבור וחוסן.
              </p>
              <p>
                הם זקוקים למקומות לנשום, להתחבר מחדש, לקבל תמיכה.
                ומנחים ומטפלים זקוקים לבית יציב
                כדי ליצור, להחזיק מרחב ולהביא שינוי אמיתי.
              </p>
              <p className="text-foreground font-semibold text-2xl">
                היוזמה הזו קיימת עבורך —
                ועבור הקהילה שזקוקה לך.
              </p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.15)] p-8 md:p-16 text-center space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-foreground">
              הזמנה להצטרף
            </h3>
            <div className="prose prose-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xl">
                אם אתה כאן כדי להנחות, לרפא, להדריך וליצור חוויות משמעותיות —
                אנחנו מזמינים אותך להצטרף אלינו.
              </p>
              <p className="text-foreground font-medium text-2xl">
                הפוך לחלק מתנועה חדשה שמביאה ריפוי לעיר.
              </p>
              <p>
                עיצוב מרחבים שמביאים חוסן, עומק וקהילה
                לכל אדם.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 20px 50px -10px hsl(var(--healing-terracotta)/0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-medium shadow-[0_10px_30px_-10px_hsl(var(--healing-terracotta)/0.3)] transition-all duration-300 hover:animate-glow"
            >
              הצטרף לתנועה
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
