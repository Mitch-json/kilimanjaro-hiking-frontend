import Image from "next/image";
import { portraits, climberQuotes } from "@/data/reflections";

export default function WhoClimbs() {
  return (
    <section id="reflections" className="bg-basalt py-28 text-mist">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Opening statement */}
        <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
          What happens up there
        </p>
        <h2 className="mt-5 font-display text-4xl leading-[1.15] italic sm:text-5xl">
          The mountain does not give you answers. It removes everything that
          was preventing you from hearing them.
        </h2>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-mist/80">
          <p>
            We have guided hundreds of people up this mountain, and we have
            noticed something no travel brochure talks about. People arrive
            carrying a question — sometimes for months, sometimes for years.
            They leave with an answer.
          </p>
          <p>
            Not because the mountain is magical. Because eight days of
            physical effort, altitude, silence, and distance from everything
            ordinary strips the noise away — other people&rsquo;s
            expectations, your own perfectionism, the inbox, the
            performance.
          </p>
          <p className="text-mist">
            When the noise stops, what remains is almost always obvious.
          </p>
        </div>

        {/* Photo break */}
        <div className="relative mt-16 aspect-video w-[calc(100%+3rem)] -mx-6 overflow-hidden sm:w-full sm:mx-0 sm:rounded-2xl">
          <Image
            src="/images/general/1.jpg"
            alt="Climbers on the trail"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 896px, 100vw"
          />
        </div>

        {/* The science */}
        <div className="mt-16 rounded-2xl border border-mist/10 bg-mist/5 p-8">
          <p className="font-data text-xs uppercase tracking-[0.2em] text-glacier">
            The science
          </p>
          <p className="mt-4 text-mist/80">
            Researchers call it <em>awe-induced DMN suppression</em> — when
            we experience something vast and overwhelming, activity in the
            brain&rsquo;s Default Mode Network, the system tied to rumination
            and self-doubt, measurably changes. Mountains are one of the most
            reliable triggers of awe on record. A 22-day diary study of 269
            adults found that daily awe experiences were linked to lower
            stress and greater wellbeing over time. Separate research on
            extended time in nature has linked it to changes in the
            prefrontal cortex — the region governing planning and judgment.
            Kilimanjaro does not hand you clarity. It creates the conditions
            where clarity gets easier to hear.
          </p>
        </div>

        {/* Who this is for */}
        <div className="mt-24">
          <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
            Who this is for
          </p>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl">
            You will recognise yourself in one of these.
          </h3>

          <div className="mt-10 space-y-8">
            {portraits.map((p, i) => (
              <div
                key={p.label}
                className="border-t border-mist/10 pt-8 first:border-t-0 first:pt-0"
              >
                <span className="font-data text-xs text-mist/40">
                  Portrait {["I", "II", "III"][i]}
                </span>
                <p className="mt-3 font-display text-2xl italic leading-snug text-mist sm:text-3xl">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="mt-4 max-w-2xl text-mist/70">{p.body}</p>
                <p className="mt-3 font-data text-xs uppercase tracking-widest text-glacier">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* In their own words */}
        <div className="mt-24">
          <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
            In their own words
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {climberQuotes.map((q) => (
              <blockquote
                key={q.source}
                className="border-l-2 border-sunrise/60 pl-5"
              >
                <p className="text-mist/80">&ldquo;{q.text}&rdquo;</p>
                <cite className="mt-3 block font-data text-xs not-italic uppercase tracking-widest text-mist/40">
                  {q.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
