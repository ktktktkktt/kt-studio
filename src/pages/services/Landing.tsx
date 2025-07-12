
import { CheckCircle, Clock, DollarSign, ArrowRight, Target, BarChart3, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
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
            <span className="text-primary">Landing Page</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Создание <span className="text-gradient">Landing Page</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разрабатываем эффективную посадочную страницу с высокой конверсией для ваших рекламных кампаний и продуктов.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>Срок: 1-2 недели</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>От 25 000 ₽</span>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" 
                alt="Аналитика лендинга"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Landing Page */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Почему лендинг эффективен</h2>
            <p className="text-xl text-muted-foreground">
              Максимальная конверсия из трафика в клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Целевое действие",
                description: "Фокус на одной цели - получение заявки или продажа"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Высокая конверсия",
                description: "От 5% до 15% конверсии против 1-3% у обычных сайтов"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Быстрая загрузка",
                description: "Оптимизация скорости для максимального удержания посетителей"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Точная аудитория",
                description: "Контент адаптирован под конкретную целевую аудиторию"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Цепляющий заголовок",
                description: "Привлекающий внимание заголовок, который мотивирует к действию"
              },
              {
                icon: "📝",
                title: "Убеждающий текст",
                description: "Продающие тексты, решающие возражения клиентов"
              },
              {
                icon: "📸",
                title: "Качественные изображения",
                description: "Профессиональные фото и графика для усиления воздействия"
              },
              {
                icon: "📞",
                title: "Формы обратной связи",
                description: "Удобные формы для сбора контактов потенциальных клиентов"
              },
              {
                icon: "📊",
                title: "A/B тестирование",
                description: "Тестирование различных вариантов для повышения конверсии"
              },
              {
                icon: "📈",
                title: "Аналитика и метрики",
                description: "Подключение систем аналитики для отслеживания результатов"
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Пакеты услуг</h2>
            <p className="text-xl text-muted-foreground">
              Выберите оптимальное решение для ваших задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовый",
                price: "25 000 ₽",
                features: [
                  "1 посадочная страница",
                  "Адаптивный дизайн",
                  "Форма обратной связи",
                  "Базовая SEO-оптимизация",
                  "Подключение аналитики",
                  "Месяц поддержки"
                ]
              },
              {
                name: "Стандарт",
                price: "45 000 ₽",
                popular: true,
                features: [
                  "1 посадочная страница",
                  "Индивидуальный дизайн",
                  "Продающие тексты",
                  "A/B тестирование",
                  "Расширенная аналитика",
                  "Интеграция с CRM",
                  "3 месяца поддержки"
                ]
              },
              {
                name: "Премиум",
                price: "75 000 ₽",
                features: [
                  "До 3 вариантов лендинга",
                  "Премиум дизайн",
                  "Копирайтинг от профи",
                  "Анимации и интерактив",
                  "Чат-бот",
                  "Интеграция с рекламой",
                  "6 месяцев поддержки"
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
            Увеличьте конверсию в 3-5 раз
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как лендинг поможет увеличить ваши продажи
          </p>
          <Link to="/contacts" className="btn-primary">
            Заказать лендинг
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
