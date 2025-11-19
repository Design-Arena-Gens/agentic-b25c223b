"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { trainingLoad } from "@/lib/data";

export function TrainingChart() {
  return (
    <section className="glass-panel col-span-2 flex flex-col gap-6 p-6">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300/80">Training Load</p>
          <h2 className="text-2xl font-semibold text-white">Weekly Intensity Distribution</h2>
          <p className="mt-2 text-sm text-slate-300">
            Manage load to avoid overtraining. Maintain 80-110 ACWR (acute:chronic workload ratio).
          </p>
        </div>
        <div className="rounded-full border border-white/10 px-4 py-1 text-xs text-slate-300">
          7-day rolling average: <span className="text-brand-200">78</span>
        </div>
      </header>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trainingLoad}>
            <defs>
              <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ab7ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1c9dff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#0f172a" opacity={0.4} />
            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
            />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} tickMargin={12} />
            <Tooltip
              cursor={{ stroke: "#1c9dff", strokeWidth: 1 }}
              contentStyle={{
                background: "#020617",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0"
              }}
            />
            <Area
              type="monotone"
              dataKey="load"
              stroke="#4ab7ff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorLoad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
