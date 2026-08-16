"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackPixelEvent } from "@/components/MetaPixel";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // "deposit" | "info"

  useEffect(() => {
    // Extra safety-net event fire in case the modal's redirect happened
    // before the Purchase/Lead event had a chance to register.
    if (type === "deposit") {
      trackPixelEvent("Purchase", { value: 100, currency: "USD" });
    } else if (type === "info") {
      trackPixelEvent("Lead");
    }
  }, [type]);

  return (
    <>
      <div className="bg-basalt pt-32 pb-16" />
      <main className="flex min-h-[50vh] flex-col items-center justify-center bg-paper px-6 pb-24 pt-16 text-center">
        <p className="font-data text-xs uppercase tracking-[0.2em] text-glacier">
          {type === "deposit" ? "Deposit received" : "Request received"}
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight text-basalt sm:text-5xl">
          {type === "deposit"
            ? "You're on the mountain — officially."
            : "We'll be in touch shortly."}
        </h1>
        <p className="mt-5 max-w-md text-basalt/70">
          {type === "deposit"
            ? "Your $100 deposit has secured your spot. A confirmation is on its way to your email, and our team will reach out with next steps."
            : "One of our team will reach out on WhatsApp or email with everything you need to decide."}
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-sunrise px-7 py-3 text-sm font-medium text-basalt transition hover:brightness-95"
        >
          Back to home
        </Link>
      </main>
    </>
  );
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <ThankYouContent />
      </Suspense>
      <Footer />
    </>
  );
}
