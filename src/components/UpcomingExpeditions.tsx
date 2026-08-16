import BookNowButton from "@/components/BookNowButton";
import { upcomingExpeditions } from "@/data/expeditions";

export default function UpcomingExpeditions() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="font-data text-xs uppercase tracking-[0.2em] text-moorland">
          Fixed departures
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-basalt sm:text-5xl">
          Upcoming joining expeditions
        </h2>
        <p className="mt-4 max-w-xl text-basalt/70">
          Join a small group already forming for one of these dates —
          reserve your spot with a $100 deposit.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-basalt/10 bg-paper">
          {upcomingExpeditions.map((exp, i) => (
            <div
              key={`${exp.slug}-${exp.date}`}
              className={`flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between ${
                i !== upcomingExpeditions.length - 1
                  ? "border-b border-basalt/10"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-data text-sm text-glacier">
                  {exp.date}
                </span>
                <span className="font-display text-xl text-basalt">
                  {exp.route}
                </span>
                <span className="font-data text-sm text-basalt/60">
                  {exp.price}
                </span>
              </div>
              <BookNowButton
                routeName={`${exp.route} — ${exp.date} departure`}
                label="Reserve This Date"
                className="w-fit rounded-full border border-basalt/20 px-6 py-2.5 text-sm font-medium text-basalt transition hover:border-sunrise hover:bg-sunrise"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
