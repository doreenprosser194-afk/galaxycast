import { Phone, Tv, Film, HardDrive, Monitor, Play, Radio, Newspaper, Trophy, Baby, Globe2, Music, Clapperboard, Star, CheckCircle, Zap, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import FloatingElements from "@/components/FloatingElements";
import SEOHead from "@/components/SEOHead";

const PHONE_HREF = "tel:+18889295895";

const packages = [
  { icon: Tv, title: "Essential TV", desc: "Your local news, some sports, and the channels most people actually watch. It's a solid starting point without paying for stuff you'll never turn on.", channels: "75+" },
  { icon: Monitor, title: "Premium TV", desc: "More sports, more movies, international channels — basically the full lineup. If someone in the house is always flipping channels, this one's for them.", channels: "200+" },
  { icon: Film, title: "Streaming Add-Ons", desc: "Tack on your favorite streaming apps and keep it all on one bill. Less juggling, fewer passwords to remember.", channels: "On-Demand" },
  { icon: HardDrive, title: "Cloud DVR", desc: "Record what you want, watch it when you want. Game starts while you're at dinner? No problem — it'll be waiting for you.", channels: "Unlimited" },
];

const channelCategories = [
  { icon: Newspaper, name: "Local News", count: "10+" },
  { icon: Trophy, name: "Live Sports", count: "25+" },
  { icon: Clapperboard, name: "Movies", count: "20+" },
  { icon: Baby, name: "Kids & Family", count: "15+" },
  { icon: Globe2, name: "International", count: "30+" },
  { icon: Music, name: "Music", count: "10+" },
  { icon: Film, name: "Documentary", count: "10+" },
  { icon: Star, name: "Premium Networks", count: "8+" },
  { icon: Radio, name: "Lifestyle & Home", count: "15+" },
];

const streamingBenefits = [
  { icon: Play, title: "Watch Anywhere", desc: "On the couch, at the gym, waiting at the dentist — your TV goes wherever your phone does." },
  { icon: Clock, title: "On-Demand Library", desc: "Thousands of movies and shows sitting there ready whenever you've got a free hour (or five)." },
  { icon: Users, title: "Multiple Profiles", desc: "Everyone gets their own space. Your recommendations stay yours — no more kids' cartoons messing up your feed." },
  { icon: Zap, title: "Instant Access", desc: "No waiting for a cable box or a technician. Sign up, log in, start watching. That's it." },
];

const TvStreaming = () => (
  <Layout>
    <SEOHead
      title="TV & Streaming Packages | Live TV, DVR & More | GalaxyCast"
      description="Compare live TV, streaming add-ons, and DVR packages. 200+ channels available. Call (888) 929-5895 to find TV plans in your area."
      path="/tv-streaming"
    />
    <section className="galaxy-bg relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
          <Tv className="h-3 w-3" /> 200+ Channels Available
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          TV & <span className="text-gradient">Streaming</span> Your Way
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Live channels, on-demand shows, and your favorite streaming apps — all in one place. We'll help you figure out what makes sense for your household.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full glow-primary">
          <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Explore TV Plans</a>
        </Button>
      </div>
    </section>

    {/* Packages */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Pick What Works for You</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">There's no one-size-fits-all here. Take a look and see what fits the way your household actually watches TV.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {packages.map((p) => (
            <Card key={p.title} className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{p.channels}</span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <Button asChild size="sm" className="mt-4 rounded-full">
                  <a href={PHONE_HREF}><Phone className="mr-1 h-3 w-3" /> Get This Package</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction title="Not Sure What You Need?" subtitle="That's totally fine — give us a call and we'll walk through your options together. No commitment, just a conversation." />

    {/* Streaming Benefits */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <FloatingElements />
      <div className="container relative">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">TV That Travels With You</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Your living room isn't the only place you watch anymore. Here's how streaming keeps up with your life.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {streamingBenefits.map((b) => (
            <div key={b.title} className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <b.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Channel Categories */}
    <section className="border-y border-border/50 bg-card/50 py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">What's On?</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">Here's a taste of what you'll have access to. Something for everyone in the house — seriously.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {channelCategories.map((ch) => (
            <div key={ch.name} className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card px-4 py-3 transition-all duration-300 hover:border-primary/30">
              <ch.icon className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{ch.name}</p>
                <p className="text-xs text-muted-foreground">{ch.count} channels</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DVR Feature */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <HardDrive className="h-3 w-3" /> Cloud DVR Included
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Your Schedule, Your Shows</h2>
            <p className="mt-4 text-muted-foreground">Life's busy — Cloud DVR lets you record whatever you want and come back to it later. Pause, rewind, binge at 2 AM. Totally up to you.</p>
            <ul className="mt-6 space-y-3">
              {["Record multiple shows simultaneously", "Access recordings from any device", "Storage for hundreds of hours", "Set series recordings automatically"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-6 rounded-full glow-primary">
              <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" /> Ask About DVR Plans</a>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 to-accent/10">
              <HardDrive className="h-24 w-24 text-primary/40" />
              <Play className="absolute h-12 w-12 text-accent animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <CallToAction />
  </Layout>
);

export default TvStreaming;
