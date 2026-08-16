import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BookNowButton from "@/components/BookNowButton";

export const metadata = {
  title: "Contact Us | Forever Athletic",
  description: "Get in touch about climbing Mt Kilimanjaro or Mt Kenya — WhatsApp, email, or request a callback.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Talk to a real guide"
        title="Have a question before you book?"
        subtitle="Most people reach us on WhatsApp — usually the fastest way to get a real answer, not a bot."
      />
      <main className="bg-paper pb-24">
        <div className="mx-auto max-w-3xl px-6 pt-12 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="https://wa.me/254792789618"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-basalt/15 p-6 transition hover:border-[#25D366]"
            >
              <p className="font-display text-xl text-basalt">WhatsApp</p>
              <p className="mt-1 text-sm text-basalt/60">+254 792 789 618</p>
            </a>
            <a
              href="mailto:info@kilimanjaroawaits.com"
              className="rounded-2xl border border-basalt/15 p-6 transition hover:border-glacier"
            >
              <p className="font-display text-xl text-basalt">Email</p>
              <p className="mt-1 text-sm text-basalt/60">
                info@kilimanjaroawaits.com
              </p>
            </a>
          </div>

          <div className="mt-10 rounded-2xl bg-basalt p-8 text-center text-mist">
            <h2 className="font-display text-2xl">
              Or just tell us what you&rsquo;re thinking
            </h2>
            <p className="mt-2 text-mist/70">
              No commitment — we&rsquo;ll help you figure out the right route and
              dates.
            </p>
            <div className="mt-6 flex justify-center">
              <BookNowButton
                routeName="General Inquiry"
                label="Request Information"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
