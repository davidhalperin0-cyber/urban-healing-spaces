const WhoWeAreSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-healing-warmth to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who We Are */}
          <div className="text-center space-y-8 animate-fade-in">
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
          </div>

          {/* Benefits Grid */}
          <div className="space-y-8 animate-scale-in">
            <h3 className="text-2xl md:text-4xl font-bold text-foreground text-center">
              What This Gives Facilitators & Practitioners
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A stable, consistent space for your sessions",
                "A room designed for depth, quiet, and meaningful gathering",
                "Good, accessible conditions in central locations",
                "Ability to run weekly or daily activities",
                "Opportunity to build long, transformative processes",
                "Simple logistics: one address, consistent space, continuity",
                "A framework that holds the facilitators — not the other way around",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
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
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl text-foreground font-medium italic">
                When there is a soft, designed and reliable space —
                your work becomes a growing, living community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
