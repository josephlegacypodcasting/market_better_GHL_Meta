import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import funnelImg from "@/assets/funnel-brand.png";
const HeroSection = () => {
  return (
    <section className="bg-hero-bg text-hero-fg">
      {/* Nav */}
      <nav className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold text-lg tracking-wide uppercase">Market Better Studio</span>
        </div>
      </nav>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-0 pb-12 md:pb-20 -mt-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            We turn<br />conversation<br />into pipeline<span className="text-accent">.</span>
          </h1>
          <p className="text-hero-fg/80 text-lg max-w-md leading-relaxed">
            Video-first content system that fuses inbound and outbound marketing into a lead machine.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/how-it-works">
              <Button variant="heroOutline" size="lg" className="rounded-full px-8 text-base">
                See How It Works
              </Button>
            </Link>
            <Link to="/roi-calculator">
              <Button variant="hero" size="lg" className="rounded-full px-8 text-base">
                ROI Calculator
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-hero-fg/70 text-sm pt-4">
            <div className="bg-accent/20 rounded-full p-1">
              <Check className="w-4 h-4 text-accent" />
            </div>
            Trusted by operators, not just marketers.
          </div>
        </div>

        {/* Funnel illustration */}
        <div className="flex justify-center items-center">
          <img src={funnelImg} alt="Content Funnel - Conversation, Content, Funnels, Data" className="w-full max-w-[938px] mix-blend-lighten" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
