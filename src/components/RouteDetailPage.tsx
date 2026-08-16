import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookNowButton from "@/components/BookNowButton";
import { Route, generateWriteUp, routeImage } from "@/data/routes";
import { itineraries } from "@/data/itineraries";

export default function RouteDetailPage({
  route,
  imageIndex,
}: {
  route: Route;
  imageIndex: number;
}) {
  const itinerary = itineraries[route.slug] ?? [];
  const writeUp = generateWriteUp(route);

  return (
    <>
      <Navbar />
      <main className="bg-paper pb-24">
        {/* Hero image */}
        <div className="relative h-[55vh] min-h-[380px] w-full">
          <Image
            src={routeImage(imageIndex)}
            alt={`${route.name} route`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-basalt/80 via-basalt/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
                Mt {route.mountain} · {route.difficulty}
              </p>
              <h1 className="mt-3 font-display text-5xl leading-tight text-mist sm:text-6xl">
                {route.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-basalt/80">
            {writeUp}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <BookNowButton routeName={route.name} />
            <dl className="flex gap-8 font-data text-xs">
              <div>
                <dt className="text-basalt/50">Duration</dt>
                <dd className="mt-1 text-basalt">{route.days} days</dd>
              </div>
              <div>
                <dt className="text-basalt/50">Difficulty</dt>
                <dd className="mt-1 text-basalt">{route.difficulty}</dd>
              </div>
              <div>
                <dt className="text-basalt/50">Deposit</dt>
                <dd className="mt-1 text-basalt">$100 to secure a spot</dd>
              </div>
            </dl>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-3xl text-basalt">
              Day-by-day itinerary
            </h2>
            <p className="mt-2 text-sm text-basalt/50">
              Based on standard camp altitudes and distances for this route — actual pacing may vary slightly by group and season.
            </p>
            <ol className="mt-8 space-y-6">
              {itinerary.map((d) => (
                <li
                  key={d.day}
                  className="flex gap-5 border-b border-basalt/10 pb-6"
                >
                  <span className="font-data text-sm text-glacier">
                    {String(d.day).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-lg text-basalt">
                      {d.title}
                    </p>
                    <p className="mt-1 text-sm text-basalt/70">
                      {d.description}
                    </p>
                    {d.altitude !== "—" && (
                      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-data text-xs text-basalt/50">
                        <div>
                          <dt className="inline">Altitude: </dt>
                          <dd className="inline text-basalt/70">{d.altitude}</dd>
                        </div>
                        <div>
                          <dt className="inline">Distance: </dt>
                          <dd className="inline text-basalt/70">{d.distance}</dd>
                        </div>
                        <div>
                          <dt className="inline">Time: </dt>
                          <dd className="inline text-basalt/70">{d.duration}</dd>
                        </div>
                      </dl>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 rounded-2xl bg-basalt p-10 text-center text-mist">
            <h2 className="font-display text-2xl">
              Ready to climb the {route.name}?
            </h2>
            <p className="mt-2 text-mist/70">
              Secure your spot with a deposit, or ask us anything first.
            </p>
            <div className="mt-6 flex justify-center">
              <BookNowButton routeName={route.name} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
