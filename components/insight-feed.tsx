import { BrainCircuit, Goal, MessageSquareDot } from "lucide-react";

const insights = [
  {
    id: "coach-1",
    title: "Coach Strategy Note",
    icon: BrainCircuit,
    detail: "Back off Sunday long-run pace by 10s/km to absorb this week&apos;s load."
  },
  {
    id: "goal-1",
    title: "Goal Alignment",
    icon: Goal,
    detail: "7 weeks out from 10k PR attempt. Focus on lactate threshold improvements."
  },
  {
    id: "community-1",
    title: "Community Highlight",
    icon: MessageSquareDot,
    detail: "Join Wednesday track session—three peers at similar pace confirmed."
  }
];

export function InsightFeed() {
  return (
    <section className="glass-panel flex flex-col gap-4 p-6">
      <header>
        <h3 className="text-lg font-semibold text-white">Actionable Insights</h3>
        <p className="text-sm text-slate-400">Synthesized signals from coach, wearables, and squad.</p>
      </header>
      <ul className="flex flex-col gap-3 text-sm text-slate-300">
        {insights.map((insight) => (
          <li key={insight.id} className="flex gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
            <insight.icon className="mt-1 h-5 w-5 text-brand-200" />
            <div>
              <p className="font-medium text-white">{insight.title}</p>
              <p
                className="text-xs text-slate-400"
                dangerouslySetInnerHTML={{ __html: insight.detail }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
