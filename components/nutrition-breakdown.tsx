"use client";

import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { nutritionWeek } from "@/lib/data";

export function NutritionBreakdown() {
  return (
    <section className="glass-panel col-span-2 flex flex-col gap-6 p-6">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300/80">Nutrition</p>
          <h3 className="text-2xl font-semibold text-white">Macro Distribution</h3>
          <p className="text-sm text-slate-300">
            Track energy availability against training load to support adaptation.
          </p>
        </div>
        <div className="text-xs text-slate-400">
          Avg intake: <span className="text-brand-200">2380 kcal</span>
        </div>
      </header>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={nutritionWeek} stackOffset="expand">
            <defs>
              <linearGradient id="colorProtein" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorCarbs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorFats" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis
              tickFormatter={(value) => `${Math.round(value * 100)}%`}
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value: number, name) => [`${Math.round(value * 100)}%`, name]}
              contentStyle={{
                background: "#020617",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0"
              }}
            />
            <Legend />
            <Area type="monotone" dataKey="protein" stackId="1" stroke="#34d399" fill="url(#colorProtein)" />
            <Area type="monotone" dataKey="carbs" stackId="1" stroke="#60a5fa" fill="url(#colorCarbs)" />
            <Area type="monotone" dataKey="fats" stackId="1" stroke="#fbbf24" fill="url(#colorFats)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
