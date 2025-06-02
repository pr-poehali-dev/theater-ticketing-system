import { useState } from "react";
import TheaterHero from "@/components/theater/TheaterHero";
import TheaterNavbar from "@/components/theater/TheaterNavbar";
import ShowCard from "@/components/theater/ShowCard";
import AdminPanel from "@/components/theater/AdminPanel";

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Пустой массив спектаклей - администратор будет добавлять их через админ панель
  const shows: any[] = [];

  const handleBookTicket = (showId: string) => {
    // Логика бронирования билета будет добавлена позже
    console.log("Booking ticket for show:", showId);
  };

  return (
    <div className="min-h-screen bg-theater-cream">
      <TheaterNavbar onOpenAdmin={() => setIsAdminOpen(true)} />

      <main>
        {/* Hero Section */}
        <section id="home">
          <TheaterHero />
        </section>

        {/* Shows Section */}
        <section id="shows" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theater-black mb-6">
                Наши спектакли
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Откройте для себя мир премиального театрального искусства
              </p>
            </div>

            {shows.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shows.map((show) => (
                  <ShowCard
                    key={show.id}
                    show={show}
                    onBookTicket={handleBookTicket}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🎭</div>
                <h3 className="font-playfair text-2xl text-theater-black mb-4">
                  Готовим для вас что-то особенное
                </h3>
                <p className="text-gray-600">
                  Скоро здесь появятся наши премиальные спектакли
                </p>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-theater-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
              О нашем театре
            </h2>
            <p className="text-xl text-theater-cream max-w-3xl mx-auto leading-relaxed">
              Мы создаём незабываемые театральные впечатления, объединяя
              классическое искусство с современными технологиями. Каждый
              спектакль — это путешествие в мир эмоций и красоты.
            </p>
          </div>
        </section>
      </main>

      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
};

export default Index;
