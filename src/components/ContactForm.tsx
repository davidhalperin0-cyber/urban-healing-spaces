import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "שם הוא שדה חובה").max(100, "השם חייב להיות פחות מ-100 תווים"),
  phone: z.string().trim().min(1, "מספר טלפון הוא שדה חובה").max(20, "מספר הטלפון חייב להיות פחות מ-20 תווים"),
  location: z.string().min(1, "אנא בחר מיקום"),
  practice: z.string().min(1, "אנא בחר תחום עיסוק"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    toast.success("תודה! נחזור אליך בקרוב.");
    
    reset();
    setIsSubmitting(false);
    
    // Scroll to about section
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="contact-form" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-background to-healing-warmth">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              השאירו פרטים
            </h2>
            <p className="text-lg text-muted-foreground">
              מלאו את הפרטים שלכם ואנחנו נחזור אליכם
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.15)] p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 md:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="name" className="text-base">שם מלא</Label>
              <Input
                id="name"
                placeholder="הזן את שמך המלא"
                className="h-12 text-base"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="phone" className="text-base">מספר טלפון</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="הזן את מספר הטלפון שלך"
                className="h-12 text-base"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="location" className="text-base">מיקום</Label>
              <Select onValueChange={(value) => setValue("location", value)}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="בחר מיקום" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="center">מרכז</SelectItem>
                  <SelectItem value="jerusalem">ירושלים</SelectItem>
                  <SelectItem value="south">דרום</SelectItem>
                  <SelectItem value="north">צפון</SelectItem>
                </SelectContent>
              </Select>
              {errors.location && (
                <p className="text-sm text-destructive">{errors.location.message}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="space-y-2"
            >
              <Label htmlFor="practice" className="text-base">תחום עיסוק</Label>
              <Select onValueChange={(value) => setValue("practice", value)}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="בחר תחום" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facilitation">הנחיית קבוצות</SelectItem>
                  <SelectItem value="movement">סדנאות תנועה</SelectItem>
                  <SelectItem value="sound">ריפוי בקול</SelectItem>
                  <SelectItem value="mindfulness">מיינדפולנס</SelectItem>
                  <SelectItem value="breathwork">עבודת נשימה</SelectItem>
                  <SelectItem value="other">אחר</SelectItem>
                </SelectContent>
              </Select>
              {errors.practice && (
                <p className="text-sm text-destructive">{errors.practice.message}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Button
                type="submit"
                variant="healing"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "שולח..." : "שלח"}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
