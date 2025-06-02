import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Show {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  price: number;
  available: number;
  image: string;
  genre: string;
}

interface ShowCardProps {
  show: Show;
  onBookTicket: (showId: string) => void;
}

const ShowCard = ({ show, onBookTicket }: ShowCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-theater-cream">
      <div className="relative h-48 overflow-hidden">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-theater-burgundy text-white">{show.genre}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            variant="secondary"
            className="bg-theater-gold text-theater-black"
          >
            {show.available} мест
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-bold text-theater-black mb-2">
          {show.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{show.description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={16} />
            {show.date}
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            {show.time}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-theater-burgundy">
            {show.price.toLocaleString()} ₽
          </div>

          <Button
            onClick={() => onBookTicket(show.id)}
            className="bg-theater-burgundy hover:bg-theater-burgundy/90 text-white"
            disabled={show.available === 0}
          >
            <Icon name="Ticket" className="mr-2" size={16} />
            {show.available > 0 ? "Купить билет" : "Билеты закончились"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
