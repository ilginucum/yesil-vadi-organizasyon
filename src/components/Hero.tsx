import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpeg"; // Kendi görselini ekle

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Doğa Orman Park"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ 
            filter: 'brightness(1.1) contrast(1.05)'
          }}
        />
      </div>

      {/* Overlay - Daha az yoğun */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-4 sm:mb-6 animate-fade-in leading-tight drop-shadow-lg">
          Doğa Orman Park
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-2 drop-shadow-md">
          Doğanın kalbinde unutulmaz organizasyonlar ve etkinlikler için mükemmel mekan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="group"
          >
            Rezervasyon Yap
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById("facilities")?.scrollIntoView({ behavior: "smooth" })}
          >
            Tesislerimizi Keşfet
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;