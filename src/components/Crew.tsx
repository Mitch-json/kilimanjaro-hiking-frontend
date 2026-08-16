import Image from "next/image";
import Link from "next/link";
import { crew } from "@/data/crew";

export default function Crew() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-data text-xs uppercase tracking-[0.2em] text-rainforest">
              Who gets you there
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-basalt sm:text-5xl">
              The team on the mountain with you.
            </h2>
          </div>
          <Link
            href="/our-crew"
            className="text-sm text-basalt underline decoration-basalt/30 underline-offset-4 hover:text-glacier"
          >
            Meet the full crew →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {crew.map((member) => (
            <div key={member.image} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-basalt/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                />
              </div>
              <p className="mt-3 font-display text-lg text-basalt">
                {member.name}
              </p>
              <p className="font-data text-xs uppercase tracking-widest text-basalt/50">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
