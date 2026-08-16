import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoClimbs from "@/components/WhoClimbs";
import RouteComparison from "@/components/RouteComparison";
import UpcomingExpeditions from "@/components/UpcomingExpeditions";
import Testimonials from "@/components/Testimonials";
import FaqAndCta from "@/components/FaqAndCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoClimbs />
      <RouteComparison />
      <UpcomingExpeditions />
      <Testimonials />
      <FaqAndCta />
      <Footer />
    </main>
  );
}
