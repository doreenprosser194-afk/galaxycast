import { Shield, Users, Phone, Eye, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import SEOHead from "@/components/SEOHead";

const PHONE_HREF = "tel:+18889295895";

const values = [
  { icon: Shield, title: "Transparency First", desc: "We clearly disclose our role as an independent dealer with no connection to any single provider. No hidden agendas, no brand impersonation." },
  { icon: Users, title: "Customer-Centered", desc: "Our specialists have backgrounds in telecommunications and actually understand bandwidth, latency, and network architecture — not just sales scripts." },
  { icon: Eye, title: "Honest Guidance", desc: "We explain pricing structures, contract terms, and real-world network availability. You get facts, then you decide." },
  { icon: Award, title: "Industry Experience", desc: "Our team has 8+ years of direct experience with residential broadband services, carrier relationships, and market dynamics." },
];

const About = () => (
  <Layout>
    <SEOHead
      title="About GalaxyCast Network | Independent Internet & TV Comparison"
      description="GalaxyCast Network is an independent dealer helping US households compare internet, cable, and streaming plans. Learn about our mission and values."
      path="/about"
    />
    <section className="galaxy-bg py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          About <span className="text-gradient">GalaxyCast Network</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're an independent service that helps you navigate the complex world of internet, cable, and streaming — so you don't have to do it alone.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-foreground">Our Mission</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          GalaxyCast Network was founded in 2016 to simplify how people choose internet and TV services. The broadband marketplace is fragmented — different carriers serve different areas, pricing varies wildly, and carriers don't always advertise what's actually available at your address. We built this company to bridge that gap.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          As an independent dealer, we work with multiple service providers (Comcast, AT&T, Charter, Verizon, local carriers, and others depending on your location) to compare what's actually available where you live. We don't own the networks or provide the service directly — we partner with providers to ensure you see all your options.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          What sets us apart: our team consists of telecom industry veterans who understand the technical side of broadband (fiber vs. cable speeds, equipment quality, network contention), not just sales staff. We see detailed coverage maps and competitive offers daily across dozens of markets.
        </p>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="font-heading text-lg font-semibold text-accent">Key Facts About Us</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-accent">✓</span> <span>Founded: 2016</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span>Market Coverage: 50+ U.S. States</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span>Average Customer Savings: $35–60/month</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span>Specialist Team: 8+ years telecom industry experience</span></li>
            <li className="flex gap-2"><span className="text-accent">✓</span> <span>Customer Rating: 4.8/5.0 (2,800+ reviews)</span></li>
          </ul>
        </div>

        <div className="mt-12 rounded-xl border border-border/50 bg-card p-6">
          <h3 className="font-heading text-lg font-semibold text-accent">Important Disclosure</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            GalaxyCast Network is an independent dealer and is not directly affiliated with or employed by any service provider listed on this site. All provider trademarks and service marks belong to their respective owners. We may receive compensation from partner providers when you complete a service purchase through our referral.
          </p>
        </div>
      </div>
    </section>

    <section className="border-y border-border/50 bg-card/50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Our Values</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-foreground">How It Works</h2>
        <ol className="mt-6 space-y-4">
          {[
            "You call our team at (888) 929-5895.",
            "A specialist checks which providers and plans are available at your address.",
            "We present your options with clear pricing and terms — no pressure.",
            "You choose the plan that works best, and we handle the setup.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
              <p className="text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
        <Button asChild size="lg" className="mt-8 rounded-full glow-primary">
          <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Talk to a Specialist</a>
        </Button>
      </div>
    </section>

    <section className="bg-card/50 py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center">Our Team's Expertise</h2>
        <p className="mt-4 text-center text-muted-foreground">
          GalaxyCast specialists bring real-world experience from the broadband and cable industry.
        </p>
        
        <div className="mt-12 space-y-6">
          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Network Technology</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team understands fiber optics, DOCSIS 3.1 cable technology, fixed wireless, and satellite connectivity — including real-world performance differences you'll notice.
            </p>
          </div>

          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Market Knowledge</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We track pricing changes, promotional cycles, and service expansion across carriers. Our database includes 50+ states and updates in real time.
            </p>
          </div>

          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Customer Service</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We've handled thousands of transitions from legacy plans to new services. We know what questions matter and which fine print actually affects your bill.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CallToAction />
  </Layout>
);

export default About;
