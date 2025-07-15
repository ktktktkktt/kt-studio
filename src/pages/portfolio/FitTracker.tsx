
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Smartphone, Heart, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitTracker = () => {
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
                Мобильное приложение для фитнеса <span className="text-gradient">FitTracker</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Персональный фитнес-трекер с планами тренировок, интеграцией с носимыми устройствами и социальными функциями
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2024</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>Здоровье и фитнес</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span>iOS/Android</span>
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
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="FitTracker фитнес приложение"
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
                  FitTracker - это комплексное мобильное приложение для мониторинга физической активности и здоровья. 
                  Приложение помогает пользователям достигать фитнес-целей через персонализированные тренировки и 
                  детальную аналитику.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Основные функции:</h3>
                <ul className="space-y-2">
                  <li>• Отслеживание физической активности (шаги, калории, дистанция)</li>
                  <li>• Персональные планы тренировок</li>
                  <li>• Мониторинг сердечного ритма</li>
                  <li>• Дневник питания с базой продуктов</li>
                  <li>• Трекинг сна и восстановления</li>
                  <li>• Социальные функции и челленджи</li>
                  <li>• Интеграция с тренажерами в зале</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Интеграции с устройствами:</h3>
                <ul className="space-y-2">
                  <li>• Apple Watch и Apple HealthKit</li>
                  <li>• Fitbit и Garmin устройства</li>
                  <li>• Samsung Health</li>
                  <li>• Умные весы и тонометры</li>
                  <li>• Пульсометры и датчики активности</li>
                  <li>• Bluetooth наушники с сенсорами</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">ИИ и персонализация:</h3>
                <ul className="space-y-2">
                  <li>• Адаптивные планы тренировок на основе прогресса</li>
                  <li>• Рекомендации по питанию и восстановлению</li>
                  <li>• Предиктивная аналитика травм и перетренированности</li>
                  <li>• Умные уведомления и мотивация</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 text-accent mr-3" />
                    <span>Flutter</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-accent mr-3" />
                    <span>Firebase</span>
                  </div>
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-accent mr-3" />
                    <span>HealthKit</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-accent mr-3" />
                    <span>ML Kit</span>
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
                    <span>Упражнений в базе:</span>
                    <span className="font-medium">1000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Интеграций:</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Языков:</span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="FitTracker тренировки"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="FitTracker аналитика"
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
              <div className="text-4xl font-bold text-accent mb-2">200K+</div>
              <div className="text-lg font-semibold mb-2">Активных пользователей</div>
              <div className="text-muted-foreground">Ежемесячно используют приложение</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Engagement</div>
              <div className="text-muted-foreground">Пользователей активны каждую неделю</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">35%</div>
              <div className="text-lg font-semibold mb-2">Премиум подписок</div>
              <div className="text-muted-foreground">Конверсия в платную версию</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы создать фитнес-приложение?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Разработаем персональное решение для здоровья и фитнеса с современными технологиями
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Начать разработку
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FitTracker;
