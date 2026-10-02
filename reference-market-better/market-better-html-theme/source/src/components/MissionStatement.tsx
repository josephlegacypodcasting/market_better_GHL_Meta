import { Rocket, TrendingUp, Megaphone } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Growth Mode",
    description: "Companies scaling fast that need a system to match their ambition.",
  },
  {
    icon: TrendingUp,
    title: "Venture-Backed",
    description: "Funded startups ready to turn capital into predictable pipeline.",
  },
  {
    icon: Megaphone,
    title: "Marketing + Sales",
    description: "Teams that need content and outbound working as one engine.",
  },
];

const MissionStatement = () => {
  return (
    <section className="bg-hero-bg text-hero-fg py-20 md:py-28">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest text-accent mb-4">
          Who we help
        </h2>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
          Service-based companies turning their{" "}
          ideal buyers into <span className="text-accent">booked sales meetings</span>{" "}
          in under 60 days.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-hero-fg/10 backdrop-blur rounded-2xl p-8 flex flex-col items-center text-center gap-4"
            >
              <div className="bg-accent/15 rounded-xl p-3">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-hero-fg/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
