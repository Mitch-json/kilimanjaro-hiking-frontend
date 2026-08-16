import { testimonials } from "@/data/testimonials";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g294207-d32992765-Reviews-Forever_Athletic-Nairobi.html";

export default function Testimonials() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-data text-xs uppercase tracking-[0.2em] text-moorland">
              From the mountain, in their words
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-basalt sm:text-5xl">
              Nine reviews. Five stars, every time.
            </h2>
          </div>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-basalt/20 px-5 py-2.5 text-sm font-medium text-basalt transition hover:border-glacier hover:bg-glacier hover:text-mist"
          >
            Read all reviews on TripAdvisor ↗
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-basalt/10 bg-paper p-7"
            >
              <blockquote className="font-display text-lg leading-snug text-basalt italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-data text-xs uppercase tracking-widest text-basalt/50">
                {t.name} — {t.trip}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-basalt underline decoration-basalt/30 underline-offset-4 hover:text-glacier"
          >
            See all 9 reviews on TripAdvisor, unedited ↗
          </a>
        </div>
      </div>
    </section>
  );
}
