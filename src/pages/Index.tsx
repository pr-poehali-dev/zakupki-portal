import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Электроника', icon: 'Smartphone', gradient: 'bg-gradient-primary' },
  { name: 'Недвижимость', icon: 'Home', gradient: 'bg-gradient-secondary' },
  { name: 'Транспорт', icon: 'Car', gradient: 'bg-gradient-accent' },
  { name: 'Работа', icon: 'Briefcase', gradient: 'bg-gradient-primary' },
  { name: 'Услуги', icon: 'Wrench', gradient: 'bg-gradient-secondary' },
  { name: 'Мода', icon: 'Shirt', gradient: 'bg-gradient-accent' },
];

const listings = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max 256GB',
    price: '89 990 ₽',
    image: '/placeholder.svg',
    location: 'Москва, ЦАО',
    seller: { name: 'Иван П.', avatar: '', rating: 4.9, reviews: 127 },
    category: 'Электроника',
    featured: true,
  },
  {
    id: 2,
    title: '2-к квартира, 65 м², 5/9 эт.',
    price: '8 500 000 ₽',
    image: '/placeholder.svg',
    location: 'Санкт-Петербург',
    seller: { name: 'Мария К.', avatar: '', rating: 5.0, reviews: 89 },
    category: 'Недвижимость',
    featured: true,
  },
  {
    id: 3,
    title: 'Toyota Camry 2020, 2.5 AT',
    price: '2 350 000 ₽',
    image: '/placeholder.svg',
    location: 'Казань',
    seller: { name: 'Алексей С.', avatar: '', rating: 4.8, reviews: 54 },
    category: 'Транспорт',
    featured: false,
  },
  {
    id: 4,
    title: 'MacBook Pro 16" M3 Max',
    price: '299 990 ₽',
    image: '/placeholder.svg',
    location: 'Москва, ЮЗАО',
    seller: { name: 'Дмитрий Л.', avatar: '', rating: 4.9, reviews: 203 },
    category: 'Электроника',
    featured: false,
  },
  {
    id: 5,
    title: 'Ремонт квартир под ключ',
    price: 'От 3 000 ₽/м²',
    image: '/placeholder.svg',
    location: 'Екатеринбург',
    seller: { name: 'Сергей В.', avatar: '', rating: 4.7, reviews: 145 },
    category: 'Услуги',
    featured: false,
  },
  {
    id: 6,
    title: 'Nike Air Max 270 React',
    price: '12 990 ₽',
    image: '/placeholder.svg',
    location: 'Новосибирск',
    seller: { name: 'Анна М.', avatar: '', rating: 5.0, reviews: 312 },
    category: 'Мода',
    featured: true,
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={14}
            className={`${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Объявления
            </h1>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Icon name="Heart" size={18} />
                Избранное
              </Button>
              <Button variant="outline" className="gap-2">
                <Icon name="User" size={18} />
                Профиль
              </Button>
              <Button className="bg-gradient-primary text-white gap-2 hover:opacity-90 transition-opacity">
                <Icon name="Plus" size={18} />
                Разместить
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск объявлений..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base border-2 focus-visible:ring-primary"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Grid3x3" size={24} className="text-primary" />
            Категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="cursor-pointer hover:scale-105 transition-all duration-200 hover:shadow-xl border-2 group overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  <div className={`${category.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} size={32} className="text-white" />
                  </div>
                  <p className="font-semibold text-sm">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Sparkles" size={24} className="text-secondary" />
            Популярные объявления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing, index) => (
              <Card
                key={listing.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {listing.featured && (
                    <Badge className="absolute top-3 left-3 bg-gradient-secondary text-white border-0">
                      <Icon name="Zap" size={14} className="mr-1" />
                      Топ
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className={`absolute top-3 right-3 rounded-full shadow-lg transition-all ${
                      favorites.includes(listing.id)
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-white/90 backdrop-blur hover:bg-white'
                    }`}
                    onClick={() => toggleFavorite(listing.id)}
                  >
                    <Icon
                      name="Heart"
                      size={18}
                      className={favorites.includes(listing.id) ? 'fill-current' : ''}
                    />
                  </Button>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg line-clamp-2 flex-1">
                      {listing.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-1 text-xs">
                    <Icon name="MapPin" size={14} />
                    {listing.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                      {listing.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                      <AvatarImage src={listing.seller.avatar} />
                      <AvatarFallback className="bg-gradient-primary text-white text-sm">
                        {listing.seller.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{listing.seller.name}</p>
                      <div className="flex items-center gap-2">
                        {renderStars(listing.seller.rating)}
                        <span className="text-xs text-muted-foreground">
                          {listing.seller.rating} ({listing.seller.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity">
                    Посмотреть
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-lg border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Объявления. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">О нас</Button>
              <Button variant="ghost" size="sm">Контакты</Button>
              <Button variant="ghost" size="sm">Помощь</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
