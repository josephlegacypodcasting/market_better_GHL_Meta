const insights = [
  {
    stat: "70%",
    text: "of B2B marketers say creating consistent content is their #1 challenge (CMI, 2024).",
  },
  {
    stat: "73%",
    text: "of B2B purchase decisions are made before sales is ever engaged (Edelman, 2024).",
  },
  {
    stat: "82%",
    text: "of B2B buyers are more likely to trust a company after engaging with SME content (Edelman, 2024).",
  },
];

const InsightsSection = () => {
  return (
    <section className="bg-section-purple text-hero-fg py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-hero-fg/10 backdrop-blur rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-black mb-10">
            Insights<span className="text-accent">.</span>
          </h3>
          <div className="space-y-10">
            {insights.map((item, i) => (
              <div key={i} className="flex items-start gap-6 md:gap-8">
                <span className="text-accent font-black text-5xl md:text-7xl leading-none shrink-0">
                  {item.stat}
                </span>
                <div className="flex items-start gap-6">
                  <div className="w-px bg-accent/60 self-stretch shrink-0 mt-1" />
                  <p className="text-hero-fg/80 text-base md:text-lg leading-relaxed pt-2 md:pt-4">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
