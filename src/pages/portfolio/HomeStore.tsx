import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, ShoppingCart, Eye, Box, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeStore = () => {
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
                Интернет-магазин товаров для дома <span className="text-gradient">HomeStore</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Инновационная e-commerce платформа с 3D-просмотром товаров, AR-функциями и персонализированными рекомендациями
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2024</span>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  <span>E-commerce</span>
                </div>
                <div className="flex items-center">
                  <Box className="w-4 h-4 mr-2" />
                  <span>3D/AR</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Посетить магазин
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожий
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="HomeStore интернет-магазин"
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
                  HomeStore - это революционный интернет-магазин товаров для дома, который использует передовые технологии 
                  3D-визуализации и дополненной реальности для улучшения пользовательского опыта покупок.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Инновационные функции:</h3>
                <ul className="space-y-2">
                  <li>• 3D-модели товаров для детального просмотра</li>
                  <li>• AR-режим для примерки мебели в интерьере</li>
                  <li>• Конфигуратор для кастомизации товаров</li>
                  <li>• Виртуальные туры по комнатам</li>
                  <li>• ИИ-помощник для подбора товаров</li>
                  <li>• Система сравнения с виртуальной расстановкой</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">E-commerce функциональность:</h3>
                <ul className="space-y-2">
                  <li>• Продвинутая система фильтрации и поиска</li>
                  <li>• Персональные рекомендации на основе ML</li>
                  <li>• Мультивариантная корзина с сохранением</li>
                  <li>• Интеграция с системами доставки</li>
                  <li>• Программа лояльности и кэшбек</li>
                  <li>• Отзывы с фото и видео в интерьере</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Технические особенности:</h3>
                <ul className="space-y-2">
                  <li>• WebGL для рендеринга 3D-моделей</li>
                  <li>• Progressive Web App (PWA)</li>
                  <li>• Headless архитектура для гибкости</li>
                  <li>• CDN для быстрой загрузки 3D-контента</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Box className="w-5 h-5 text-accent mr-3" />
                    <span>Vue.js 3</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-accent mr-3" />
                    <span>Three.js</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-accent mr-3" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-accent mr-3" />
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">12 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3D-моделей:</span>
                    <span className="font-medium">2000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Категорий товаров:</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AR-поддержка:</span>
                    <span className="font-medium">iOS/Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="HomeStore 3D просмотр"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="HomeStore AR функции"
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
              <div className="text-4xl font-bold text-accent mb-2">+55%</div>
              <div className="text-lg font-semibold mb-2">Рост конверсии</div>
              <div className="text-muted-foreground">Благодаря 3D-просмотру товаров</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">-30%</div>
              <div className="text-lg font-semibold mb-2">Снижение возвратов</div>
              <div className="text-muted-foreground">Покупатели лучше понимают товар</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">+90%</div>
              <div className="text-lg font-semibold mb-2">Время на сайте</div>
              <div className="text-muted-foreground">Пользователи дольше изучают товары</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы к инновациям в e-commerce?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Создадим современный интернет-магазин с 3D-технологиями и AR для вашего бизнеса
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeStore;
