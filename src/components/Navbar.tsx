"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/routes", label: "Routes" },
  { href: "/our-crew", label: "Crew" },
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 z-30 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-mist"
        >
          Forever Athletic
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-mist/90 transition hover:text-sunrise"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/routes"
          className="hidden rounded-full border border-mist/40 px-5 py-2 text-sm text-mist transition hover:border-sunrise hover:text-sunrise md:inline-block"
        >
          Book a trip
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="text-mist md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="bg-basalt px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-mist/90 hover:text-sunrise"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/routes"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full border border-mist/40 px-5 py-2 text-sm text-mist"
              >
                Book a trip
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
