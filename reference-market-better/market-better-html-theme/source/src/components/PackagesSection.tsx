import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter",
    subtitle: "Inbound",
    subtitle2: "",
    features: {
      Conversation: ["2 long-form videos", "SME or Podcast"],
      Content: ["2 social posts per week", "Short-form, graphics"],
      Funnel: ["Inbound: Lead Magnet, CTAs"],
      Data: [],
      Support: [
        "Distribution: Video + 1 social platform",
        "Dedicated Content Team",
        "Quarterly Strategy Huddle",
        "6-month commitment",
      ],
    },
  },
  {
    name: "Growth",
    subtitle: "Inbound + Outbound",
    subtitle2: "",
    popular: true,
    features: {
      Conversation: ["2 long-form videos", "SME or Podcast"],
      Content: ["3 social posts per week", "Short-form, graphics"],
      Funnel: ["Inbound: Lead Magnet, CTAs", "Outbound: Email Marketing (5-10 leads)"],
      Data: ["Custom Dashboard", "Analytics + KPIs"],
      Support: [
        "Distribution: Video + 3 social platforms",
        "Dedicated Content Team",
        "Monthly Strategy Huddle",
        "12-month commitment",
      ],
    },
    footnote: "",
  },
  {
    name: "Elite",
    subtitle: "Inbound + Outbound Plus",
    subtitle2: "",
    features: {
      Conversation: ["2 long-form videos", "SME or Podcast"],
      Content: ["5 social posts per week", "Short-form, graphics", "Long-form, blog or newsletter"],
      Funnel: ["Inbound: Lead Magnet, CTAs", "Outbound: Email Marketing (12-20 leads)"],
      Data: ["Custom Dashboard", "Analytics + KPIs"],
      Support: [
        "Distribution: Full Social Posting",
        "Dedicated Content Team",
        "Monthly Strategy Huddle",
        "12-month commitment",
      ],
    },
  },
];

const PackagesSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black">
            Choose Your Package<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We help small to medium-sized service-based companies turn their ideal buyers into booked sales meetings in under 60 days using Content Funnels™.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 relative flex flex-col ${
                pkg.popular
                  ? "border-t-4 border-accent text-white shadow-2xl"
                  : "border-primary/30 bg-card"
              }`}
              style={
                pkg.popular
                  ? {
                      background:
                        "linear-gradient(180deg, hsl(258 70% 35%) 0%, hsl(258 60% 22%) 55%, hsl(230 30% 12%) 100%)",
                    }
                  : undefined
              }
            >
              <h3
                className={`text-3xl font-black uppercase tracking-tight mb-2 ${
                  pkg.popular ? "text-accent" : "text-primary"
                }`}
              >
                {pkg.name}
              </h3>
              <p className={`text-sm mb-6 ${pkg.popular ? "text-white/80" : "text-muted-foreground"}`}>
                {pkg.subtitle}
              </p>

              {Object.entries(pkg.features).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <p
                    className={`font-bold text-base mb-2 ${
                      pkg.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {category}
                  </p>
                  {items.length === 0 ? (
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        pkg.popular ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      <Minus className="w-4 h-4" /> Not included
                    </div>
                  ) : (
                    <ul className="space-y-1.5">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-2 text-sm ${
                            pkg.popular ? "text-white/95" : "text-foreground/85"
                          }`}
                        >
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={3} />
                          <span className="whitespace-pre-line">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {pkg.footnote && (
                <p className={`text-xs italic mt-2 ${pkg.popular ? "text-white/70" : "text-muted-foreground"}`}>{pkg.footnote}</p>
              )}

              <Button className="w-full mt-auto pt-3 pb-3 h-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
