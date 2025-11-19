"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { zoneDistribution } from "@/lib/data";

const COLORS = ["#22d3ee", "#818cf8", "#f472b6", "#fb7185", "#f97316"];

export function ZoneDistribution() {
  return (
    <section className="glass-panel flex flex-col gap-4 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Heart Rate Zone Mix</h3>
          <p className="text-sm text-slate-400">Balance intensity across endurance sessions.</p>
        </div>
        <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
          Ideal 80/20 split
        </p>
      </header>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={zoneDistribution}
              dataKey="minutes"
              nameKey="zone"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={6}
              stroke="rgba(15, 23, 42, 0.6)"
            >
              {zoneDistribution.map((entry, index) => (
                <Cell key={entry.zone} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#020617",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0"
              }}
              formatter={(value: number) => [`${value} min`, "Time"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-5 gap-2 text-xs text-slate-300">
        {zoneDistribution.map((zone, index) => (
          <div key={zone.zone} className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-2">
            <span
              className="h-2 w-10 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="font-semibold text-white">{zone.zone}</span>
            <span>{zone.minutes}m</span>
          </div>
        ))}
      </div>
    </section>
  );
}
