import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import FooterSection from "@/components/FooterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";

const problemColumns = [
  {
    label: "Message",
    title: "You don’t stand out",
    points: [
      "Your buyers are looking. You’re nowhere to be found.",
      "Your content is missing or saying nothing new.",
      "Sales starts from zero on every single call.",
    ],
  },
  {
    label: "Revenue",
    title: "You can’t see the ROI",
    points: [
      "Lots of activity. No clear path to ROI.",
      "Marketing and sales are not a unified system.",
      "Content exists. Your pipeline isn’t growing.",
    ],
  },
];

const system = [
  { number: "01", title: "Video", description: "Expert-led video builds awareness, authority, and trust before a buyer is ready to talk." },
  { number: "02", title: "Content", description: "One conversation becomes social, newsletters, blogs, and sales content across every buyer channel." },
  { number: "03", title: "Inbound", description: "Lead magnets and nurture turn engaged audiences into qualified opportunities for your sales team." },
  { number: "04", title: "Outbound", description: "Targeted outreach puts your message in front of the right ICP and books the sales conversation." },
];

const Index = () => (
  <main className="overflow-hidden bg-background">
    <SiteHeader />

    <section className="relative min-h-[680px] border-b border-foreground/15 px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col justify-between">
        <div className="max-w-5xl">
          <h1 className="font-display text-6xl font-semibold uppercase leading-[.94] sm:text-7xl md:text-8xl lg:text-9xl">
            One system.<br /><span className="text-accent">Marketing + Sales.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            Market Better fuses marketing and sales into one system: a video-first content engine built around your ICP, so every video, post, and email pulls the exact buyer you want closer to a sales conversation.
          </p>
        </div>
      </div>
    </section>

    <section id="problem" className="scroll-mt-28 bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-5xl font-semibold leading-[1.02] md:text-7xl">Two problems.<br />Same root cause<span className="text-accent">.</span></h2>
          <p className="mx-auto mt-7 text-lg text-primary-foreground/80 lg:whitespace-nowrap">Every company wants two things: a clear, differentiated message and a path to more revenue.</p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {problemColumns.map((column) => (
            <article key={column.label} className="rounded-md bg-problem-surface p-7 text-foreground md:p-10">
              <span className="inline-block rounded-sm bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">{column.label}</span>
              <h3 className="mt-6 max-w-lg font-display text-4xl font-semibold leading-tight md:text-5xl">{column.title}</h3>
              <ul className="mt-7 space-y-2 text-lg leading-relaxed">
                {column.points.map((point) => <li key={point} className="flex gap-3"><span aria-hidden="true">•</span><span>{point}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-14 text-center font-display text-2xl md:text-3xl lg:whitespace-nowrap">Most companies treat these as separate problems. <span className="text-accent">They’re not.</span></p>
      </div>
    </section>

    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-foreground/20 pb-8">
          <h2 className="max-w-5xl font-display text-5xl font-semibold uppercase leading-none md:text-7xl">The <span className="text-accent">Content Funnel</span> System.</h2>
           <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">One compounding engine turns a single conversation into reach, pipeline, and revenue, with marketing and sales working as one system.</p>
        </div>
        <div className="grid md:grid-cols-4">
          {system.map((step) => (
            <article key={step.number} className="border-b border-foreground/20 py-10 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span className="font-display text-sm font-bold text-accent">{step.number}</span>
              <h3 className="mt-8 font-display text-3xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
        <Button asChild variant="outline" size="lg" className="mt-10 border-foreground bg-transparent hover:bg-foreground hover:text-background"><Link to="/how-it-works">See how the funnel works <ArrowRight /></Link></Button>
      </div>
    </section>

    <section className="bg-primary px-6 py-24 text-center text-primary-foreground md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-6xl font-display text-4xl font-semibold uppercase leading-[1.05] md:text-5xl lg:text-[4rem]">
          We’re judged by <span className="text-accent">meetings booked.</span> Not <span className="text-secondary line-through">clicks</span> or <span className="text-secondary line-through">vanity metrics.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">Marketing’s job is simple: soften and accelerate the sales cycle. Make buyers warm before the first call. Put the right person on your sales team’s calendar, already nodding before they pick up.</p>
        <div className="mt-16 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase">
          {['Awareness', 'Impressions', 'Followers'].map((metric) => <span key={metric} className="rounded-full border border-primary-foreground/30 px-4 py-2 text-primary-foreground/45 line-through">{metric}</span>)}
          <span className="flex flex-nowrap gap-3 whitespace-nowrap">
            {['Booked sales meetings', 'Pipeline created', 'Closed revenue'].map((metric) => <span key={metric} className="rounded-full bg-accent px-4 py-2 text-accent-foreground">→ {metric}</span>)}
          </span>
        </div>
      </div>
    </section>

    <TestimonialsSection />

    <FooterSection />
  </main>
);

export default Index;