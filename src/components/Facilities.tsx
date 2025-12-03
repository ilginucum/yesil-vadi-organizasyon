import { UtensilsCrossed, Palette, Users2, TreePine, ExternalLink } from "lucide-react";
import restaurantImg from "@/assets/restaurant.png";
import workshopImg from "@/assets/ww3.jpg";
import trailImg from "@/assets/parkur.jpg";
import areaImg from "@/assets/alanlar.jpg";

const facilities = [
  {
    icon: UtensilsCrossed,
    title: "Restoran",
    description: "Doğa manzaralı modern restoran alanımızda lezzetli yemekler ve içecekler eşliğinde konuklarınızı ağırlayın.",
    image: restaurantImg,
    link: null
  },
  {
    icon: Palette,
    title: "Workshop & Atölye",
    description: "Yaratıcı çalışmalar, eğitimler ve atölye çalışmaları için uygun mekanlarımız.",
    image: workshopImg,
    link: "https://dogaormanakademisi.com"
  },
  {
    icon: TreePine,
    title: "Yürüyüş Parkuru",
    description: "Orman içinde uzanan doğal yürüyüş parkurlarıyla katılımcılarınıza aktivite imkanı sunun.",
    image: trailImg,
    link: null
  },
  {
    icon: Users2,
    title: "Organizasyon Alanları",
    description: "Düğünlerden kurumsal etkinliklere, toplantılardan festivallere her türlü organizasyon için uygun alanlar.",
    image: areaImg,
    link: null
  }
];

const Facilities = () => {
  const handleCardClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground mb-3 sm:mb-4 px-2">
            Tesislerimiz
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            İhtiyacınıza göre özelleştirilebilen çeşitli mekanlarımız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(facility.link)}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 ${
                facility.link ? 'cursor-pointer' : ''
              }`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {facility.link && (
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Detaylar</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {facility.description}
                </p>
                {facility.link && (
                  <p className="text-sm text-primary mt-3 font-medium">
                    Daha fazla bilgi için tıklayın →
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;