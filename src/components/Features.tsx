import { Leaf, Users, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Doğayla İç İçe",
    description: "Ormanın huzur veren atmosferinde, doğanın seslerini dinleyerek organizasyonunuzu gerçekleştirin.",
    image: "/images/nature.JPG" // Fotoğraf yolunu buraya ekleyin
  },
  {
    icon: Users,
    title: "Her Ölçekte Etkinlik",
    description: "Küçük toplantılardan büyük organizasyonlara kadar her ihtiyaca uygun esnek alanlar.",
    image: "/images/events.JPG"
  },
  {
    icon: Heart,
    title: "Özenle Tasarlanmış",
    description: "Modern konforu doğal güzellikle birleştiren özenle düşünülmüş mekanlar.",
    image: "/images/design.JPG"
  },
  {
    icon: Sparkles,
    title: "Unutulmaz Deneyimler",
    description: "Katılımcılarınıza eşsiz bir deneyim sunarak etkinliğinizi farklılaştırın.",
    image: "/images/alan.JPG"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground mb-3 sm:mb-4 px-2">
            Neden Doğa Orman Park?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Organizasyonlarınız için doğanın içinde huzurlu ve eşsiz bir deneyim sunuyoruz
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 min-h-[300px]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;