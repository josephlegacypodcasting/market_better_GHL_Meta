import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-20">
        <div>
          <p className="mb-5 text-xs font-bold uppercase text-accent">Let’s connect →</p>
          <h2 className="max-w-xl font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
            Ready to turn content into pipeline<span className="text-accent">?</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
            We help service-based businesses turn their ideal buyers into prospects through content and booked sales calls through lead generation.
          </p>
        </div>
        <form className="space-y-6" action="mailto:hello@marketbetterstudio.com" method="post" encType="text/plain">
          <label className="block font-semibold">
            Name <span className="text-accent">*</span>
            <input required name="name" autoComplete="name" placeholder="John Doe" className="mt-3 h-14 w-full rounded-full border-0 bg-background px-6 text-foreground outline-none ring-offset-primary focus-visible:ring-2 focus-visible:ring-accent" />
          </label>
          <label className="block font-semibold">
            Phone number <span className="text-accent">*</span>
            <input required name="phone" type="tel" autoComplete="tel" placeholder="Phone number" className="mt-3 h-14 w-full rounded-full border-0 bg-background px-6 text-foreground outline-none ring-offset-primary focus-visible:ring-2 focus-visible:ring-accent" />
          </label>
          <label className="block font-semibold">
            Email <span className="text-accent">*</span>
            <input required name="email" type="email" autoComplete="email" placeholder="johnsmith@example.com" className="mt-3 h-14 w-full rounded-full border-0 bg-background px-6 text-foreground outline-none ring-offset-primary focus-visible:ring-2 focus-visible:ring-accent" />
          </label>
          <Button type="submit" variant="hero" size="lg" className="h-14 w-full rounded-full text-base">Let’s Talk <ArrowRight /></Button>
        </form>
      </div>
      <div className="border-t border-primary-foreground/15 px-6 py-7 text-center text-sm text-primary-foreground/55">
        © {new Date().getFullYear()} Market Better Studio. Content Funnels™ is a trademark of Market Better Studio.
      </div>
    </footer>
  );
};

export default FooterSection;
