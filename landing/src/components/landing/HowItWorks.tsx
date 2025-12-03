const steps = [
  {
    number: "01",
    title: "Get the Book",
    description: "Choose your preferred format: eBook, Pro Bundle, or Team License.",
  },
  {
    number: "02",
    title: "Learn the Framework",
    description: "Master the CRISP methodology with guided exercises and examples.",
  },
  {
    number: "03",
    title: "Practice Daily",
    description: "Apply templates from our 1000+ prompt library to real tasks.",
  },
  {
    number: "04",
    title: "See Results",
    description: "Watch your AI outputs improve dramatically within days.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">How</span>{" "}
            <span className="text-gradient-teal">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, proven path to prompt mastery in just four steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group glass rounded-2xl p-8 text-center glass-hover border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Number */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-teal flex items-center justify-center text-card font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
