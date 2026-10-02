const ProblemSection = () => {
  return (
    <section className="bg-section-purple text-hero-fg py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Two problems.<br />Same root cause<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-hero-fg/70 text-lg whitespace-nowrap">
            Every company wants two things: a clear, differentiated message and a path to more revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ProblemCard
            label="MESSAGE"
            title="You don't stand out"
            points={[
              "Your buyers are looking. You're nowhere to be found.",
              "Your content is either missing or saying nothing new.",
              "Sales is starting from zero on every single call.",
            ]}
          />
          <ProblemCard
            label="REVENUE"
            title="You can't justify the spend"
            points={[
              "Lots of options. No easy way to calculate ROI.",
              "Marketing and sales are not a unified system.",
              "Content exists. You're not converting.",
            ]}
          />
        </div>

        {/* Bottom statement */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold leading-snug">
            Most companies treat these as separate problems.<br />
            <span className="text-accent">They're not.</span>
          </p>
          
        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({
  label,
  title,
  points,
}: {
  label: string;
  title: string;
  points: string[];
}) => (
  <div className="bg-hero-fg/10 backdrop-blur rounded-2xl p-8 md:p-10">
    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-6">
      {label}
    </span>
    <h3 className="text-3xl md:text-[2rem] font-black mb-6 whitespace-nowrap">{title}</h3>
    <ul className="space-y-4">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1.5 w-3 h-3 rounded-full bg-accent shrink-0" />
          <span className="text-hero-fg/85 text-base whitespace-nowrap">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProblemSection;
