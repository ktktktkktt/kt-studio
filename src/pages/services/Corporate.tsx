
import { CheckCircle, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Corporate = () => {
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
            <span className="text-primary">Корпоративные сайты</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Создание <span className="text-gradient">корпоративных сайтов</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разрабатываем представительский сайт, который повысит доверие к вашей компании и привлечет новых клиентов.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>Срок: 2-4 недели</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>От 45 000 ₽</span>
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Корпоративный офис"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Что входит в разработку</h2>
            <p className="text-xl text-muted-foreground">
              Полный набор инструментов для управления вашим бизнесом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Уникальный дизайн",
                description: "Создаем индивидуальный дизайн, отражающий стиль вашей компании"
              },
              {
                icon: "📱",
                title: "Адаптивная верстка",
                description: "Сайт отлично выглядит на всех устройствах - от смартфонов до десктопов"
              },
              {
                icon: "⚡",
                title: "Быстрая загрузка",
                description: "Оптимизируем скорость загрузки для лучшего пользовательского опыта"
              },
              {
                icon: "🔍",
                title: "SEO-оптимизация",
                description: "Настраиваем сайт для поисковых систем с самого начала"
              },
              {
                icon: "⚙️",
                title: "CMS система",
                description: "Удобная система управления контентом для самостоятельного редактирования"
              },
              {
                icon: "🔒",
                title: "Безопасность",
                description: "SSL-сертификат, защита от взлома и регулярные обновления безопасности"
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

      {/* Process */}
      <section className="section-padding bg-secondary/20 dark:bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Процесс разработки</h2>
            <p className="text-xl text-muted-foreground">
              Пошаговый подход к созданию вашего сайта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Анализ и планирование",
                description: "Изучаем вашу компанию, конкурентов и целевую аудиторию"
              },
              {
                step: "2", 
                title: "Дизайн и прототипирование",
                description: "Создаем макеты и прототипы будущего сайта"
              },
              {
                step: "3",
                title: "Разработка и тестирование",
                description: "Верстаем, программируем и тестируем функциональность"
              },
              {
                step: "4",
                title: "Запуск и поддержка",
                description: "Запускаем сайт и обеспечиваем техническую поддержку"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Пакеты услуг</h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий вариант для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Стандарт",
                price: "45 000 ₽",
                features: [
                  "До 5 страниц",
                  "Адаптивный дизайн",
                  "SEO-оптимизация",
                  "CMS WordPress",
                  "SSL-сертификат",
                  "Базовая аналитика"
                ]
              },
              {
                name: "Премиум",
                price: "75 000 ₽",
                popular: true,
                features: [
                  "До 10 страниц",
                  "Уникальный дизайн",
                  "Расширенная SEO",
                  "Интеграция с CRM",
                  "Форма обратной связи",
                  "Онлайн-чат",
                  "Расширенная аналитика"
                ]
              },
              {
                name: "Корпоративный",
                price: "120 000 ₽",
                features: [
                  "Безлимитное количество страниц",
                  "Индивидуальный дизайн",
                  "Многоязычность",
                  "Интеграция с 1С",
                  "Личный кабинет",
                  "API разработка",
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
            Готовы создать профессиональный сайт?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и обсуждения вашего проекта
          </p>
          <Link to="/contacts" className="btn-primary">
            Получить консультацию
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
