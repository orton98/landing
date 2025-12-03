import { BookOpen, Twitter, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Features", href: "#features" },
  { label: "Products", href: "#products" },
];

const resources = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#" },
  { label: "Free Prompt Guide", href: "#" },
  { label: "Blog", href: "#" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-16 px-4 border-t border-border bg-secondary/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-card" />
              </div>
              <span className="text-xl font-display font-bold text-gradient-teal">
                PromptCraft
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              The definitive guide to AI prompt engineering. Master ChatGPT, Claude, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 border border-border transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 border border-border transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 border border-border transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get free prompt tips and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-full glass border border-border focus:border-primary/50 focus:outline-none text-sm bg-transparent text-foreground placeholder:text-muted-foreground"
              />
              <button className="btn-teal px-4 py-2 text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PromptCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
