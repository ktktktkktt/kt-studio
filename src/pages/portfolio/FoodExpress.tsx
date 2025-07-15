
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Smartphone, MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoodExpress = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation(0.1);
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className={`section-padding bg-gradient-to-br from-background to-muted transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <Link to="/portfolio" className="inline-flex items-center text-accent hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к портфолио
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Мобильное приложение для доставки еды <span className="text-gradient">FoodExpress</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Нативное мобильное приложение с геолокацией, отслеживанием заказов в реальном времени и интегрированными платежами
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2024</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span>iOS/Android</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Геолокация</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Скачать приложение
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожее
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="FoodExpress приложение доставки"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section ref={detailsRef} className={`section-padding bg-background transition-all duration-1000 ${
        detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">О проекте</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  FoodExpress - это инновационное мобильное приложение для заказа и доставки еды, созданное для решения 
                  проблем современного ритма жизни. Приложение объединяет сотни ресторанов и тысячи пользователей в одной 
                  удобной экосистеме.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Ключевые функции приложения:</h3>
                <ul className="space-y-2">
                  <li>• Интуитивный поиск ресторанов и блюд</li>
                  <li>• Геолокация с автоматическим определением адреса</li>
                  <li>• Отслеживание заказа в реальном времени</li>
                  <li>• Система рейтингов и отзывов</li>
                  <li>• Персональные рекомендации на основе истории</li>
                  <li>• Push-уведомления о статусе заказа</li>
                  <li>• Программа лояльности с бонусами</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Технические особенности:</h3>
                <ul className="space-y-2">
                  <li>• Нативная разработка для iOS и Android</li>
                  <li>• Интеграция с Google Maps и Apple Maps</li>
                  <li>• Система платежей (Apple Pay, Google Pay, карты)</li>
                  <li>• Offline-режим для просмотра меню</li>
                  <li>• Машинное обучение для рекомендаций</li>
                  <li>• WebSocket для real-time обновлений</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 text-accent mr-3" />
                    <span>React Native</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <span>Firebase</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <span>Google Maps API</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-accent mr-3" />
                    <span>Stripe</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">10 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ресторанов:</span>
                    <span className="font-medium">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Платформы:</span>
                    <span className="font-medium">iOS + Android</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Городов:</span>
                    <span className="font-medium">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="FoodExpress интерфейс приложения"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="FoodExpress трекинг заказа"
              className="rounded-lg shadow-md hover-lift"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className={`section-padding bg-muted transition-all duration-1000 ${
        resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Результаты проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-lg font-semibold mb-2">Скачиваний</div>
              <div className="text-muted-foreground">За первые 6 месяцев после запуска</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-lg font-semibold mb-2">Рейтинг в сторах</div>
              <div className="text-muted-foreground">Средняя оценка пользователей</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">-25%</div>
              <div className="text-lg font-semibold mb-2">Время доставки</div>
              <div className="text-muted-foreground">Благодаря оптимизации маршрутов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Хотите создать мобильное приложение?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Разработаем нативное приложение для iOS и Android с современным дизайном и функциональностью
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Обсудить приложение
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FoodExpress;
