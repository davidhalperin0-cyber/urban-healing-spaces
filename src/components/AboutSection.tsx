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
          {/* About the Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.15)] p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 md:space-y-6 lg:space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-foreground text-center">
              על הפרויקט
            </h3>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                אנחנו בונים רשת של מרחבי ריפוי עירוניים:
                חדרים רכים, אינטימיים, מעוצבים
                המשולבים בתוך מבנים עירוניים ציבוריים.
              </p>
              <div className="bg-healing-warmth rounded-xl p-4 md:p-6 border-l-4 border-primary">
                <p className="text-foreground font-semibold text-lg md:text-xl mb-2">המשימה שלנו:</p>
                <p>
                  להפוך ריפוי, חוסן וחיבור אנושי משמעותי
                  לנגישים בתוך חיי היומיום של אנשים —
                  מעגלים, סדנאות, תנועה, עבודת נשימה, תהליכים עמוקים —
                  בלב העיר, במרחק הליכה,
                  במרחבים בטוחים ומזמינים.
                </p>
              </div>
              <p>
                יש מנחים ומטפלים רבים עם תוכן עוצמתי ומשנה חיים,
                אבל רבים מהם לא זוכים למרחב יציב ומתאים לעבודתם.
                זה בדיוק מה שאנחנו יוצרים:
              </p>
              <p className="text-foreground font-medium text-center text-base md:text-lg lg:text-xl">
                מרחבים מעוצבים לנשימה, דיאלוג, תנועה וריפוי —
                עם תנאים טובים, אסתטיקה רכה ותחושת קהילה.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
