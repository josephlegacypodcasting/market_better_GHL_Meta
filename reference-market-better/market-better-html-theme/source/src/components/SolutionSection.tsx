import { Pen, Play, Filter, BarChart3 } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      icon: Pen,
      title: "Brand",
      desc: "You have an edge. We find it, sharpen it, and make sure the market can't ignore you.",
    },
    {
      icon: Play,
      title: "Content",
      desc: "Amplify your voice. Fuel the flywheel. Own your category once and for all.",
    },
    {
      icon: Filter,
      title: "Funnel",
      desc: "We take your listeners and turn them into leads your sales team actually wants.",
    },
    {
      icon: BarChart3,
      title: "Data",
      desc: "Stop guessing. Start knowing. Every campaign, channel, and decision backed by data.",
    },
  ];

  return (
    <section className="bg-section-purple text-hero-fg py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          The Content Funnel™ System<span className="text-accent">.</span>
        </h2>
        <p className="mt-6 text-hero-fg/70 text-lg max-w-xl mx-auto">
          We build a video-first content system that fuses inbound and outbound marketing into a lead machine.
        </p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-hero-fg/40 flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-hero-fg/65 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Connecting line */}
        <div className="hidden md:block max-w-3xl mx-auto mt-[-72px] mb-8">
          <div className="border-t-2 border-dashed border-hero-fg/20 mx-16" />
        </div>

        <p className="mt-28 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          A compounding growth engine,{" "}
          <span className="text-accent italic">in your exact voice.</span>
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
