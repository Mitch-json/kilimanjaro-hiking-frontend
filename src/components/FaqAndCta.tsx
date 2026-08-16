import Link from "next/link";
import BookNowButton from "./BookNowButton";

const faqs = [
  {
    q: "Do I need climbing experience?",
    a: "No technical climbing skill is required on any of our routes — this is trekking, not mountaineering. Fitness and mental readiness for altitude matter more than experience.",
  },
  {
    q: "What's the success rate?",
    a: "It depends heavily on route length and pacing. Longer routes like Lemosho and the Northern Circuit allow more time to acclimatize, which meaningfully improves your odds of reaching the summit.",
  },
  {
    q: "How do I pay?",
    a: "We accept card and M-Pesa payments securely online once your route and dates are confirmed.",
  },
];

export default function FaqAndCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-data text-xs uppercase tracking-[0.2em] text-glacier">
              Before you ask
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-basalt">
              Common questions
            </h2>
            <div className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-basalt/10 pb-6">
                  <h3 className="font-display text-lg text-basalt">{f.q}</h3>
                  <p className="mt-2 text-sm text-basalt/70">{f.a}</p>
                </div>
              ))}
            </div>
            <Link
              href="/frequently-asked-questions"
              className="mt-6 inline-block text-sm text-basalt underline decoration-basalt/30 underline-offset-4 hover:text-glacier"
            >
              See all questions →
            </Link>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-basalt p-10 text-mist">
            <h2 className="font-display text-3xl leading-tight">
              Found your route? Let&rsquo;s set a date.
            </h2>
            <p className="mt-4 text-mist/70">
              Tell us which route and when — we&rsquo;ll confirm availability
              and walk you through the rest.
            </p>
            <BookNowButton routeName="Kilimanjaro or Mt Kenya Expedition" />
          </div>
        </div>
      </div>
    </section>
  );
}
