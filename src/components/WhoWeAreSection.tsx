import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeAreSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const benefits = [
    "מרחב יציב ועקבי לסשנים שלכם",
    "חדר מעוצב לעומק, שקט והתכנסות משמעותית",
    "תנאים טובים ונגישים במיקומים מרכזיים",
    "אפשרות להפעיל פעילויות שבועיות או יומיות",
    "הזדמנות לבנות תהליכים ארוכים ומשני חיים",
    "לוגיסטיקה פשוטה: כתובת אחת, מרחב עקבי, המשכיות",
    "מסגרת שתומכת במנחים — ולא להפך",
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
              מי אנחנו
            </h2>
            <div className="prose prose-sm md:prose-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed px-2">
              <p className="text-lg md:text-xl">
                אנחנו <span className="text-primary font-semibold">דבורה ויעל</span> — אדריכלית ומנחה.
              </p>
              <p>
                חברנו כוחות כדי ליצור מסגרת חדשה
                למרחבים עמוקים ומרפאים ברחבי ישראל.
              </p>
              <p>
                אנחנו מאמינות שהעולם העירוני זקוק:
                לרכות, יופי, אינטימיות וחיבור אנושי.
                מרחבים שמאפשרים לאנשים לנשום, להיפגש ולבנות קהילה
                בתוך החיים האמיתיים, לא מחוץ להם.
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
              מה זה נותן למנחים ולמטפלים
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
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
            <div className="text-center mt-6 md:mt-8 px-2">
              <p className="text-base md:text-lg lg:text-xl text-foreground font-medium italic">
                כשיש מרחב רך, מעוצב ואמין —
                העבודה שלכם הופכת לקהילה גדלה וחיה.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
