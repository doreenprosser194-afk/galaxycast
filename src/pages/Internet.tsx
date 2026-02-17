import { Phone, Gauge, Cable, Radio, MapPin, Wifi, Monitor, Gamepad2, Video, Home, Shield, CheckCircle, Zap, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import FloatingElements from "@/components/FloatingElements";
import SEOHead from "@/components/SEOHead";

const PHONE_HREF = "tel:+18889295895";

const tiers = [
  { speed: "100 Mbps", label: "Basic", desc: "Plenty for checking email, scrolling social media, and catching up on a show or two. If it's just you, this does the trick.", icon: Radio, devices: "1–2", ideal: "Singles & light users" },
  { speed: "300 Mbps", label: "Standard", desc: "This is where most households land. Stream in HD, hop on video calls, and let a few people do their thing at once without the buffering wheel.", icon: Cable, devices: "3–5", ideal: "Couples & small families" },
  { speed: "500 Mbps", label: "Enhanced", desc: "Got kids, gamers, and a Ring doorbell all running at once? This tier keeps up without breaking a sweat.", icon: Gauge, devices: "5–8", ideal: "Active families" },
  { speed: "1 Gbps", label: "Ultra", desc: "For the house where everybody's online and nobody wants to wait. Downloads fly, streams don't stutter, and your smart home stays smart.", icon: Gauge, devices: "10+", ideal: "Power users & smart homes" },
];

const useCases = [
  { icon: Monitor, title: "Streaming", desc: "No more buffering during the season finale. Watch in HD or 4K without the spinning wheel ruining the moment.", speed: "25+ Mbps" },
  { icon: Gamepad2, title: "Online Gaming", desc: "Low ping, fast downloads, and no lag when it matters most. Your teammates will thank you.", speed: "50+ Mbps" },
  { icon: Video, title: "Video Calls", desc: "Look and sound professional on work calls — or just FaceTime grandma without freezing mid-sentence.", speed: "10+ Mbps" },
  { icon: Home, title: "Smart Home", desc: "Thermostats, cameras, speakers, lights — they all need bandwidth. Make sure your home actually stays connected.", speed: "100+ Mbps" },
];

const features = [
  { icon: Shield, title: "No Data Caps", desc: "Stream, download, and browse without watching a meter. Plenty of plans come with truly unlimited data." },
  { icon: Wifi, title: "Whole-Home WiFi", desc: "Dead zones in the back bedroom? Not anymore. Get coverage that actually reaches everywhere." },
  { icon: Clock, title: "24/7 Reliability", desc: "Your internet should just work. These connections are built to stay up when you need them most." },
  { icon: Zap, title: "Fast Installation", desc: "A tech comes out, gets everything set up, and you're online — usually within a few business days." },
];

const Internet = () => (
  <Layout>
    <SEOHead
      title="Home Internet Plans | Compare Speeds & Prices | GalaxyCast"
      description="Compare high-speed internet plans from fiber to cable. Speeds up to 1 Gbps. Call (888) 929-5895 for a free plan comparison based on your address."
      path="/internet"
    />
    <section className="galaxy-bg relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
          <Wifi className="h-3 w-3" /> Speeds up to 1 Gbps Available
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Home Internet That <span className="text-gradient">Actually Delivers</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We'll help you cut through the noise and find a plan that fits your household — whether you need basic browsing or gig-speed everything.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full glow-primary">
          <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Call to Compare Plans</a>
        </Button>
      </div>
    </section>

    {/* Speed Tiers */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">How Much Speed Do You Actually Need?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Here's the honest breakdown — no upselling, just what works for how you use the internet.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <Card key={t.label} className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <t.icon className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-3 font-heading text-3xl font-bold text-accent">{t.speed}</p>
                <p className="mt-1 font-heading text-lg font-semibold text-foreground">{t.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center justify-center gap-1"><Monitor className="h-3 w-3 text-accent" /> {t.devices} devices</span>
                  <span className="text-primary/80">{t.ideal}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction title="Not Sure Which Speed You Need?" subtitle="Give us a call — we'll ask a few questions about your household and point you in the right direction. No pressure." />

    {/* Use Cases */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">What Are You Using the Internet For?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Different activities need different speeds. Here's a real-world look at what works.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <div key={u.title} className="group rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-accent/30">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <u.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
              <span className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{u.speed}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fiber vs Cable */}
    <section className="border-y border-border/50 bg-card/50 py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Fiber vs. Cable — What's the Difference?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Both get the job done, but they work a little differently. Here's what matters.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card className="border-border/50 bg-card transition-all duration-300 hover:border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-accent">Fiber Optic</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" /> Symmetrical upload & download speeds</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" /> Lower latency for gaming & video calls</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" /> More reliable during peak hours</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" /> Future-proof technology</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-card transition-all duration-300 hover:border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Cable className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary">Cable Internet</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" /> Widely available across the US</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" /> Fast download speeds up to 1 Gbps</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" /> Often bundled with TV services</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" /> Easy installation process</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Not sure which is available in your area? <a href={PHONE_HREF} className="text-accent hover:underline">Call us</a> and we'll check for you.
        </p>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">The Stuff That Comes With It</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ZIP */}
    <section className="border-y border-border/50 bg-card/50 py-16">
      <div className="container max-w-2xl text-center">
        <MapPin className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">What's Available at Your Address?</h2>
        <p className="mt-2 text-muted-foreground">Plans and providers change depending on where you live. Give us your ZIP code and we'll tell you exactly what's out there — takes about two minutes.</p>
        <Button asChild size="lg" className="mt-6 rounded-full glow-primary">
          <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Check My Area</a>
        </Button>
      </div>
    </section>

    <CallToAction />
  </Layout>
);

export default Internet;
