import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Pain />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
