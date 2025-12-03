import { BookOpen, Check } from "lucide-react";

const features = [
  {
    icon: "📖",
    title: "CRISP Framework",
    description: "Our proven 5-step methodology: Context, Role, Instructions, Specificity, Parameters.",
  },
  {
    icon: "🎯",
    title: "Real Examples",
    description: "Every concept illustrated with before/after prompts showing dramatic improvements.",
  },
  {
    icon: "🔧",
    title: "Tool Mastery",
    description: "Dedicated chapters for ChatGPT, Claude, Gemini, and emerging AI platforms.",
  },
  {
    icon: "💡",
    title: "Advanced Techniques",
    description: "Chain-of-thought, few-shot learning, persona prompts, and more.",
  },
];

const chapters = [
  { name: "Fundamentals of Prompting", chapter: "Ch. 1-3" },
  { name: "The CRISP Framework", chapter: "Ch. 4-6" },
  { name: "Platform-Specific Guides", chapter: "Ch. 7-10" },
  { name: "Advanced Techniques", chapter: "Ch. 11-14" },
  { name: "Prompt Library (1000+)", chapter: "Bonus" },
];

export function Features() {
  return (
    <section id="features" className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features List */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Everything You Need to</span>{" "}
              <span className="text-gradient-teal">Master AI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              A comprehensive system built from years of research and real-world testing with top AI models.
            </p>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-5 group">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Table of Contents Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                What's Inside
              </h3>
              
              <div className="space-y-4">
                {chapters.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{item.name}</span>
                    </div>
                    <span className="text-primary font-semibold text-sm">{item.chapter}</span>
                  </div>
                ))}
              </div>

              {/* Bonus callout */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <p className="text-foreground font-semibold flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Includes lifetime access to prompt library updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
