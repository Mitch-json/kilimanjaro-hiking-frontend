"use client";

import { useState } from "react";
import BookNowModal from "@/components/BookNowModal";

export default function BookNowButton({
  routeName,
  label = "Book Now",
  className,
}: {
  routeName: string;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          className ??
          "rounded-full bg-sunrise px-8 py-3 text-sm font-medium text-basalt transition hover:brightness-95"
        }
      >
        {label}
      </button>
      {open && (
        <BookNowModal routeName={routeName} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
