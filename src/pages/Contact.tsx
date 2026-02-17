import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const PHONE_HREF = "tel:+18889295895";

const Contact = () => (
  <Layout>
    <SEOHead
      title="Contact GalaxyCast Network | Call (888) 929-5895"
      description="Get in touch with GalaxyCast Network. Call (888) 929-5895 or leave a message. Available 8 AM – 11 PM EST, 7 days a week."
      path="/contact"
    />
    <section className="galaxy-bg py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          <span className="text-gradient">Contact</span> Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ready to get connected? Our team is just a phone call away.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground">The fastest way to get help is to give us a call.</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href={PHONE_HREF} className="text-accent text-lg font-bold hover:underline">(888) 929-5895</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground">8AM – 11PM EST, 7 Days a Week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
              <div>
                  <h3 className="font-semibold text-foreground">Office Address</h3>
                  <p className="text-muted-foreground">455 SE Barrington Dr<br />Oak Harbor, WA 98277</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 w-full rounded-full glow-primary">
              <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Call Now</a>
            </Button>

            <p className="mt-4 text-xs text-muted-foreground">
              GalaxyCast Network is an independent dealer. We are not directly affiliated with any specific service provider.
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h2 className="font-heading text-2xl font-bold text-foreground">Send a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Prefer a callback? Leave your info and we'll reach out.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 555-5555" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea id="message" placeholder="How can we help?" className="mt-1" rows={4} />
              </div>
              <Button type="submit" className="w-full rounded-full">Request Callback</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
