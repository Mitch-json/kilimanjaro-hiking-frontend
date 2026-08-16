declare global {
  interface Window {
    PaystackPop?: new () => {
      resumeTransaction: (
        accessCode: string,
        callbacks: {
          onSuccess: (transaction: { reference: string }) => void;
          onCancel: () => void;
        }
      ) => void;
    };
  }
}

let loadPromise: Promise<void> | null = null;

/**
 * Loads Paystack's Inline JS v2 script once and resolves when window.PaystackPop
 * is available. Safe to call multiple times — subsequent calls reuse the same load.
 */
export function loadPaystackScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Paystack can only load in the browser"));
  }
  if (window.PaystackPop) {
    return Promise.resolve();
  }
  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v2/inline.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Paystack script"));
    document.body.appendChild(script);
  });

  return loadPromise;
}
