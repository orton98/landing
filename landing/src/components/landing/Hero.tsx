import { Star, Users, Award } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary font-medium">
                <Star className="w-4 h-4 fill-primary" />
                #1 Bestseller in AI & Tech
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Master</span>{" "}
              <span className="text-gradient-teal">AI Prompt</span>{" "}
              <span className="text-foreground">Engineering</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              The definitive guide to crafting powerful prompts. Unlock the full potential of ChatGPT, Claude, and other AI models with proven frameworks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <button onClick={() => scrollTo("#products")} className="btn-teal text-lg px-8 py-4">
                Get the Book
              </button>
              <button onClick={() => scrollTo("#features")} className="btn-outline-teal text-lg px-8 py-4">
                See Inside
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                <span className="text-foreground font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>50K+ Readers</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Award Winner</span>
              </div>
            </div>
          </div>

          {/* Book Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl scale-110" />
              
              {/* Book mockup */}
              <div className="relative glass rounded-3xl p-8 glow-teal border border-primary/20">
                <div className="w-64 md:w-80 aspect-[3/4] bg-gradient-to-br from-card via-secondary to-muted rounded-2xl flex flex-col items-center justify-center p-8 border border-primary/20 shadow-2xl">
                  <BookOpen className="w-20 h-20 text-primary mb-6" />
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gradient-teal text-center mb-2">
                    PromptCraft
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    The Art of AI Prompt Engineering
                  </p>
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <p className="mt-4 text-xs text-primary">1000+ Prompts Inside</p>
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 animate-float border border-primary/20">
                <div className="flex items-center gap-1 text-primary mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                <p className="text-foreground font-bold text-sm">4.9 Rating</p>
                <p className="text-muted-foreground text-xs">2.5K Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
