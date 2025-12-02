import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form bilgilerini WhatsApp mesajına ekle
    const phoneNumber = "905334274511";
    const whatsappMessage = `
🌳 *Doğa Orman Park Rezervasyon Talebi*

👤 *Ad Soyad:* ${formData.name}
📧 *E-posta:* ${formData.email}
📱 *Telefon:* ${formData.phone}

💬 *Mesaj:*
${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "WhatsApp'a yönlendiriliyorsunuz!",
      description: "Mesajınızı WhatsApp üzerinden gönderebilirsiniz.",
    });
    
    // Formu temizle
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "905334274511"; // +90 533 427 4511
    const message = "Merhaba, Doğa Orman Park hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddressClick = () => {
    const address = "Karaabdulbaki Köyü Kurtdere Namazgahı, 41001 İzmit/Kocaeli";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground mb-3 sm:mb-4 px-2">
            İletişime Geçin
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Organizasyonunuz için rezervasyon yapmak veya detaylı bilgi almak için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Adınız Soyadınız"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mesajınız ve organizasyon detayları"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Rezervasyon Talebi Gönder
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card 
              className="p-6 hover:shadow-elegant transition-shadow cursor-pointer"
              onClick={handleAddressClick}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Adres</h3>
                  <p className="text-muted-foreground mb-1">
                    Karaabdulbaki Köyü Kurtdere Namazgahı
                  </p>
                  <p className="text-muted-foreground mb-2">
                    41001 İzmit/Kocaeli
                  </p>
                  <p className="text-sm text-primary">
                    📍 Google Maps'te görüntüle
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <p className="text-muted-foreground">
                    +90 532 446 0840
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-posta</h3>
                  <p className="text-muted-foreground">
                    info@dogaormanpark.com
                  </p>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 hover:shadow-elegant transition-shadow cursor-pointer bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-green-900 dark:text-green-100">WhatsApp Business</h3>
                  <p className="text-green-700 dark:text-green-300 mb-2">
                    +90 533 427 4511
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Hızlı yanıt için WhatsApp'tan mesaj gönderin 💬
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;