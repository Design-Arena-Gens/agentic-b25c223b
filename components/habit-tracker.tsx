import { Flame } from "lucide-react";
import { weeklyHabits } from "@/lib/data";

export function HabitTracker() {
  return (
    <section className="glass-panel flex flex-col gap-4 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Micro Habits</h3>
          <p className="text-sm text-slate-400">Consistency stats across supporting routines.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
          <Flame className="h-3.5 w-3.5" />
          4-day overall streak
        </div>
      </header>
      <div className="grid grid-auto-fit gap-3">
        {weeklyHabits.map((habit) => {
          const progress = Math.min(100, Math.round((habit.streak / habit.target) * 100));
          return (
            <div key={habit.id} className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="font-medium text-white">{habit.name}</span>
                <span>
                  {habit.streak}/{habit.target}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-slate-400">
                {progress >= 100 ? "Target smashed. Extend to new challenge." : "Keep going for weekly milestone."}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
