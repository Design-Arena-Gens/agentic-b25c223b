import { CheckCircle2, CircleDashed, Timer } from "lucide-react";
import { upcomingWorkouts } from "@/lib/data";

export function WorkoutSchedule() {
  return (
    <section className="glass-panel flex flex-col gap-4 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Upcoming Sessions</h3>
          <p className="text-sm text-slate-400">Blend stimulus across disciplines for next week.</p>
        </div>
        <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:border-brand-400 hover:text-brand-200">
          Export Plan
        </button>
      </header>
      <ul className="flex flex-col gap-3 text-sm text-slate-300">
        {upcomingWorkouts.map((workout) => (
          <li
            key={workout.id}
            className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-4"
          >
            <div className="text-brand-300">
              {workout.completed ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              ) : (
                <CircleDashed className="h-5 w-5 text-slate-600" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-white">{workout.title}</p>
              <p className="text-xs text-slate-400">{workout.focus} · {workout.intensity} Intensity</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
              <Timer className="h-4 w-4" />
              {workout.duration} mins
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
