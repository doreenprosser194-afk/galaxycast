import { Phone, DollarSign, FileText, Gift, CheckCircle, Package, Wifi, Tv, Star, Shield, Zap, TrendingDown, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import FloatingElements from "@/components/FloatingElements";
import SEOHead from "@/components/SEOHead";

const PHONE_HREF = "tel:+18889295895";

const benefits = [
  { icon: DollarSign, title: "Save More Together", desc: "Paying for internet and TV separately? You're probably leaving money on the table. Bundling usually knocks a good chunk off your monthly total." },
  { icon: FileText, title: "One Simple Bill", desc: "One payment, one account, one login. No more juggling three different due dates every month." },
  { icon: Gift, title: "Exclusive Promotions", desc: "Bundle customers tend to get the better deals — we're talking free upgrades, promo rates, the works." },
  { icon: CheckCircle, title: "Easy Setup", desc: "One appointment, one technician, everything set up at the same time. In and out, done." },
];

const bundles = [
  {
    name: "Internet + Basic TV",
    highlight: "Most Popular",
    icon: Package,
    features: ["Speeds up to 300 Mbps", "75+ channels", "Cloud DVR included", "WiFi router included"],
    accent: "primary",
  },
  {
    name: "Internet + Premium TV",
    highlight: "Best Value",
    icon: Star,
    features: ["Speeds up to 500 Mbps", "200+ channels", "Premium movie channels", "Whole-home DVR"],
    accent: "accent",
  },
  {
    name: "Internet + Streaming",
    highlight: "Cord Cutter's Choice",
    icon: Tv,
    features: ["Speeds up to 1 Gbps", "Top streaming platforms", "No cable box needed", "Watch on any device"],
    accent: "primary",
  },
];

const savingsReasons = [
  { icon: TrendingDown, title: "Lower Monthly Cost", desc: "Most people save somewhere between 20–40% compared to paying for each service on its own. That adds up fast." },
  { icon: Shield, title: "Price Lock Available", desc: "A lot of bundles let you lock in your rate for a year or two. No surprise jumps on the bill." },
  { icon: Gift, title: "Bonus Perks", desc: "Free speed boosts, premium channels thrown in, upgraded equipment — bundles tend to come with nice extras." },
  { icon: Zap, title: "No Double Fees", desc: "Skip the separate activation fees, install charges, and equipment costs. One bundle, one set of fees." },
];

const testimonials = [
  { name: "Mike T.", location: "Houston, TX", text: "I was paying for internet and cable separately like an idiot. Called these guys, bundled it, and now I'm saving like fifty bucks a month. Kicking myself for not doing it sooner.", rating: 5 },
  { name: "Rachel S.", location: "Phoenix, AZ", text: "Honestly, I just wanted one bill instead of three. The guy on the phone found me a deal with faster internet AND more channels. Took maybe 15 minutes.", rating: 5 },
];

const Bundles = () => (
  <Layout>
    <SEOHead
      title="Internet & TV Bundle Deals | Save Up to 40% | GalaxyCast"
      description="Bundle your internet and TV for lower monthly bills. Compare bundle options from top providers. Call (888) 929-5895 for free quotes."
      path="/bundles"
    />
    <section className="galaxy-bg relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
          <DollarSign className="h-3 w-3" /> Save Up to 40% with Bundles
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Internet + TV <span className="text-gradient">Bundles</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Why pay for everything separately when you can bundle it, save money, and deal with one bill? Let's find you a combo that makes sense.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full glow-primary">
          <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Get Bundle Deals</a>
        </Button>
      </div>
    </section>

    {/* Why Bundle */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Why Do People Bundle?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">It's not just about convenience (though that's a big part). Here's what you're really getting.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <Card key={b.title} className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction title="Ready to Stop Overpaying?" subtitle="Give us a ring and we'll put together a bundle that actually fits your household. Takes a few minutes." />

    {/* Bundle Options */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative max-w-5xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Our Most Popular Combos</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">These are the bundles people ask about most. Pricing depends on your area, so give us a call for the real numbers.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bundles.map((b) => (
            <Card key={b.name} className={`border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-${b.accent}/5 hover:border-${b.accent}/50`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${b.accent}/10`}>
                    <b.icon className={`h-5 w-5 text-${b.accent}`} />
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{b.highlight}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{b.name}</h3>
                <ul className="mt-4 space-y-2">
                  {b.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" className="mt-6 w-full rounded-full">
                  <a href={PHONE_HREF}><Phone className="mr-1 h-3 w-3" /> Call for Pricing</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Savings Breakdown */}
    <section className="border-y border-border/50 bg-card/50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Where Does the Savings Actually Come From?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Fair question. Here's the straightforward answer.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {savingsReasons.map((s) => (
            <div key={s.title} className="group flex flex-col items-center text-center rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-accent/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">What People Are Saying</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
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

    {/* Comparison CTA */}
    <section className="border-t border-border/50 bg-card/50 py-16">
      <div className="container max-w-2xl text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Wifi className="h-10 w-10 text-primary" />
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
          <Tv className="h-10 w-10 text-accent" />
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
          <Package className="h-10 w-10 text-primary" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Still Figuring It Out?</h2>
        <p className="mt-2 text-muted-foreground">Totally fine. Call us up and we'll walk through everything together — zero pressure, zero commitment. Just straight answers.</p>
        <Button asChild size="lg" className="mt-6 rounded-full glow-primary">
          <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Talk to a Bundle Specialist</a>
        </Button>
      </div>
    </section>

    <CallToAction />
  </Layout>
);

export default Bundles;
