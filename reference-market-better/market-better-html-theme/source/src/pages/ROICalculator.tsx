import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import FooterSection from "@/components/FooterSection";
import { Slider } from "@/components/ui/slider";

const MONTHS = 12;
const money = (value: number) => `$${Math.round(value).toLocaleString()}`;

type SliderFieldProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  display: string;
  onChange: (value: number) => void;
};

const SliderField = ({ label, min, max, step, value, display, onChange }: SliderFieldProps) => (
  <div className="border-b border-border py-6">
    <div className="mb-5 flex items-end justify-between gap-6">
      <label className="font-semibold">{label}</label>
      <span className="font-display text-2xl font-semibold text-accent">{display}</span>
    </div>
    <Slider min={min} max={max} step={step} value={[value]} onValueChange={([next]) => onChange(next)} />
  </div>
);

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="border-t border-primary-foreground/25 py-5">
    <p className="text-sm text-primary-foreground/65">{label}</p>
    <p className="mt-2 font-display text-3xl font-semibold">{value}</p>
  </div>
);

const ROICalculator = () => {
  const [acv, setAcv] = useState(0);
  const [leads, setLeads] = useState(0);
  const [closeRate, setCloseRate] = useState(0);
  const [retainer, setRetainer] = useState(0);
  const [appointmentCost, setAppointmentCost] = useState(0);
  const [ltv, setLtv] = useState(0);

  const result = useMemo(() => {
    const dealsPerMonth = leads * (closeRate / 100);
    const yearOneDeals = dealsPerMonth * MONTHS;
    const yearOneRevenue = yearOneDeals * acv;
    const monthlyAppointmentCost = leads * appointmentCost;
    const yearOneCost = (retainer + monthlyAppointmentCost) * MONTHS;
    const renewedDeals = yearOneDeals * (ltv / 100);
    const yearTwoRevenue = renewedDeals * acv;
    const totalRevenue = yearOneRevenue + yearTwoRevenue;
    const netReturn = totalRevenue - yearOneCost;
    const roi = yearOneCost > 0 ? totalRevenue / yearOneCost : 0;
    return { dealsPerMonth, yearOneDeals, yearOneRevenue, yearOneCost, monthlyAppointmentCost, renewedDeals, yearTwoRevenue, totalRevenue, netReturn, roi };
  }, [acv, leads, closeRate, retainer, appointmentCost, ltv]);

  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Revenue calculator</p>
          <h1 className="max-w-5xl font-display text-6xl font-semibold uppercase leading-[.96] md:text-8xl">See what your pipeline <span className="text-accent">could produce.</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">Use your annual contract value and sales assumptions to model the return from qualified meetings.</p>
        </div>
      </section>

      <section className="border-t border-foreground/15 px-6 pb-28 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1.1fr_.9fr]">
          <div className="py-14 lg:pr-16">
            <p className="mb-4 text-xs font-bold uppercase text-accent">Your numbers</p>
            <SliderField label="Average contract value (ACV)" min={0} max={500000} step={1000} value={acv} display={money(acv)} onChange={setAcv} />
             <SliderField label="New appointments set per month" min={0} max={50} step={1} value={leads} display={`${leads}`} onChange={setLeads} />
             <SliderField label="Close rate on appointments set" min={0} max={80} step={5} value={closeRate} display={`${closeRate}%`} onChange={setCloseRate} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <label className="font-semibold">Monthly retainer<input type="number" min={0} step={500} value={retainer} onChange={(event) => setRetainer(Number(event.target.value) || 0)} className="mt-3 h-12 w-full border border-input bg-card px-4 font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring" /></label>
               <label className="font-semibold">Cost Per Appointment<input type="number" min={0} step={50} value={appointmentCost} onChange={(event) => setAppointmentCost(Math.max(0, Number(event.target.value) || 0))} className="mt-3 h-12 w-full border border-input bg-card px-4 font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring" /></label>
            </div>
            <SliderField label="Client renewal rate (year 2)" min={0} max={100} step={5} value={ltv} display={`${ltv}%`} onChange={setLtv} />
          </div>

          <aside className="bg-primary p-8 text-primary-foreground md:p-12 lg:min-h-full">
            <p className="text-xs font-bold uppercase text-accent">Projected return</p>
            <p className="mt-4 font-display text-6xl font-semibold">{result.roi.toFixed(1)}x</p>
            <p className="mt-3 text-primary-foreground/70">24-month projected ROI</p>
            <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Metric label="Deals closed in year 1" value={result.yearOneDeals.toFixed(1)} />
              <Metric label="Revenue in year 1" value={money(result.yearOneRevenue)} />
              <Metric label="Renewed deals in year 2" value={result.renewedDeals.toFixed(1)} />
              <Metric label="Revenue in year 2" value={money(result.yearTwoRevenue)} />
               <Metric label="Monthly retainer" value={money(retainer)} />
               <Metric label="Appointments per month × cost per appointment" value={money(result.monthlyAppointmentCost)} />
              <Metric label="Total investment" value={money(result.yearOneCost)} />
              <Metric label="Net return" value={money(result.netReturn)} />
            </div>
            <div className="mt-10 border-l-4 border-accent pl-5">
              <p className="font-display text-xl font-semibold">{result.dealsPerMonth.toFixed(1)} new deals per month</p>
               <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">Calculated from your appointments set and close rate.</p>
            </div>
          </aside>
        </div>
      </section>
      <FooterSection />
    </main>
  );
};

export default ROICalculator;