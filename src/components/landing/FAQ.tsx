import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What AI platforms does PromptCraft cover?",
    answer: "PromptCraft covers all major AI platforms including ChatGPT (GPT-4), Claude, Gemini, and Llama. Our techniques are designed to be transferable across platforms.",
  },
  {
    question: "Do I need coding experience?",
    answer: "No coding experience required! PromptCraft is designed for professionals at all technical levels. We start with fundamentals and progress to advanced techniques.",
  },
  {
    question: "What format is the book available in?",
    answer: "The eBook is available in PDF, EPUB, and MOBI formats. Pro Bundle and above include access to our searchable web version and video course.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day no-questions-asked money-back guarantee. If you're not satisfied, we'll refund your purchase in full.",
  },
  {
    question: "How long will it take to see results?",
    answer: "Most readers report significant improvements within their first week of applying the CRISP framework. Mastery develops with continued practice.",
  },
  {
    question: "Do I get lifetime updates?",
    answer: "Yes! All purchases include lifetime access to future updates. As AI evolves, we continuously update our content and prompt library.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Frequently Asked</span>{" "}
            <span className="text-gradient-amber">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-5">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
