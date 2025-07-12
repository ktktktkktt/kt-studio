
import { CheckCircle, Clock, DollarSign, ArrowRight, ShoppingCart, Users, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-secondary/20 dark:to-secondary/10">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Главная</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-foreground">Услуги</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">Интернет-магазины</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Создание <span className="text-gradient">интернет-магазинов</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разрабатываем полнофункциональный интернет-магазин с современным дизайном, удобной системой управления и высокой конверсией.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>Срок: 3-8 недель</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>От 80 000 ₽</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="btn-primary">
                  Получить консультацию
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Посмотреть примеры
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Интернет-магазин"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Ключевые возможности</h2>
            <p className="text-xl text-muted-foreground">
              Все необходимое для успешных продаж онлайн
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "Удобная корзина",
                description: "Интуитивно понятная система добавления и управления товарами"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Личный кабинет",
                description: "Регистрация клиентов, история заказов и персональные предложения"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Аналитика продаж",
                description: "Детальная статистика по заказам, товарам и клиентам"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасные платежи",
                description: "Интеграция с популярными платежными системами"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛍️",
                title: "Каталог товаров",
                description: "Удобная система категорий, фильтров и поиска по товарам"
              },
              {
                icon: "💳",
                title: "Система оплаты",
                description: "Интеграция с Яндекс.Касса, Сбербанк, PayPal и другими сервисами"
              },
              {
                icon: "📦",
                title: "Управление заказами",
                description: "Автоматизация процесса от получения заказа до доставки"
              },
              {
                icon: "📊",
                title: "Админ-панель",
                description: "Полная система управления товарами, заказами и клиентами"
              },
              {
                icon: "🚚",
                title: "Доставка",
                description: "Интеграция с службами доставки и расчет стоимости"
              },
              {
                icon: "📱",
                title: "Мобильная версия",
                description: "Адаптивный дизайн для комфортных покупок с телефона"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-secondary/20 dark:bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Пакеты разработки</h2>
            <p className="text-xl text-muted-foreground">
              Выберите оптимальное решение для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Стартовый",
                price: "80 000 ₽",
                features: [
                  "До 100 товаров",
                  "Базовый дизайн",
                  "Система оплаты",
                  "Управление заказами",
                  "Мобильная версия",
                  "SSL-сертификат"
                ]
              },
              {
                name: "Профессиональный",
                price: "150 000 ₽",
                popular: true,
                features: [
                  "До 1000 товаров",
                  "Индивидуальный дизайн",
                  "Личный кабинет",
                  "Система скидок",
                  "Интеграция с 1С",
                  "SEO-оптимизация",
                  "Аналитика"
                ]
              },
              {
                name: "Корпоративный",
                price: "300 000 ₽",
                features: [
                  "Безлимитное количество товаров",
                  "Мультивалютность",
                  "B2B функции",
                  "API интеграции",
                  "Многоязычность",
                  "CRM система",
                  "Годовая поддержка"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-card p-8 rounded-2xl shadow-lg border-2 relative ${
                plan.popular ? 'border-primary' : 'border-border'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contacts" 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Выбрать план
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Начните продавать онлайн уже сегодня
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как интернет-магазин поможет развить ваш бизнес
          </p>
          <Link to="/contacts" className="btn-primary">
            Обсудить проект
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
