import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  location: z.string().min(1, "Please select a location"),
  practice: z.string().min(1, "Please select your field of practice"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    toast.success("Thank you! We will get back to you soon.");
    
    reset();
    setIsSubmitting(false);
    
    // Scroll to about section
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="contact-form" className="py-20 md:py-32 bg-gradient-to-b from-background to-healing-warmth">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Leave Your Details
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill in your details and we will get back to you
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-2xl shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.15)] p-8 md:p-12 space-y-6 animate-scale-in">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="h-12 text-base"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="h-12 text-base"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-base">Location</Label>
              <Select onValueChange={(value) => setValue("location", value)}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="jerusalem">Jerusalem</SelectItem>
                  <SelectItem value="south">South</SelectItem>
                  <SelectItem value="north">North</SelectItem>
                </SelectContent>
              </Select>
              {errors.location && (
                <p className="text-sm text-destructive">{errors.location.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="practice" className="text-base">Field of Practice</Label>
              <Select onValueChange={(value) => setValue("practice", value)}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Select your field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facilitation">Group Facilitation</SelectItem>
                  <SelectItem value="movement">Movement Workshops</SelectItem>
                  <SelectItem value="sound">Sound Healing</SelectItem>
                  <SelectItem value="mindfulness">Mindfulness</SelectItem>
                  <SelectItem value="breathwork">Breathwork</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.practice && (
                <p className="text-sm text-destructive">{errors.practice.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="healing"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
