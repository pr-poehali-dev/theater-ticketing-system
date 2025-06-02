import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface TheaterNavbarProps {
  onOpenAdmin: () => void;
}

const TheaterNavbar = ({ onOpenAdmin }: TheaterNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-theater-black/95 backdrop-blur-md border-b border-theater-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-theater-gold text-2xl">🎭</div>
            <span className="font-playfair text-2xl font-bold text-white">
              Премиум Театр
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-theater-gold transition-colors"
            >
              Главная
            </a>
            <a
              href="#shows"
              className="text-white hover:text-theater-gold transition-colors"
            >
              Спектакли
            </a>
            <a
              href="#about"
              className="text-white hover:text-theater-gold transition-colors"
            >
              О театре
            </a>
            <Button
              onClick={onOpenAdmin}
              variant="ghost"
              size="sm"
              className="text-white hover:text-theater-gold"
            >
              <Icon name="Settings" size={16} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-theater-gold/20 pt-4">
            <a
              href="#home"
              className="block text-white hover:text-theater-gold transition-colors py-2"
            >
              Главная
            </a>
            <a
              href="#shows"
              className="block text-white hover:text-theater-gold transition-colors py-2"
            >
              Спектакли
            </a>
            <a
              href="#about"
              className="block text-white hover:text-theater-gold transition-colors py-2"
            >
              О театре
            </a>
            <Button
              onClick={onOpenAdmin}
              variant="ghost"
              size="sm"
              className="text-white hover:text-theater-gold mt-2"
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Админ панель
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TheaterNavbar;
