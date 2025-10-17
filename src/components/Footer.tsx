import { TreePine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <TreePine className="w-8 h-8" />
            <span className="text-2xl font-playfair font-bold">Doğa Orman Park</span>
          </div>
          <p className="text-primary-foreground/80 max-w-md">
            Doğanın kalbinde unutulmaz anılar için mükemmel mekan
          </p>
          <div className="pt-6 border-t border-primary-foreground/20 w-full">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Doğa Orman Park. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
