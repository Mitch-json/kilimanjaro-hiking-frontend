"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadPaystackScript } from "@/lib/paystack";
import { trackPixelEvent } from "./MetaPixel";

type Choice = "menu" | "deposit" | "info";
type Status = "idle" | "submitting" | "error";

export default function BookNowModal({
  routeName,
  onClose,
}: {
  routeName: string;
  onClose: () => void;
}) {
  const router = useRouter();
  const [choice, setChoice] = useState<Choice>("menu");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${backendUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, route: routeName }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.err || "Something went wrong");

      trackPixelEvent("Lead", { content_name: routeName });
      router.push("/thank-you?type=info");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleDepositSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const initRes = await fetch(`${backendUrl}/payments/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, route: routeName }),
      });
      const initData = await initRes.json();
      if (!initRes.ok) throw new Error(initData.err || "Could not start payment");

      trackPixelEvent("InitiateCheckout", {
        content_name: routeName,
        currency: "USD",
        value: 100,
      });

      await loadPaystackScript();
      const PaystackPop = window.PaystackPop!;
      const popup = new PaystackPop();

      popup.resumeTransaction(initData.accessCode, {
        onSuccess: async (transaction) => {
          try {
            const verifyRes = await fetch(`${backendUrl}/payments/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                reference: transaction.reference,
                recordId: initData.recordId,
              }),
            });
            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              trackPixelEvent("Purchase", {
                content_name: routeName,
                currency: "USD",
                value: 100,
              });
              router.push("/thank-you?type=deposit");
            } else {
              setStatus("error");
              setErrorMsg("Payment could not be confirmed. Please contact us.");
            }
          } catch {
            setStatus("error");
            setErrorMsg("Payment could not be confirmed. Please contact us.");
          }
        },
        onCancel: () => {
          setStatus("idle");
        },
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-basalt/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-paper p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="float-right text-basalt/40 hover:text-basalt"
        >
          ✕
        </button>

        {choice === "menu" && (
          <div>
            <h2 className="font-display text-2xl text-basalt">
              Book the {routeName}
            </h2>
            <p className="mt-2 text-sm text-basalt/60">
              Choose how you&rsquo;d like to move forward.
            </p>
            <div className="mt-6 space-y-3">
              <button
                onClick={() => setChoice("deposit")}
                className="w-full rounded-xl border border-basalt/15 p-4 text-left transition hover:border-sunrise"
              >
                <p className="font-display text-lg text-basalt">
                  Pay $100 deposit
                </p>
                <p className="mt-1 text-sm text-basalt/60">
                  Secure your spot now via card or M-Pesa
                </p>
              </button>
              <button
                onClick={() => setChoice("info")}
                className="w-full rounded-xl border border-basalt/15 p-4 text-left transition hover:border-glacier"
              >
                <p className="font-display text-lg text-basalt">
                  Request more information
                </p>
                <p className="mt-1 text-sm text-basalt/60">
                  We&rsquo;ll reach out with details before you commit
                </p>
              </button>
            </div>
          </div>
        )}

        {(choice === "deposit" || choice === "info") && (
          <form
            onSubmit={choice === "deposit" ? handleDepositSubmit : handleInfoSubmit}
          >
            <button
              type="button"
              onClick={() => setChoice("menu")}
              className="text-sm text-basalt/50 hover:text-basalt"
            >
              ← Back
            </button>
            <h2 className="mt-3 font-display text-2xl text-basalt">
              {choice === "deposit" ? "Secure your spot" : "Tell us about you"}
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <input
                required
                placeholder="First name"
                value={form.firstName}
                onChange={update("firstName")}
                className="col-span-1 rounded-lg border border-basalt/20 p-3 text-sm"
              />
              <input
                required
                placeholder="Last name"
                value={form.lastName}
                onChange={update("lastName")}
                className="col-span-1 rounded-lg border border-basalt/20 p-3 text-sm"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={update("email")}
                className="col-span-2 rounded-lg border border-basalt/20 p-3 text-sm"
              />
              <input
                required
                placeholder="WhatsApp number"
                value={form.phone}
                onChange={update("phone")}
                className="col-span-2 rounded-lg border border-basalt/20 p-3 text-sm"
              />
              <input
                placeholder="Country"
                value={form.country}
                onChange={update("country")}
                className="col-span-2 rounded-lg border border-basalt/20 p-3 text-sm"
              />
            </div>

            {status === "error" && (
              <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-full bg-sunrise py-3 text-sm font-medium text-basalt transition hover:brightness-95 disabled:opacity-50"
            >
              {status === "submitting"
                ? "Please wait…"
                : choice === "deposit"
                  ? "Pay $100 Deposit"
                  : "Send My Information"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
