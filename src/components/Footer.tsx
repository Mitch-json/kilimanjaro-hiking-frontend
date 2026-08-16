import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-basalt py-14 text-mist/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-display text-xl text-mist">Forever Athletic</p>
            <p className="mt-2 max-w-xs text-sm">
              Guided Kilimanjaro and Mt Kenya expeditions, based in Nairobi.
            </p>
          </div>
          <div className="flex gap-16 font-data text-xs uppercase tracking-widest">
            <div className="flex flex-col gap-3">
              <Link href="/routes" className="hover:text-sunrise">
                Routes
              </Link>
              <Link href="/our-crew" className="hover:text-sunrise">
                Crew
              </Link>
              <Link href="/what-to-expect" className="hover:text-sunrise">
                What to Expect
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/terms-and-conditions" className="hover:text-sunrise">
                Terms
              </Link>
              <Link href="/tipping" className="hover:text-sunrise">
                Tipping
              </Link>
              <Link href="/contact-us" className="hover:text-sunrise">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-mist/40">
          © {new Date().getFullYear()} Forever Athletic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
