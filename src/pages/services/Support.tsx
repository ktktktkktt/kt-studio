
import { CheckCircle, Clock, DollarSign, ArrowRight, Shield, Zap, Users, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
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
            <span className="text-primary">Техническая поддержка</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Техническая поддержка</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Комплексное обслуживание и развитие ваших веб-проектов. Гарантируем стабильную работу и безопасность.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>24/7 мониторинг</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>От 15 000 ₽/мес</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="btn-primary">
                  Выбрать план
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Примеры работ
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Техническая поддержка"
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Полный спектр услуг для поддержания вашего сайта в рабочем состоянии</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональная поддержка 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасность",
                description: "Регулярные обновления безопасности и защита от угроз"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Производительность",
                description: "Оптимизация скорости загрузки и производительности сайта"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Экспертная поддержка",
                description: "Команда опытных разработчиков всегда готова помочь"
              },
              {
                icon: <HeadphonesIcon className="w-8 h-8" />,
                title: "Быстрый отклик",
                description: "Среднее время ответа на обращения - 30 минут"
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
                icon: "🔍",
                title: "24/7 мониторинг",
                description: "Постоянное отслеживание работы сайта и автоматические уведомления"
              },
              {
                icon: "💾",
                title: "Резервное копирование",
                description: "Ежедневные автоматические бэкапы с возможностью быстрого восстановления"
              },
              {
                icon: "🔐",
                title: "Обновления безопасности",
                description: "Своевременная установка критических обновлений и патчей"
              },
              {
                icon: "📞",
                title: "Техническая консультация",
                description: "Консультации по развитию и оптимизации вашего проекта"
              },
              {
                icon: "🚀",
                title: "Оптимизация производительности",
                description: "Регулярная оптимизация скорости и производительности"
              },
              {
                icon: "📊",
                title: "Аналитика и отчеты",
                description: "Ежемесячные отчеты о работе сайта и рекомендации"
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

      {/* Service Levels */}
      <section className="section-padding bg-secondary/20 dark:bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Уровни поддержки</h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий план обслуживания
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовая",
                price: "15 000 ₽/мес",
                features: [
                  "Мониторинг работоспособности",
                  "Еженедельные бэкапы",
                  "Критические обновления",
                  "Email поддержка",
                  "Время ответа: 24 часа",
                  "5 часов работ в месяц"
                ]
              },
              {
                name: "Стандартная",
                price: "30 000 ₽/мес",
                popular: true,
                features: [
                  "24/7 мониторинг",
                  "Ежедневные бэкапы",
                  "Все обновления",
                  "Телефон + Email",
                  "Время ответа: 4 часа",
                  "15 часов работ в месяц",
                  "Ежемесячные отчеты"
                ]
              },
              {
                name: "Премиум",
                price: "50 000 ₽/мес",
                features: [
                  "Приоритетный мониторинг",
                  "Мгновенные бэкапы",
                  "Проактивные обновления",
                  "Персональный менеджер",
                  "Время ответа: 1 час",
                  "30 часов работ в месяц",
                  "Консультации по развитию"
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

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Почему выбирают нашу поддержку</h2>
            <p className="text-xl text-muted-foreground">
              Преимущества работы с профессионалами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  {
                    title: "Опыт 7+ лет",
                    description: "Работаем с проектами любой сложности и знаем все подводные камни"
                  },
                  {
                    title: "Проактивный подход",
                    description: "Предотвращаем проблемы до их возникновения, а не просто реагируем"
                  },
                  {
                    title: "Прозрачная отчетность",
                    description: "Подробные отчеты о проделанной работе и состоянии вашего сайта"
                  },
                  {
                    title: "Гибкие тарифы",
                    description: "Можем адаптировать план поддержки под ваши специфические потребности"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Статистика нашей работы</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "99.9%", label: "Время работы сайтов" },
                  { number: "< 30 мин", label: "Среднее время ответа" },
                  { number: "150+", label: "Сайтов на поддержке" },
                  { number: "24/7", label: "Мониторинг" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Обеспечьте надежную работу вашего сайта
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и выберите оптимальный план технической поддержки
          </p>
          <Link to="/contacts" className="btn-primary">
            Выбрать план поддержки
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Support;
