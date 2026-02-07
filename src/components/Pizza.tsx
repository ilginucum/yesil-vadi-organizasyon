import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Calendar, Clock, Flame } from "lucide-react";
import menuImage from "@/assets/menu.jpg";

const Pizza = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full mb-4">
              <Flame className="w-5 h-5" />
              <span className="font-semibold">Özel Lezzet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground mb-4">
              Taş Fırında Napoli Pizzası
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Her hafta sonu doğanın ortasında, geleneksel taş fırınımızda özenle hazırlanan 
              otantik Napoli pizzalarımızla damak tadınıza hitap ediyoruz
            </p>
          </div>

          {/* İçerik Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Sol: Fotoğraflar */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden group cursor-pointer">
                <div className="aspect-square relative">
                  <img 
                    src="images/pizzaiki.jpg" 
                    alt="Taş Fırın Pizza"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden group cursor-pointer mt-8">
                <div className="aspect-square relative">
                  <img 
                    src="images/pizza1.jpg" 
                    alt="Taş Fırın"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Card>
            </div>

            {/* Sağ: Açıklama ve Bilgiler */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  Doğa Orman Park olarak, hafta sonlarınızı daha da özel kılmak için 
                  geleneksel taş fırınımızda el yapımı Napoli pizzaları hazırlıyoruz. 
                  Hamurumuz 72 saat mayalandırılıyor ve en taze malzemelerle buluşuyor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ormanlık alanımızda, aileniz ve sevdiklerinizle birlikte doğanın tadını 
                  çıkarırken, sıcacık fırından çıkan pizzalarımızın eşsiz lezzetini deneyimleyin.
                </p>
              </div>

              {/* Menü Butonu */}
              <div className="flex justify-center pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                      <Flame className="w-5 h-5" />
                      Menü İçin Tıklayınız
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
                    {/* Gizli başlık - Sadece ekran okuyucular için */}
                    <VisuallyHidden>
                      <DialogTitle>Pizza Menüsü</DialogTitle>
                    </VisuallyHidden>
                    
                    <div className="w-full h-[85vh] overflow-y-auto overflow-x-hidden">
                      <img 
                        src={menuImage} 
                        alt="Pizza Menüsü" 
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Bilgi Kartları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Card className="p-4 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-orange-900 dark:text-orange-100">
                        Her Hafta Sonu
                      </p>
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Cuma - Cumartesi - Pazar
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-orange-900 dark:text-orange-100">
                        Taze & Sıcak
                      </p>
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Taş fırından direkt masanıza
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pizza;