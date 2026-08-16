import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-basalt">
      {/* Background image */}
      <Image
        src="/images/hero/1.jpg"
        alt="Climbers on Mt Kilimanjaro"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/50 to-basalt/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
          5,895m · Uhuru Peak · Africa&rsquo;s Roof
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-mist sm:text-6xl lg:text-7xl">
          Every step from rainforest to glacier, mapped before you book.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mist/80">
          We guide small groups up Mt Kilimanjaro and Mt Kenya. Before you
          choose a route, see exactly what each one asks of you — the
          terrain, the altitude, the days.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="#routes"
            className="rounded-full bg-sunrise px-7 py-3 text-sm font-medium text-basalt transition hover:brightness-95"
          >
            Explore Routes
          </Link>
          <Link
            href="#reflections"
            className="text-sm text-mist/80 underline decoration-mist/30 underline-offset-4 transition hover:text-mist"
          >
            Why people really climb this mountain ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
