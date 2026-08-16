import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Tipping Guide | Forever Athletic",
  description: "How much to tip your Kilimanjaro or Mt Kenya guide, cook, and porter crew.",
};

const guide = [
  { role: "Lead Guide", amount: "$20–25 per day (from the group, shared or per-guide)" },
  { role: "Assistant Guide", amount: "$15–20 per day" },
  { role: "Cook", amount: "$12–15 per day" },
  { role: "Porter", amount: "$8–10 per day, per porter" },
];

export default function TippingPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="A practical guide"
        title="Tipping your crew"
        subtitle="Tipping is not included in your trip price and is entirely at your discretion — but it makes up a meaningful part of your crew's income industry-wide, on top of the fair daily wage we already pay them."
      />
      <main className="bg-paper pb-24">
        <div className="mx-auto max-w-3xl px-6 pt-12 lg:px-10">
          <p className="text-sm text-basalt/50">
            These are general industry guidelines, not fixed rules — tip
            what feels right for the service and size of your group.
          </p>

          <div className="mt-8 divide-y divide-basalt/10 overflow-hidden rounded-xl border border-basalt/10">
            {guide.map((g) => (
              <div
                key={g.role}
                className="flex items-center justify-between p-5"
              >
                <span className="font-display text-lg text-basalt">
                  {g.role}
                </span>
                <span className="font-data text-sm text-basalt/60">
                  {g.amount}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-basalt/80">
            <h2 className="font-display text-2xl text-basalt">
              Practical tips
            </h2>
            <p>
              Bring US dollars in small denominations (2025 or newer bills,
              in good condition — older or damaged notes are sometimes
              refused). Local currency works too if you&rsquo;d rather withdraw
              cash on arrival.
            </p>
            <p>
              Most groups pool tips together on the last morning and present
              them to the full crew at once, often with a short ceremony at
              the gate. Your guide can help coordinate this on the trip.
            </p>
            <p>
              These amounts are typically per client, per day, then split
              across however many crew members were assigned to your trip —
              your guide can tell you the exact crew size in advance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
