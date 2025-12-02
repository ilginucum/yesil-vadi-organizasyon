import Hero from "@/components/Hero";
import Pizza from "@/components/Pizza";
import Features from "@/components/Features";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pizza />
      <Features />
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;