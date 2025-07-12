
import { CheckCircle, Clock, DollarSign, ArrowRight, Database, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebApp = () => {
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
            <span className="text-primary">Веб-приложения</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Разработка <span className="text-gradient">веб-приложений</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаем мощные SaaS-приложения и системы управления для автоматизации ваших бизнес-процессов.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>Срок: 2-6 месяцев</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>От 120 000 ₽</span>
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Веб-приложение"
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Полный набор инструментов для управления вашим бизнесом</h2>
            <p className="text-xl text-muted-foreground">
              Современные технологии для решения сложных задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "База данных",
                description: "Надежное хранение и управление данными с высокой производительностью"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Высокая скорость",
                description: "Оптимизированная архитектура для быстрой работы с большими объемами данных"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасность",
                description: "Многоуровневая защита данных и соответствие стандартам безопасности"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Многопользовательский доступ",
                description: "Система ролей и прав доступа для команд любого размера"
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
                icon: "⚙️",
                title: "Панель администратора",
                description: "Интуитивно понятный интерфейс для управления всеми функциями системы"
              },
              {
                icon: "🔗",
                title: "API интеграции",
                description: "Подключение к внешним сервисам и системам через REST API"
              },
              {
                icon: "🔔",
                title: "Система уведомлений",
                description: "Email, SMS и push-уведомления для важных событий"
              },
              {
                icon: "📊",
                title: "Аналитика и отчеты",
                description: "Детальная статистика и настраиваемые отчеты в реальном времени"
              },
              {
                icon: "👥",
                title: "Управление пользователями",
                description: "Регистрация, авторизация и система ролей для пользователей"
              },
              {
                icon: "💾",
                title: "Резервное копирование",
                description: "Автоматическое создание резервных копий для защиты данных"
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

      {/* Use Cases */}
      <section className="section-padding bg-secondary/20 dark:bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Типы веб-приложений</h2>
            <p className="text-xl text-muted-foreground">
              Решения для различных сфер бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "CRM системы",
                description: "Управление взаимоотношениями с клиентами, контроль продаж и аналитика",
                features: ["База клиентов", "Воронка продаж", "Отчеты", "Интеграции"]
              },
              {
                title: "ERP системы", 
                description: "Планирование ресурсов предприятия, автоматизация бизнес-процессов",
                features: ["Учет товаров", "Финансы", "HR модуль", "Производство"]
              },
              {
                title: "Образовательные платформы",
                description: "Онлайн-обучение, курсы, вебинары и система тестирования",
                features: ["Курсы", "Тесты", "Сертификаты", "Прогресс"]
              },
              {
                title: "Системы управления проектами",
                description: "Планирование задач, отслеживание прогресса и командная работа",
                features: ["Задачи", "Календарь", "Команда", "Отчеты"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, i) => (
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
              Цена зависит от сложности и функциональности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Простое приложение",
                price: "от 120 000 ₽",
                features: [
                  "Базовый функционал",
                  "До 5 пользователей",
                  "Простая админ-панель",
                  "Базовые отчеты",
                  "3 месяца поддержки"
                ],
                timeframe: "1-2 месяца"
              },
              {
                name: "Среднее приложение",
                price: "от 300 000 ₽",
                popular: true,
                features: [
                  "Расширенный функционал",
                  "До 50 пользователей",
                  "Продвинутая админ-панель",
                  "API интеграции",
                  "Детальная аналитика",
                  "6 месяцев поддержки"
                ],
                timeframe: "2-4 месяца"
              },
              {
                name: "Сложное приложение",
                price: "от 500 000 ₽",
                features: [
                  "Полный функционал",
                  "Безлимитные пользователи",
                  "Микросервисная архитектура",
                  "Множественные интеграции",
                  "BI аналитика",
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
            Автоматизируйте свой бизнес
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и техническое задание для вашего веб-приложения
          </p>
          <Link to="/contacts" className="btn-primary">
            Начать проект
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebApp;
