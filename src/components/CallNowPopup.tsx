import { useState, useEffect } from "react";
import { Phone, X, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_HREF = "tel:+18889295895";

const CallNowPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("callPopupDismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("callPopupDismissed", "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Popup */}
      <div className="relative w-full max-w-md animate-scale-in rounded-2xl border border-border/50 bg-card p-8 shadow-2xl shadow-primary/10">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          {/* Pulsing phone icon */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 animate-[pulse_2s_ease-in-out_infinite]">
              <Phone className="h-7 w-7 text-primary" />
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Ready to <span className="text-gradient">Save?</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Speak with a specialist now and find the best internet & TV deals in your area.
          </p>

          {/* Phone number */}
          <a
            href={PHONE_HREF}
            className="mt-5 inline-block font-heading text-3xl font-bold text-accent hover:underline"
          >
            (888) 929-5895
          </a>

          {/* CTA Button */}
          <Button asChild size="lg" className="mt-5 w-full rounded-full text-base glow-primary">
            <a href={PHONE_HREF}>
              <Phone className="mr-2 h-5 w-5" /> Call Now — It's Free
            </a>
          </Button>

          {/* Trust indicators */}
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-accent text-accent" /> 4.8 Rating
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-accent" /> 8AM–11PM EST
            </span>
          </div>

          <p className="mt-4 text-[10px] text-muted-foreground/60">
            GalaxyCast Network is an independent dealer. No obligation to purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallNowPopup;
