import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "sam3114950") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Неверный пароль");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setError("");
    onClose();
  };

  if (!isAuthenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-center">
              🎭 Админ панель
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Пароль администратора
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="w-full"
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <Button
              onClick={handleLogin}
              className="w-full bg-theater-burgundy hover:bg-theater-burgundy/90"
            >
              <Icon name="Lock" className="mr-2" size={16} />
              Войти
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-playfair text-2xl">
              🎭 Панель управления театром
            </DialogTitle>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <Icon name="LogOut" className="mr-2" size={16} />
              Выйти
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Plus" size={20} />
                Добавить спектакль
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Название спектакля" />
              <Input placeholder="Описание" />
              <Input type="date" />
              <Input type="time" />
              <Input type="number" placeholder="Цена (₽)" />
              <Input type="number" placeholder="Количество мест" />
              <Input placeholder="Жанр" />
              <Input placeholder="URL изображения" />
              <Button className="w-full bg-theater-burgundy hover:bg-theater-burgundy/90">
                Добавить спектакль
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart" size={20} />
                Статистика продаж
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Всего билетов продано:</span>
                  <span className="font-bold text-theater-burgundy">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Общая выручка:</span>
                  <span className="font-bold text-theater-burgundy">0 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Активных спектаклей:</span>
                  <span className="font-bold text-theater-burgundy">0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="List" size={20} />
                Управление спектаклями
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                Пока нет добавленных спектаклей
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;
