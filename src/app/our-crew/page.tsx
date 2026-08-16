import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BookNowButton from "@/components/BookNowButton";

const crewPhotos = Array.from({ length: 5 }, (_, i) => `/images/crew/${i + 1}.jpg`);
const generalPhotos = Array.from({ length: 6 }, (_, i) => `/images/general/${i + 1}.jpg`);
const gallery = [...crewPhotos, ...generalPhotos];

export default function OurCrewPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Who gets you there"
        title="Our crew carries the mountain for you."
        subtitle="Every summit we guide is made possible by guides, cooks, and porters who do the hardest physical work on the mountain — often carrying loads far beyond their own bodyweight, at altitude, so that climbers can focus on reaching the top."
      />
      <main className="bg-paper pb-24">
        {/* Living wage commitment */}
        <div className="mx-auto mt-16 max-w-4xl px-6 lg:px-10">
          <div className="rounded-2xl bg-basalt p-10 text-mist">
            <p className="font-data text-xs uppercase tracking-[0.2em] text-sunrise">
              Our commitment
            </p>
            <h2 className="mt-4 font-display text-3xl leading-snug sm:text-4xl">
              We pay every member of our crew a living wage.
            </h2>
            <div className="mt-6 space-y-4 text-mist/80">
              <p>
                Porter exploitation is one of the mountain&rsquo;s
                longest-standing problems — operators who cut costs by
                underpaying the people carrying the heaviest loads. We take
                the opposite approach.
              </p>
              <p>
                Every guide, cook, and porter on our team is paid fairly for
                the work they do, on time, every trip — not the legal
                minimum, but a wage that reflects what the job actually
                demands. It costs more to run trips this way. We think
                that&rsquo;s the only honest way to run them.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mx-auto mt-20 max-w-6xl px-6 lg:px-10">
          <p className="font-data text-xs uppercase tracking-[0.2em] text-glacier">
            On the mountain
          </p>
          <h2 className="mt-3 font-display text-3xl text-basalt sm:text-4xl">
            The team, at work.
          </h2>
          <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-xl bg-basalt/5"
              >
                <Image
                  src={src}
                  alt="Forever Athletic crew on Mt Kilimanjaro"
                  width={500}
                  height={650}
                  className="w-full object-cover"
                  sizes="(min-width: 640px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl text-basalt">
            Climb with a team that treats its own people well.
          </h2>
          <div className="mt-6 flex justify-center">
            <BookNowButton routeName="Kilimanjaro or Mt Kenya Expedition" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
