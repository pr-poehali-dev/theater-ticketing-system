import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TheaterHero = () => {
  return (
    <section className="relative min-h-screen theater-gradient flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-theater-gold text-8xl">
          🎭
        </div>
        <div className="absolute bottom-20 right-20 text-theater-gold text-6xl">
          🎪
        </div>
        <div className="absolute top-1/3 right-1/4 text-theater-gold text-4xl">
          ✨
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Премиум
          <span className="block text-theater-gold">Театр</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-theater-cream opacity-90 font-light">
          Погрузитесь в мир искусства с нашими эксклюзивными спектаклями
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="gold-gradient text-theater-black font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform"
          >
            <Icon name="Ticket" className="mr-2" />
            Купить билеты
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-theater-gold text-theater-gold hover:bg-theater-gold hover:text-theater-black px-8 py-4 text-lg transition-all"
          >
            <Icon name="Calendar" className="mr-2" />
            Афиша спектаклей
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-theater-gold text-2xl" />
      </div>
    </section>
  );
};

export default TheaterHero;
