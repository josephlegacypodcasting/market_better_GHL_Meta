import { Quote } from "lucide-react";
import danielRosen from "@/assets/testimonials/daniel-rosen.png";
import kevinClayson from "@/assets/testimonials/kevin-clayson.png";
import joyKong from "@/assets/testimonials/joy-kong.png";
import creditRepairCloud from "@/assets/testimonials/creditrepair-cloud.png";
import dfyRealEstate from "@/assets/testimonials/dfy-real-estate.png";
import aaict from "@/assets/testimonials/aaict.png";

const testimonials = [
  {
    quote:
      "When we started this process about six months ago, we were at a run rate of about $7 million. And now, we are at a run rate of $12 million.",
    name: "Daniel Rosen",
    title: "Founder, Credit Repair Cloud",
    avatar: danielRosen,
    logo: creditRepairCloud,
    logoAlt: "Credit Repair Cloud",
  },
  {
    quote:
      "The investment into our content system has already closed $250k in 90 days and we're just getting started.",
    name: "Kevin Clayson",
    title: "DFY Investing",
    avatar: kevinClayson,
    logo: dfyRealEstate,
    logoAlt: "DFY Real Estate",
  },
  {
    quote:
      "Our number of lead inquiries went up 55% in the first month, then another 65% the month after that. So definitely a major jump!",
    name: "Dr. Joy Kong",
    title: "Founder, AAICT",
    avatar: joyKong,
    logo: aaict,
    logoAlt: "American Academy of Integrative Cell Therapy",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <h2 className="mb-14 text-center font-display text-4xl font-semibold md:text-6xl">
          Results That Speak for Themselves<span className="text-accent">.</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex min-h-[26rem] flex-col rounded-md bg-background p-6 text-foreground md:p-7"
            >
              <Quote className="mb-4 h-7 w-7 text-accent" strokeWidth={2.5} />
              <p className="mb-6 flex-1 font-display text-lg font-medium leading-snug lg:text-xl">
                “{t.quote}”
              </p>
              <div className="mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="mb-3 h-14 w-14 rounded-full border border-primary object-cover"
                  loading="lazy"
                />
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.title}</p>
              </div>
              <img
                src={t.logo}
                alt={t.logoAlt}
                className="mt-auto h-9 max-w-[10rem] object-contain object-left"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
