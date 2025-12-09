export function CTA() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Ready to</span>{" "}
            <span className="text-gradient-amber">Master AI Prompts</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join 50,000+ professionals who have transformed their productivity with the power of expert prompt engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("#products")} className="btn-amber text-lg px-10 py-4">
              Get PromptCraft Now
            </button>
            <button onClick={() => scrollTo("#features")} className="btn-outline-amber text-lg px-10 py-4">
              See Sample Chapters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
