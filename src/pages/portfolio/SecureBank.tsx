
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Shield, Lock, FileText, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecureBank = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation(0.1);
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className={`section-padding bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-1000 ${
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
                Корпоративный портал банка <span className="text-gradient">SecureBank</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Высокозащищенный корпоративный портал с системой документооборота, аналитикой и соответствием банковским стандартам
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2023</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Банковская сфера</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Высокая безопасность</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Демо портала
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Обсудить проект
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="SecureBank корпоративный портал"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section ref={detailsRef} className={`section-padding bg-white transition-all duration-1000 ${
        detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">О проекте</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  SecureBank - это комплексный корпоративный портал для крупного банка, разработанный с учетом 
                  строжайших требований безопасности и регулятивных норм банковской сферы.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Основные модули системы:</h3>
                <ul className="space-y-2">
                  <li>• Система электронного документооборота</li>
                  <li>• Модуль управления рисками</li>
                  <li>• Аналитическая панель с real-time данными</li>
                  <li>• CRM для работы с корпоративными клиентами</li>
                  <li>• Система управления персоналом</li>
                  <li>• Модуль комплаенс и отчетности</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Безопасность и соответствие:</h3>
                <ul className="space-y-2">
                  <li>• Соответствие стандартам PCI DSS</li>
                  <li>• Многофакторная аутентификация</li>
                  <li>• End-to-end шифрование данных</li>
                  <li>• Система контроля доступа на основе ролей</li>
                  <li>• Аудит всех операций и логирование</li>
                  <li>• Защита от DDoS и других кибератак</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Интеграции:</h3>
                <ul className="space-y-2">
                  <li>• Банковские АБС (Automated Banking System)</li>
                  <li>• Системы межбанковских переводов</li>
                  <li>• Регулятивные системы ЦБ РФ</li>
                  <li>• Enterprise Service Bus (ESB)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-accent mr-3" />
                    <span>Angular 16</span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 text-accent mr-3" />
                    <span>Spring Boot</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-accent mr-3" />
                    <span>Oracle Database</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-accent mr-3" />
                    <span>Kubernetes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">18 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Пользователей:</span>
                    <span className="font-medium">5000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Модулей:</span>
                    <span className="font-medium">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uptime:</span>
                    <span className="font-medium">99.99%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="SecureBank аналитическая панель"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="SecureBank документооборот"
              className="rounded-lg shadow-md hover-lift"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className={`section-padding bg-gray-50 transition-all duration-1000 ${
        resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Результаты проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Уровень безопасности</div>
              <div className="text-gray-600">Без критических инцидентов</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">+60%</div>
              <div className="text-lg font-semibold mb-2">Рост производительности</div>
              <div className="text-gray-600">Сотрудников банка</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">80%</div>
              <div className="text-lg font-semibold mb-2">Автоматизация процессов</div>
              <div className="text-gray-600">Ранее ручных операций</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужно корпоративное решение для банка?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Создадим высокозащищенную систему с соблюдением всех банковских стандартов и требований
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecureBank;
