
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Globe, Code, Database, Target, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaskFlow = () => {
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
                Веб-приложение для управления проектами <span className="text-gradient">TaskFlow</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современное SaaS-приложение для управления проектами и командной работы с интуитивным интерфейсом
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2024</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>SaaS платформа</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Веб-приложение</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Открыть приложение
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожее
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="TaskFlow управление проектами"
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
                  TaskFlow - это современная SaaS-платформа для управления проектами, созданная для команд любого размера. 
                  Приложение объединяет планирование задач, отслеживание времени и командную коммуникацию в одном месте.
                </p>
                <p>
                  Главной задачей было создать интуитивно понятный инструмент, который поможет командам быть более продуктивными 
                  и организованными, не перегружая их сложными функциями.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Ключевые функции:</h3>
                <ul className="space-y-2">
                  <li>• Канбан-доски с drag & drop функциональностью</li>
                  <li>• Система ролей и прав доступа</li>
                  <li>• Интеграция с популярными сервисами (Slack, GitHub, Google Drive)</li>
                  <li>• Детальная аналитика и отчеты</li>
                  <li>• Мобильное приложение для iOS и Android</li>
                  <li>• Система уведомлений в реальном времени</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Технические особенности:</h3>
                <ul className="space-y-2">
                  <li>• Realtime обновления через WebSocket</li>
                  <li>• Масштабируемая архитектура с microservices</li>
                  <li>• API-first подход для интеграций</li>
                  <li>• Автономная работа (offline mode)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-accent mr-3" />
                    <span>React + TypeScript</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-accent mr-3" />
                    <span>Node.js + Express</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-accent mr-3" />
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    <span>Socket.io</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">8 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Команда:</span>
                    <span className="font-medium">6 человек</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Платформы:</span>
                    <span className="font-medium">Web, iOS, Android</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Интеграции:</span>
                    <span className="font-medium">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="TaskFlow канбан доски"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="TaskFlow аналитика"
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
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <div className="text-lg font-semibold mb-2">Активных пользователей</div>
              <div className="text-muted-foreground">Зарегистрированных команд в первый год</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">-40%</div>
              <div className="text-lg font-semibold mb-2">Время выполнения задач</div>
              <div className="text-muted-foreground">Среднее сокращение времени на проект</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-lg font-semibold mb-2">Удержание пользователей</div>
              <div className="text-muted-foreground">Процент активных пользователей через 6 месяцев</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Хотите создать SaaS-приложение?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обсудим ваши идеи и создадим масштабируемое решение для вашего бизнеса
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Начать проект
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TaskFlow;
