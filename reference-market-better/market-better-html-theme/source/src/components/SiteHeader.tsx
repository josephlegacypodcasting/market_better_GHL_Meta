import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-5 py-3.5 md:px-10 lg:px-14">
        <Link
          to="/"
          className="shrink-0 font-display text-[1.15rem] font-bold uppercase text-foreground transition-colors hover:text-accent sm:text-[1.32rem]"
        >
          Market Better
        </Link>

        <nav className="ml-auto hidden items-center gap-7 text-[0.9rem] lg:flex" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "text-accent" : ""}`}>Home</NavLink>
          <NavLink to="/team" className={({ isActive }) => `nav-link ${isActive ? "text-accent" : ""}`}>The Team</NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `nav-link ${isActive ? "text-accent" : ""}`}>How It Works</NavLink>
          <NavLink to="/roi-calculator" className={({ isActive }) => `nav-link ${isActive ? "text-accent" : ""}`}>Calculator</NavLink>
        </nav>

        <div className="ml-auto lg:ml-4">
          <Button asChild variant="hero" className="h-9 px-4 text-[0.8rem] sm:px-5">
            <a href="/#show">Market Better Show</a>
          </Button>
        </div>
      </div>

      <nav className="flex gap-6 overflow-x-auto border-t border-foreground/10 px-5 py-2.5 text-[0.8rem] lg:hidden" aria-label="Mobile navigation">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/team" className="nav-link">The Team</NavLink>
        <NavLink to="/how-it-works" className="nav-link">How It Works</NavLink>
        <NavLink to="/roi-calculator" className="nav-link">Calculator</NavLink>
      </nav>
    </header>
  );
};

export default SiteHeader;