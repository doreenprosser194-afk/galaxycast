import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

const PHONE = "(888) 929-5895";
const PHONE_HREF = "tel:+18889295895";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Internet", to: "/internet" },
  { label: "TV & Streaming", to: "/tv-streaming" },
  { label: "Bundles", to: "/bundles" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-gradient">
          <img src={logo} alt="GalaxyCast Network logo" className="h-9 w-9 rounded-lg" />
          GalaxyCast
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="hidden items-center gap-2 text-sm font-semibold text-accent sm:flex">
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <Button asChild className="hidden rounded-full glow-primary sm:inline-flex">
            <a href={PHONE_HREF}>Call Now</a>
          </Button>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="container flex flex-col gap-2 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
