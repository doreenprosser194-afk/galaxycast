import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
}

const CallToAction = ({
  title = "Speak With a Service Specialist Today",
  subtitle = "Our team is available 8AM – 11PM EST to help you find the perfect plan.",
}: CallToActionProps) => (
  <section className="relative overflow-hidden py-16">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10" />
    <div className="container relative text-center">
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{subtitle}</p>
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg" className="rounded-full text-base glow-primary">
          <a href="tel:+18889295895">
            <Phone className="mr-2 h-5 w-5" /> Call (888) 929-5895
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CallToAction;
