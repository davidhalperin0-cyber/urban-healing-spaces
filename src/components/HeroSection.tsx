import heroImage from "@/assets/hero-healing-space.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground mb-2">Healer? Facilitator?</span>
            <span className="block text-foreground mb-4">Group Leader?</span>
            <span className="block text-primary text-5xl md:text-7xl lg:text-8xl">
              A space is waiting for you.
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
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
          </div>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-medium shadow-[0_10px_30px_-10px_hsl(var(--healing-terracotta)/0.3)] hover:shadow-[0_15px_40px_-10px_hsl(var(--healing-terracotta)/0.4)] hover:scale-105 transition-all duration-300 animate-scale-in"
          >
            Leave Your Details
          </button>
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
