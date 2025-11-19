import { CircleCheck, HeartPulse, Moon, Zap } from "lucide-react";
import { readinessScore } from "@/lib/data";

const readinessBreakdown = [
  { id: "hrv", label: "HRV Balance", value: readinessScore.hrv, icon: HeartPulse, hint: "Hold consistent parasympathetic activation." },
  { id: "rhr", label: "Resting HR", value: readinessScore.rhr, icon: CircleCheck, hint: "Down 3 bpm vs baseline." },
  { id: "sleep", label: "Sleep Quality", value: readinessScore.sleep, icon: Moon, hint: "Short REM on last night, hydrate + magnesium." },
  { id: "stress", label: "Stress Load", value: readinessScore.stress, icon: Zap, hint: "Moderate stress trend—schedule a low-key evening." }
];

export function ReadinessCard() {
  return (
    <section className="glass-panel flex flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300/80">Recovery</p>
          <h3 className="text-2xl font-semibold text-white">Readiness Score</h3>
          <p className="text-sm text-slate-300">Dial training intent based on physiological response.</p>
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10 text-3xl font-semibold text-brand-200">
          {readinessScore.overall}
        </div>
      </header>
      <div className="grid gap-4 text-sm text-slate-300">
        {readinessBreakdown.map((item) => (
          <div key={item.id} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
            <item.icon className="mt-1 h-5 w-5 text-brand-200" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">{item.label}</p>
                <p className="text-brand-100">{item.value}</p>
              </div>
              <p className="mt-1 text-xs text-slate-400">{item.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
