import { UtensilsCrossed, Palette, Users2, TreePine } from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";
import workshopImg from "@/assets/workshop.jpg";
import trailImg from "@/assets/trail.jpg";

const facilities = [
  {
    icon: UtensilsCrossed,
    title: "Restoran",
    description: "Doğa manzaralı modern restoran alanımızda lezzetli yemekler ve içecekler eşliğinde konuklarınızı ağırlayın.",
    image: restaurantImg
  },
  {
    icon: Palette,
    title: "Workshop & Atölye",
    description: "Yaratıcı çalışmalar, eğitimler ve atölye çalışmaları için tam donanımlı mekanlarımız.",
    image: workshopImg
  },
  {
    icon: TreePine,
    title: "Yürüme Parkuru",
    description: "Orman içinde uzanan doğal yürüyüş parkurlarıyla katılımcılarınıza aktivite imkanı sunun.",
    image: trailImg
  },
  {
    icon: Users2,
    title: "Organizasyon Alanları",
    description: "Düğünlerden kurumsal etkinliklere, toplantılardan festivallere her türlü organizasyon için uygun alanlar.",
    image: restaurantImg
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-4">
            Tesislerimiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İhtiyacınıza göre özelleştirilebilen çeşitli mekanlarımız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
