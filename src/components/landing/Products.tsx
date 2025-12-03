import { Check, Sparkles } from "lucide-react";

const products = [
  {
    name: "eBook",
    price: "$29",
    description: "Perfect for self-learners",
    features: [
      "Full 400+ page guide",
      "PDF, EPUB, MOBI formats",
      "Basic prompt library (200+)",
      "Lifetime updates",
    ],
    popular: false,
  },
  {
    name: "Pro Bundle",
    price: "$79",
    description: "Most popular choice",
    features: [
      "Everything in eBook",
      "Full prompt library (1000+)",
      "Video course (5 hours)",
      "Community access",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Team License",
    price: "$249",
    description: "For teams of 5-20",
    features: [
      "Everything in Pro Bundle",
      "Team dashboard",
      "Group training session",
      "Custom prompt templates",
      "Slack support channel",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Team License",
      "Unlimited seats",
      "API integration",
      "Dedicated support",
      "Custom development",
    ],
    popular: false,
  },
];

export function Products() {
  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Choose Your</span>{" "}
            <span className="text-gradient-teal">Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the option that best fits your learning journey and goals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative glass rounded-2xl p-6 flex flex-col border transition-all duration-500 hover:-translate-y-2 ${
                product.popular
                  ? "border-primary/50 glow-teal"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-teal rounded-full text-card text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="text-center pb-6 border-b border-border">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="text-4xl font-display font-bold text-gradient-teal">
                  {product.price}
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 py-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  product.popular
                    ? "btn-teal"
                    : "btn-outline-teal"
                }`}
              >
                {product.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
