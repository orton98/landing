import { Star } from "lucide-react";

const testimonials = [
  {
    text: "PromptCraft completely changed how I work with AI. My prompts are 10x better, and I save hours every week.",
    author: "Sarah Chen",
    role: "Product Manager at Meta",
    rating: 5,
  },
  {
    text: "The CRISP framework is brilliant. I went from getting mediocre responses to getting exactly what I need on the first try.",
    author: "Marcus Johnson",
    role: "Senior Developer at Stripe",
    rating: 5,
  },
  {
    text: "As a content creator, this book was a game-changer. The prompt templates alone are worth 100x the price.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">What Our</span>{" "}
            <span className="text-gradient-amber">Readers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who have transformed their AI workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass rounded-2xl p-8 glass-hover border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-display font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
