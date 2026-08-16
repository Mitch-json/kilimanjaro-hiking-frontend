"use client";

import { useState } from "react";
import { altitudeZones } from "@/data/routes";

// Mountain silhouette divided into 5 bands, base at y=380, apex at y=20.
// Each band's left/right x-values narrow as elevation increases.
const bands = [
  { top: 380, bottom: 460, xTop: [40, 560], xBottom: [-40, 640] }, // cultivation (below "ground")
  { top: 300, bottom: 380, xTop: [90, 510], xBottom: [40, 560] }, // rainforest
  { top: 200, bottom: 300, xTop: [155, 445], xBottom: [90, 510] }, // moorland
  { top: 100, bottom: 200, xTop: [220, 380], xBottom: [155, 445] }, // alpine desert
  { top: 20, bottom: 100, xTop: [275, 325], xBottom: [220, 380] }, // arctic summit
];

export default function AltitudeZones() {
  const [active, setActive] = useState(4);
  const zone = altitudeZones[active];

  return (
    <section id="zones" className="bg-basalt py-24 text-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
          The mountain, in cross-section
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
          Five climate zones between the gate and the summit.
        </h2>
        <p className="mt-4 max-w-xl text-mist/70">
          Every route crosses the same bands of altitude — what changes is
          how long you spend in each. Select a zone to see what it&rsquo;s
          actually like.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <svg
            viewBox="0 0 600 460"
            className="mx-auto w-full max-w-md"
            role="img"
            aria-label="Cross section of Mount Kilimanjaro showing five altitude zones"
          >
            {bands.map((b, i) => {
              const d = `M ${b.xTop[0]} ${b.top} L ${b.xTop[1]} ${b.top} L ${b.xBottom[1]} ${b.bottom} L ${b.xBottom[0]} ${b.bottom} Z`;
              const isActive = active === i;
              return (
                <path
                  key={i}
                  d={d}
                  fill={altitudeZones[i].color}
                  fillOpacity={isActive ? 1 : 0.35}
                  stroke={isActive ? "var(--color-sunrise)" : "transparent"}
                  strokeWidth={2}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActive(i)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(i);
                  }}
                />
              );
            })}
          </svg>

          <div>
            <ul className="space-y-1">
              {altitudeZones.map((z, i) => (
                <li key={z.name}>
                  <button
                    onClick={() => setActive(i)}
                    className={`flex w-full items-baseline justify-between border-b py-3 text-left transition ${
                      active === i
                        ? "border-sunrise text-mist"
                        : "border-mist/10 text-mist/50 hover:text-mist/80"
                    }`}
                  >
                    <span className="font-display text-xl">{z.name}</span>
                    <span className="font-data text-xs">{z.elevation}</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-mist/80">{zone.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
