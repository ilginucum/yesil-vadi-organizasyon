import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-primary-foreground mb-6 animate-fade-in">
          Doğa Orman Park
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
