import SiteHeader from "@/components/SiteHeader";
import FooterSection from "@/components/FooterSection";

const placeholders = [
  { role: "Strategy", expertise: "ICP, positioning & revenue strategy" },
  { role: "Creative", expertise: "Video, editorial & brand storytelling" },
  { role: "Growth", expertise: "Inbound, outbound & demand generation" },
  { role: "Data", expertise: "Attribution, reporting & optimization" },
];

const TeamPage = () => (
  <main className="bg-background">
    <SiteHeader />
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
         <p className="section-kicker">The People Behind the System</p>
         <h1 className="font-display text-5xl font-semibold uppercase leading-[.96] md:text-7xl">Different Expertise.<br /><span className="block whitespace-nowrap text-[1.45rem] text-accent sm:text-5xl lg:text-7xl">One Goal In Mind</span></h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">Strategy, creative and growth all work side by side so your marketing never gets disconnected from the sales results it is meant to create.</p>
      </div>
    </section>
    <section className="border-t border-foreground/15 px-6 pb-28 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {placeholders.map((person, index) => (
          <article key={person.role}>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <span className="absolute bottom-5 left-5 font-display text-6xl text-primary/35">0{index + 1}</span>
            </div>
            <p className="mt-5 text-xs font-bold uppercase text-accent">{person.role}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Name + Title</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{person.expertise}</p>
          </article>
        ))}
      </div>
    </section>
    <FooterSection />
  </main>
);

export default TeamPage;