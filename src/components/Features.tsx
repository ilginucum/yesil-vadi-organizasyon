import { Leaf, Users, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Doğayla İç İçe",
    description: "Ormanın huzur veren atmosferinde, doğanın seslerini dinleyerek organizasyonunuzu gerçekleştirin."
  },
  {
    icon: Users,
    title: "Her Ölçekte Etkinlik",
    description: "Küçük toplantılardan büyük organizasyonlara kadar her ihtiyaca uygun esnek alanlar."
  },
  {
    icon: Heart,
    title: "Özenle Tasarlanmış",
    description: "Modern konforu doğal güzellikle birleştiren özenle düşünülmüş mekanlar."
  },
  {
    icon: Sparkles,
    title: "Unutulmaz Deneyimler",
    description: "Katılımcılarınıza eşsiz bir deneyim sunarak etkinliğinizi farklılaştırın."
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
              className="group p-6 rounded-2xl bg-background hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
