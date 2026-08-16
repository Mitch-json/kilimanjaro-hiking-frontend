import Link from "next/link";
import { kilimanjaroRoutes, kenyaRoutes, Route } from "@/data/routes";

function RouteCard({ route }: { route: Route }) {
  return (
    <Link
      href={`/routes/selected/${
        route.mountain === "Kenya" ? "mt-kenya/" : ""
      }${route.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-basalt/10 bg-paper p-6 transition hover:border-glacier hover:shadow-md"
    >
      <div>
        <p className="font-data text-xs uppercase tracking-widest text-glacier">
          {route.mountain}
        </p>
        <h3 className="mt-2 font-display text-2xl text-basalt">
          {route.name}
        </h3>
        <p className="mt-3 text-sm text-basalt/70">{route.highlight}</p>
      </div>
      <dl className="mt-6 flex gap-6 border-t border-basalt/10 pt-4 font-data text-xs">
        <div>
          <dt className="text-basalt/50">Duration</dt>
          <dd className="mt-1 text-basalt">{route.days} days</dd>
        </div>
        <div>
          <dt className="text-basalt/50">Difficulty</dt>
          <dd className="mt-1 text-basalt">{route.difficulty}</dd>
        </div>
      </dl>
    </Link>
  );
}

export default function RouteComparison() {
  return (
    <section id="routes" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-data text-xs uppercase tracking-[0.2em] text-glacier">
          Compare before you commit
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-basalt sm:text-5xl">
          Nine routes, two mountains.
        </h2>

        <h3 className="mt-14 font-display text-2xl text-basalt">
          Mt Kilimanjaro
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kilimanjaroRoutes.map((r) => (
            <RouteCard key={r.slug} route={r} />
          ))}
        </div>

        <h3 className="mt-16 font-display text-2xl text-basalt">Mt Kenya</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kenyaRoutes.map((r) => (
            <RouteCard key={r.slug} route={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
