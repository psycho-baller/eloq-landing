import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Benefits from "@/components/Benefits";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import Consumers from "@/components/Consumers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Pain />
        <Benefits />
        <WhoItsFor />
        <HowItWorks />
        <Consumers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
