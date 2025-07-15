
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Shield, Heart, Clock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedCenter = () => {
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
                Корпоративный сайт <span className="text-gradient">медицинского центра</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современный сайт с системой онлайн-записи, личным кабинетом и интеграцией с медицинской информационной системой
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2023</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>Медицина</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Безопасность данных</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Посетить сайт
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожий
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Медицинский центр сайт"
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
                  Медицинский центр "Здоровье+" нуждался в современном сайте, который бы упростил процесс записи 
                  к врачам и взаимодействие с пациентами. Особое внимание уделялось безопасности персональных данных 
                  и соответствию медицинским стандартам.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Решенные задачи:</h3>
                <ul className="space-y-2">
                  <li>• Система онлайн-записи к врачам с выбором времени</li>
                  <li>• Личный кабинет пациента с историей посещений</li>
                  <li>• Интеграция с медицинской информационной системой</li>
                  <li>• Каталог услуг с ценами и описаниями</li>
                  <li>• Система уведомлений о записях</li>
                  <li>• Онлайн-консультации (телемедицина)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Безопасность и соответствие:</h3>
                <ul className="space-y-2">
                  <li>• Соответствие требованиям GDPR и ФЗ-152</li>
                  <li>• Шифрование всех персональных данных</li>
                  <li>• Двухфакторная аутентификация</li>
                  <li>• Аудит всех действий пользователей</li>
                  <li>• Резервное копирование данных</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-accent mr-3" />
                    <span>Angular 15</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-accent mr-3" />
                    <span>Django + DRF</span>
                  </div>
                  <div className="flex items-center">
                    <UserCheck className="w-5 h-5 text-accent mr-3" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <span>WebRTC</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">4 месяца</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Врачей в системе:</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Услуг:</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Безопасность:</span>
                    <span className="font-medium">ISO 27001</span>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="text-4xl font-bold text-accent mb-2">70%</div>
              <div className="text-lg font-semibold mb-2">Онлайн-записи</div>
              <div className="text-muted-foreground">Пациентов записываются через сайт</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">-50%</div>
              <div className="text-lg font-semibold mb-2">Нагрузка на call-центр</div>
              <div className="text-muted-foreground">Снижение количества телефонных звонков</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Довольные пациенты</div>
              <div className="text-muted-foreground">Положительные отзывы о сервисе</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужен сайт для медицинского учреждения?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Создадим безопасное и удобное решение с соблюдением всех медицинских стандартов
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MedCenter;
