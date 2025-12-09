import { Zap, Target, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "10x Faster Results",
    description: "Master proven frameworks that help you get better AI responses on your first try, every time.",
  },
  {
    icon: Target,
    title: "Precision Prompting",
    description: "Learn the exact techniques used by top AI researchers to craft clear, effective prompts.",
  },
  {
    icon: Sparkles,
    title: "1000+ Templates",
    description: "Access our curated library of battle-tested prompts for writing, coding, analysis, and more.",
  },
  {
    icon: TrendingUp,
    title: "Future-Proof Skills",
    description: "Build transferable skills that work across ChatGPT, Claude, Gemini, and future AI models.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Why Choose</span>{" "}
            <span className="text-gradient-amber">PromptCraft</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who have transformed their AI interactions with our proven methodology.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group glass rounded-2xl p-8 glass-hover border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
