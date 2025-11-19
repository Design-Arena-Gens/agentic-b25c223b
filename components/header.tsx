import { CalendarDays, Flame, MoonStar, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-widest text-brand-400">Momentum</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Performance Dashboard</h1>
        <p className="mt-2 max-w-xl text-sm text-slate-300">
          Track training load, recovery, and fueling to optimize your next block. Insights update
          every sync from your wearables and logging apps.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <QuickAction icon={Flame} label="Log Activity" accent="bg-brand-500/20 text-brand-200" />
        <QuickAction icon={MoonStar} label="Journal Recovery" accent="bg-purple-500/10 text-purple-200" />
        <button className="rounded-full border border-white/10 p-3 text-slate-200 transition hover:border-brand-400 hover:text-brand-300">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

type QuickActionProps = {
  icon: React.ElementType;
  label: string;
  accent: string;
};

function QuickAction({ icon: Icon, label, accent }: QuickActionProps) {
  return (
    <button
      className={cn(
        "group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-white/20",
        accent
      )}
    >
      <Icon className="h-4 w-4 transition group-hover:scale-110" />
      <span>{label}</span>
      <CalendarDays className="h-4 w-4 text-white/20" />
    </button>
  );
}
