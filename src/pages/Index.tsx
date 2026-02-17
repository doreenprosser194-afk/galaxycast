import { Phone, Wifi, Tv, Package, Shield, Zap, Users, DollarSign, ChevronRight, Star, Clock, Headphones, TrendingUp, MapPin, CheckCircle, Award, ThumbsUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import FloatingElements from "@/components/FloatingElements";
import SEOHead from "@/components/SEOHead";

// Lazy load the popup to not block initial page render
const CallNowPopup = lazy(() => import("@/components/CallNowPopup"));

const PHONE_HREF = "tel:+18889295895";

const services = [
  { icon: Wifi, title: "High-Speed Internet", desc: "Stream in 4K, video conference without lag, and handle multiple devices at once. We connect you with plans offering speeds from 50 Mbps up to 1 Gbps depending on what's actually available at your address.", link: "/internet" },
  { icon: Tv, title: "Cable & Streaming", desc: "Access to live sports, premium cable channels, and we can bundle in streaming service promotions. Our team keeps up with what each carrier actually offers (plans change frequently across markets).", link: "/tv-streaming" },
  { icon: Package, title: "Internet + TV Bundles", desc: "Single bill, coordinated support, and usually better pricing than paying for each service separately. The bundle approach has saved our customers an average of $35–60 monthly.", link: "/bundles" },
];

const whyUs = [
  { icon: Shield, title: "Unbiased Recommendations", desc: "We work with dozens of providers, so we can actually show you what's best — not just what one company wants to sell you." },
  { icon: Zap, title: "Fast Activation", desc: "Most customers get their installation scheduled within a few days. No long waits or runarounds." },
  { icon: Users, title: "Talk to a Real Person", desc: "Our team picks up the phone 7 days a week. No automated menus, no chatbots — just helpful people." },
  { icon: DollarSign, title: "Clear, Honest Pricing", desc: "We break down every fee and term before you sign up. If something seems off, we'll tell you." },
];

const steps = [
  { num: "01", title: "Give Us a Call", desc: "Dial (888) 929-5895 and tell us what you're looking for" },
  { num: "02", title: "We Check Your Area", desc: "Our team finds every plan and promotion available at your address" },
  { num: "03", title: "Pick Your Plan", desc: "We walk you through the options — you choose what works for your budget" },
  { num: "04", title: "Get Set Up", desc: "We schedule installation and handle the details so you don't have to" },
];

const stats = [
  { value: "50+", label: "Partner Providers", icon: Award },
  { value: "10K+", label: "Customers Helped", icon: Users },
  { value: "50", label: "States Covered", icon: MapPin },
  { value: "4.8★", label: "Customer Rating", icon: Star },
];

const testimonials = [
  { name: "Sarah M.", location: "Austin, TX", text: "I called expecting the usual sales pitch, but they actually listened to what I needed. Ended up saving $40 a month on a faster plan. The installation tech was professional and actually knew what he was doing — refreshing after dealing with corporate phone lines.", rating: 5 },
  { name: "James R.", location: "Atlanta, GA", text: "My old provider kept raising prices every 6 months. GalaxyCast found me something better in about 15 minutes. They walked me through the switch and handled all the logistics. Appreciated that.", rating: 5 },
  { name: "Linda K.", location: "Denver, CO", text: "They explained everything clearly and didn't push me into anything. First time I've felt good about choosing an internet plan. The representative actually knew the technical specs of different plans instead of just spouting marketing.", rating: 5 },
  { name: "Marcus T.", location: "Nashville, TN", text: "Got hooked up with fiber internet at a reasonable price. The whole process took about 3 hours from call to appointment. Can't complain.", rating: 4 },
  { name: "Patricia W.", location: "Seattle, WA", text: "Skeptical at first, but they really do compare options from different providers. Found a bundle that saved me money while actually connecting at faster speeds than my previous plan.", rating: 5 },
];

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "Austin", "Atlanta", "Miami",
  "Denver", "Seattle", "Boston", "Nashville", "Charlotte", "Orlando",
];

const faqs = [
  { q: "Are you an actual internet or cable company?", a: "No — and that's actually a good thing. GalaxyCast Network is an independent dealer, which means we're not locked into selling one provider's plans. We compare options from multiple companies so you can see what's actually available in your area at the best price." },
  { q: "Is there a fee for your service?", a: "Nope. Our comparison and consultation service is completely free to you. The providers we work with compensate us, so you pay the same price you'd pay going direct — sometimes even less with promotions we have access to." },
  { q: "Can you help me switch from my current provider?", a: "That's one of the most common calls we get. We'll look at what you're currently paying, find out what else is available at your address, and walk you through the switch if there's a better option." },
  { q: "Do I have to commit to anything on the call?", a: "Not at all. A lot of people call just to explore their options. There's zero pressure to sign up for anything. If you want to think it over, that's perfectly fine." },
  { q: "What about installation — is that something you handle?", a: "We coordinate everything with the provider. Once you pick a plan, we'll help schedule a professional installation at a time that works for you. Most appointments are available within 2–5 business days." },
  { q: "What hours are you available?", a: "Our team is here 7 days a week from 8 AM to 11 PM Eastern. Whether it's a weekday evening or a Saturday afternoon, just give us a ring." },
];

const promises = [
  { icon: Clock, title: "Quick Turnaround", desc: "Professional installation scheduled within 2–5 business days from initial consultation" },
  { icon: Headphones, title: "Live Expert Support", desc: "Actual service consultants (not chatbots) available 7 days a week, 8 AM to 11 PM ET" },
  { icon: TrendingUp, title: "We Hunt for Competitive Rates", desc: "We actually compare fiber, cable, and fixed wireless options from multiple carriers to find you genuine savings" },
  { icon: ThumbsUp, title: "No Pressure, No Tricks", desc: "You get options and facts. You decide. We only get paid if you choose to switch." },
];

const Index = () => {
  // Inject FAQ structured data for Google rich results
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    script.id = "faq-schema";
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema")?.remove(); };
  }, []);

  return (
  <Layout>
    <SEOHead
      title="GalaxyCast Network | Compare Internet, Cable & Streaming Plans"
      description="Compare high-speed internet, cable TV, and streaming plans from top providers across the US. Call (888) 929-5895 for free, no-obligation plan comparison."
      path="/"
    />
    <Suspense fallback={null}>
      <CallNowPopup />
    </Suspense>
    {/* Hero */}
    <section className="relative overflow-hidden py-16 md:py-32 min-h-[80vh] md:min-h-0 flex items-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-bg.mp4"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(var(--primary)/0.25)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,hsl(var(--accent)/0.15)_0%,transparent_50%)]" />
      <FloatingElements />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Star className="h-3 w-3" /> Helping 10,000+ households find better plans
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Stop Overpaying for <span className="text-gradient">Internet & TV.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            We compare cable, internet, and streaming plans from dozens of providers so you don't have to. One quick call — that's it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-full text-base glow-primary">
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base border-primary/50 hover:bg-primary/10">
              <a href={PHONE_HREF}>Check Availability</a>
            </Button>
          </div>
          <a href={PHONE_HREF} className="mt-4 inline-block text-2xl font-bold text-accent">
            (888) 929-5895
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-accent" /> Independent Dealer</span>
            <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-accent" /> Fast Activation</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4 text-accent" /> Nationwide Service</span>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="border-b border-border/50 bg-card/80 py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <s.icon className="mb-2 h-6 w-6 text-accent" />
              <span className="font-heading text-2xl font-bold text-foreground md:text-3xl">{s.value}</span>
              <span className="mt-1 text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Everything you need to stay connected, entertained, and saving money.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Button asChild size="sm" className="rounded-full">
                    <a href={PHONE_HREF}><Phone className="mr-1 h-3 w-3" /> Call Now</a>
                  </Button>
                  <Link to={s.link} className="text-sm text-accent hover:underline flex items-center gap-1">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Our Promise */}
    <section className="border-y border-border/50 bg-gradient-to-b from-card/50 to-background py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Our Promise to You</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">We're committed to making your experience seamless from start to finish.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <p.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Why Choose GalaxyCast?</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <w.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="border-y border-border/50 bg-card/50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Getting connected is simple — here's the process.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <span className="font-heading text-4xl font-bold text-primary/20">{s.num}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary/30 lg:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="rounded-full glow-primary">
            <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Start Now — Call (888) 929-5895</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">What Our Customers Say</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Real feedback from real customers who found better deals through GalaxyCast.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="border-y border-border/50 bg-card/50 py-16 md:py-24">
      <div className="container">
        <div className="flex items-center justify-center gap-3 mb-2">
          <MapPin className="h-6 w-6 text-accent" />
          <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Service Areas</h2>
        </div>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">We help customers across major US cities find the best plans.</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {cities.map((c) => (
            <div key={c} className="rounded-lg border border-border/50 bg-card px-3 py-2 text-center text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
              {c}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't see your city? <a href={PHONE_HREF} className="text-accent hover:underline">Call us</a> — we likely cover your area too.
        </p>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Have questions? We've got answers.</p>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left text-foreground hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <CallToAction />
  </Layout>
  );
};

export default Index;
