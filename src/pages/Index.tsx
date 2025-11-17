import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyNowSection from "@/components/WhyNowSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ContactForm />
      <AboutSection />
      <WhoWeAreSection />
      <WhyNowSection />
    </div>
  );
};

export default Index;
