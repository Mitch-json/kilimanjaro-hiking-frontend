import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Booking Terms & Conditions | Forever Athletic",
  description: "Booking terms, deposit, cancellation, and liability policy for Forever Athletic Kilimanjaro and Mt Kenya expeditions.",
};

const sections = [
  {
    heading: "Deposit & booking",
    body: "A $100 deposit secures your place on a route or fixed departure date. The remaining balance is due no later than 30 days before your trip start date, unless otherwise agreed in writing.",
  },
  {
    heading: "Cancellation policy",
    body: "Deposits are non-refundable. Cancellations made more than 30 days before departure may be eligible for a partial refund of the balance paid, less any costs already incurred (park fees, permits, accommodation). Cancellations within 30 days of departure are non-refundable.",
  },
  {
    heading: "Health & fitness requirements",
    body: "Climbers are responsible for confirming their own fitness to undertake a high-altitude trek and should consult a doctor before booking, particularly if they have pre-existing heart, lung, or other relevant medical conditions.",
  },
  {
    heading: "Travel insurance",
    body: "Comprehensive travel insurance, including emergency evacuation coverage at altitude, is required for all climbers and is the client's own responsibility to arrange.",
  },
  {
    heading: "Itinerary changes",
    body: "Weather, park authority requirements, or safety considerations may require changes to a published itinerary. Forever Athletic will make reasonable efforts to notify clients of any changes as early as possible.",
  },
  {
    heading: "Park fees & permits",
    body: "Kilimanjaro and Mt Kenya National Park fees are included in your trip price unless stated otherwise, and are paid directly to the relevant park authority on your behalf.",
  },
  {
    heading: "Limitation of liability",
    body: "Mountain trekking carries inherent risk, including risks related to altitude, weather, and terrain. Forever Athletic and its guides take reasonable care to manage these risks but cannot guarantee a successful summit or accident-free trip.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Please read before booking"
        title="Booking Terms & Conditions"
      />
      <main className="bg-paper pb-24">
        <div className="mx-auto max-w-3xl px-6 pt-12 lg:px-10">
          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl text-basalt">
                  {s.heading}
                </h2>
                <p className="mt-2 leading-relaxed text-basalt/70">
                  {s.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
