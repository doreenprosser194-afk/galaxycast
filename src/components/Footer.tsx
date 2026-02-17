import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="GalaxyCast Network logo" className="h-8 w-8 rounded-lg" />
            <h3 className="font-heading text-lg font-bold text-gradient">GalaxyCast Network</h3>
          </Link>
          <p className="text-sm text-muted-foreground">
            Independent guide to finding the best internet, cable, and streaming services. Helping consumers since 2016.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Operated by Amber Nikole Benway
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/internet" className="hover:text-foreground transition-colors">Internet</Link></li>
            <li><Link to="/tv-streaming" className="hover:text-foreground transition-colors">TV & Streaming</Link></li>
            <li><Link to="/bundles" className="hover:text-foreground transition-colors">Bundles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link></li>
            <li><Link to="/advertising-disclosure" className="hover:text-foreground transition-colors">Advertising Disclosure</Link></li>
            <li><Link to="/cookies-policy" className="hover:text-foreground transition-colors">Cookies Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-6">
        <p className="text-center text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          GalaxyCast Network is an independent dealer operated by Amber Nikole Benway and is not directly affiliated with or employed by any listed service providers.
          All trademarks, service marks, and trade names referenced on this site belong to their respective owners.
          Pricing, availability, and offers are subject to change without notice and may vary by location.
          455 SE Barrington Dr, Oak Harbor, WA 98277.
          © {new Date().getFullYear()} GalaxyCast Network. All rights reserved by Amber Nikole Benway.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
