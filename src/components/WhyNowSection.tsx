const WhyNowSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why Now */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Now?
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-xl">
                After years of pressure, instability and conflict,
                people in Israel deeply need spaces of healing, connection and resilience.
              </p>
              <p>
                They need places to breathe, to reconnect, to be supported.
                And facilitators and healers need a stable home
                to create, hold space and bring real transformation.
              </p>
              <p className="text-foreground font-semibold text-2xl">
                This initiative exists for you —
                and for the community that needs you.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.15)] p-8 md:p-16 text-center space-y-8 animate-scale-in">
            <h3 className="text-2xl md:text-4xl font-bold text-foreground">
              Invitation to Join
            </h3>
            <div className="prose prose-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xl">
                If you're here to facilitate, heal, guide and create meaningful experiences —
                we invite you to join us.
              </p>
              <p className="text-foreground font-medium text-2xl">
                Become part of a new movement bringing healing into the city.
              </p>
              <p>
                Designing spaces that bring resilience, depth and community
                to every person.
              </p>
            </div>
            <button
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-medium shadow-[0_10px_30px_-10px_hsl(var(--healing-terracotta)/0.3)] hover:shadow-[0_15px_40px_-10px_hsl(var(--healing-terracotta)/0.4)] hover:scale-105 transition-all duration-300"
            >
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
