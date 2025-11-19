import { Header } from "@/components/header";
import { MetricCard } from "@/components/metric-card";
import { TrainingChart } from "@/components/training-chart";
import { ZoneDistribution } from "@/components/zone-distribution";
import { HabitTracker } from "@/components/habit-tracker";
import { WorkoutSchedule } from "@/components/workout-schedule";
import { ReadinessCard } from "@/components/readiness-card";
import { NutritionBreakdown } from "@/components/nutrition-breakdown";
import { InsightFeed } from "@/components/insight-feed";
import { metrics } from "@/lib/data";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 pb-16 pt-12">
      <Header />
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <TrainingChart />
        <ReadinessCard />
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <NutritionBreakdown />
        <ZoneDistribution />
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <WorkoutSchedule />
        <HabitTracker />
        <InsightFeed />
      </section>
    </main>
  );
}
