import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BookNowButton from "@/components/BookNowButton";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g294207-d32992765-Reviews-Forever_Athletic-Nairobi.html";

const sections = [
  {
    heading: "The pace is deliberately slow",
    body: "Guides keep the group moving at \"pole pole\" — Swahili for slowly, slowly — a pace climbers consistently point to as the reason they made it to the top. On smaller teams especially, guides stay close the whole way, encouraging rather than pushing, which past climbers have contrasted with larger groups where a handful of guides are stretched thin across 15+ hikers.",
  },
  {
    heading: "Your crew is bigger than you'd expect",
    body: "For a two-person climb, it's normal to have a team of guides, a chef, and a dozen or more porters supporting you — a ratio that shows up again and again in what past climbers say made the biggest difference to their experience.",
  },
  {
    heading: "Altitude affects almost everyone, and it's taken seriously",
    body: "Adjusting to thinner air is genuinely difficult, and it's common for several people in a group to feel some symptoms along the way. Guides check in on everyone's health closely throughout the trip and will make the call to slow down or turn back if it's the safer choice — even if it's not what a climber wants to hear in the moment.",
  },
  {
    heading: "Camp life is simple, and that's part of it",
    body: "Expect tents, not lodges. Nights get cold, especially higher up, and past climbers describe waking up to skies full of stars with zero light pollution — one of the unexpected highlights people mention most. There's no cell signal once you're on the mountain, and most people say that's a feature, not a drawback.",
  },
  {
    heading: "The food is better than people expect",
    body: "Meals are cooked fresh on the mountain, and reviews consistently mention being pleasantly surprised — hearty, warm food that keeps energy up, not the freeze-dried rations some climbers brace for.",
  },
  {
    heading: "Toilets are basic but functional",
    body: "Camp toilets are a simple long-drop setup, usually a covered tent with a seat over a dug hole, and toilet paper is provided. It's not glamorous, but past climbers describe it as entirely manageable once you know what to expect going in.",
  },
  {
    heading: "For a lot of people, it becomes more than a physical trip",
    body: "Past climbers describe the days of silence, effort, and distance from ordinary life as unexpectedly emotional — a few have said the trip gave them clarity on things happening in their lives outside the mountain entirely. Nobody predicts that going in.",
  },
];

export default function WhatToExpectPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Straight from past climbers"
        title="What it's actually like"
        subtitle="Not marketing copy — this page is built from what real climbers have told us and written in their own reviews."
      />
      <main className="bg-paper pb-24">
        <div className="mx-auto max-w-3xl px-6 pt-12 lg:px-10">
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl text-basalt">
                  {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-basalt/80">
                  {s.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-basalt/10 bg-mist p-8 text-center">
            <p className="text-basalt/80">
              Every word above is grounded in real reviews from people who
              climbed with us — we&rsquo;d rather you read their unedited words
              than take ours.
            </p>
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full border border-basalt/20 px-6 py-2.5 text-sm font-medium text-basalt transition hover:border-glacier hover:bg-glacier hover:text-mist"
            >
              Read all 9 reviews on TripAdvisor ↗
            </a>
          </div>

          <div className="mt-14 text-center">
            <h2 className="font-display text-2xl text-basalt">
              Ready to see it for yourself?
            </h2>
            <div className="mt-5 flex justify-center">
              <BookNowButton routeName="Kilimanjaro or Mt Kenya Expedition" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
