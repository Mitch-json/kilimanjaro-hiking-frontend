import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RouteComparison from "@/components/RouteComparison";

export const metadata = {
  title: "Kilimanjaro & Mt Kenya Routes | Forever Athletic",
  description:
    "Compare all Mt Kilimanjaro and Mt Kenya routes by duration, difficulty, and highlights before you book.",
};

export default function RoutesIndexPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="All routes"
        title="Compare every route before you book."
      />
      <main className="bg-paper">
        <RouteComparison />
      </main>
      <Footer />
    </>
  );
}
