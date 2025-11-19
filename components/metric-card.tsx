import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Metric } from "@/lib/data";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <article className="glass-panel stat-gradient relative flex flex-col overflow-hidden p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-200">{metric.label}</p>
        <Icon
          className={cn(
            "h-5 w-5",
            metric.trend === "up" ? "text-emerald-400" : "text-rose-400"
          )}
        />
      </div>
      <p className="mt-6 text-3xl font-semibold text-white">{metric.value}</p>
      <p
        className={cn(
          "mt-4 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
          metric.trend === "up"
            ? "bg-emerald-400/10 text-emerald-300"
            : "bg-rose-400/10 text-rose-300"
        )}
      >
        {metric.trend === "up" ? "+" : "-"}
        {Math.abs(metric.delta)}% vs last week
      </p>
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-white/5 bg-white/5 blur-2xl" />
    </article>
  );
}
