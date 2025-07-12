
import { CheckCircle, Clock, DollarSign, ArrowRight, Smartphone, Zap, Bell, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mobile = () => {
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
            <span className="text-primary">Мобильные приложения</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Разработка <span className="text-gradient">мобильных приложений</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаем нативные и гибридные мобильные приложения для iOS и Android с современным UX/UI дизайном.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>Срок: 2-6 месяцев</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>От 150 000 ₽</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="btn-primary">
                  Обсудить проект
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Примеры работ
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Мобильное приложение"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Полный функционал для создания успешного мобильного продукта</h2>
            <p className="text-xl text-muted-foreground">
              Современные возможности для iOS и Android
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Нативная разработка",
                description: "Максимальная производительность и интеграция с системными функциями"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Высокая скорость",
                description: "Оптимизированный код для быстрой работы на любых устройствах"
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Push-уведомления",
                description: "Система уведомлений для повышения вовлеченности пользователей"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Офлайн режим",
                description: "Работа приложения без интернета с синхронизацией данных"
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
                icon: "📱",
                title: "iOS и Android",
                description: "Разработка для обеих платформ или выбор оптимальной для вашего бизнеса"
              },
              {
                icon: "🔔",
                title: "Push-уведомления",
                description: "Персонализированные уведомления для увеличения активности пользователей"
              },
              {
                icon: "💾",
                title: "Офлайн режим",
                description: "Сохранение данных локально и синхронизация при появлении интернета"
              },
              {
                icon: "🏪",
                title: "App Store размещение",
                description: "Помощь в публикации приложения в Apple App Store и Google Play"
              },
              {
                icon: "🔐",
                title: "Безопасность данных",
                description: "Шифрование данных и защита пользовательской информации"
              },
              {
                icon: "📊",
                title: "Аналитика использования",
                description: "Подробная статистика поведения пользователей и производительности"
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

      {/* App Types */}
      <section className="section-padding bg-secondary/20 dark:bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Типы мобильных приложений</h2>
            <p className="text-xl text-muted-foreground">
              Решения для различных сфер бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Мобильная коммерция",
                description: "Интернет-магазины и marketplace с полным функционалом покупок",
                features: ["Каталог товаров", "Корзина", "Оплата", "Доставка"]
              },
              {
                title: "Социальные приложения", 
                description: "Платформы для общения, социальные сети и мессенджеры",
                features: ["Чаты", "Профили", "Лента", "Уведомления"]
              },
              {
                title: "Бизнес-приложения",
                description: "CRM, ERP системы и инструменты для управления бизнесом",
                features: ["Задачи", "Отчеты", "Команда", "Аналитика"]
              },
              {
                title: "Образовательные приложения",
                description: "Платформы для онлайн-обучения, курсы и тестирование",
                features: ["Курсы", "Тесты", "Прогресс", "Сертификаты"]
              }
            ].map((appType, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{appType.title}</h3>
                <p className="text-muted-foreground mb-6">{appType.description}</p>
                <div className="flex flex-wrap gap-2">
                  {appType.features.map((feature, i) => (
                    <span key={i} className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Стоимость разработки</h2>
            <p className="text-xl text-muted-foreground">
              Цена зависит от сложности и платформ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "MVP приложение",
                price: "от 150 000 ₽",
                features: [
                  "Одна платформа (iOS или Android)",
                  "Базовый функционал",
                  "Простой дизайн",
                  "Push-уведомления",
                  "3 месяца поддержки"
                ],
                timeframe: "1-2 месяца"
              },
              {
                name: "Стандартное приложение",
                price: "от 300 000 ₽",
                popular: true,
                features: [
                  "iOS и Android",
                  "Расширенный функционал",
                  "Индивидуальный дизайн",
                  "API интеграции",
                  "Аналитика",
                  "6 месяцев поддержки"
                ],
                timeframe: "2-4 месяца"
              },
              {
                name: "Сложное приложение",
                price: "от 500 000 ₽",
                features: [
                  "iOS и Android",
                  "Полный функционал",
                  "Премиум дизайн",
                  "Backend разработка",
                  "App Store публикация",
                  "12 месяцев поддержки"
                ],
                timeframe: "4-6 месяцев"
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
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.timeframe}</div>
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
                  Обсудить проект
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
            Создайте мобильное приложение для вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как мобильное приложение поможет увеличить ваши продажи
          </p>
          <Link to="/contacts" className="btn-primary">
            Заказать приложение
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
