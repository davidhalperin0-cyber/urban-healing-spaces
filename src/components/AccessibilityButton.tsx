import { useState } from 'react';
import { Accessibility, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [textSize, setTextSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);

  const accessibilityOptions = [
    {
      label: textSize === 'large' ? 'הקטנת טקסט' : 'הגדלת טקסט',
      action: () => {
        const newSize = textSize === 'large' ? 'normal' : 'large';
        setTextSize(newSize);
        if (newSize === 'large') {
          document.documentElement.style.fontSize = '120%';
        } else {
          document.documentElement.style.fontSize = '100%';
        }
      }
    },
    {
      label: highContrast ? 'כיבוי ניגודיות גבוהה' : 'ניגודיות גבוהה',
      action: () => {
        const newContrast = !highContrast;
        setHighContrast(newContrast);
        if (newContrast) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      }
    },
    {
      label: 'דיווח על בעיה',
      action: () => {
        window.location.href = 'mailto:accessibility@urban-healing-spaces.com?subject=דיווח על בעיית נגישות';
      }
    }
  ];

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 md:right-8 z-50 p-3 md:p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="תפריט נגישות"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="fixed bottom-32 right-4 md:right-8 z-50 bg-card rounded-xl shadow-2xl p-4 min-w-[180px] md:min-w-[200px] max-w-[90vw] border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">נגישות</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-muted rounded-md transition-colors"
                  aria-label="סגור תפריט נגישות"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <ul className="space-y-2">
                {accessibilityOptions.map((option, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        option.action();
                        // Close menu only for actions that navigate away
                        if (option.label === 'דיווח על בעיה') {
                          setIsOpen(false);
                        }
                      }}
                      className="w-full text-right px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityButton;

