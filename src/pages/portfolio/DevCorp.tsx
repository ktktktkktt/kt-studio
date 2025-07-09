
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Globe, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevCorp = () => {
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
                Корпоративный сайт IT-компании <span className="text-gradient">DevCorp</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Разработка представительского сайта с портфолио проектов, блогом и системой управления контентом
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2023</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>IT-компания</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Корпоративный сайт</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Просмотреть сайт
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Обсудить проект
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="DevCorp корпоративный сайт"
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
                  DevCorp - это современная IT-компания, которая нуждалась в профессиональном 
                  представительском сайте для демонстрации своих услуг и экспертизы.
                </p>
                <p>
                  Главной задачей было создать сайт, который бы отражал инновационный подход компании 
                  и помогал привлекать новых клиентов и талантливых сотрудников.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Решенные задачи:</h3>
                <ul className="space-y-2">
                  <li>• Создание современного и профессионального дизайна</li>
                  <li>• Разработка удобной системы управления контентом</li>
                  <li>• Интеграция с CRM системой для обработки заявок</li>
                  <li>• Оптимизация для поисковых систем</li>
                  <li>• Адаптивность для всех устройств</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Особенности:</h3>
                <ul className="space-y-2">
                  <li>• Интерактивное портфолио проектов</li>
                  <li>• Блог с техническими статьями</li>
                  <li>• Система онлайн-заявок</li>
                  <li>• Интеграция с социальными сетями</li>
                  <li>• Многоязычность (RU/EN)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-accent mr-3" />
                    <span>Vue.js</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-accent mr-3" />
                    <span>Laravel</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-accent mr-3" />
                    <span>MySQL</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    <span>Redis</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">3 месяца</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Страниц:</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Языки:</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Админ панель:</span>
                    <span className="font-medium">Да</span>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="text-4xl font-bold text-accent mb-2">+60%</div>
              <div className="text-lg font-semibold mb-2">Рост заявок</div>
              <div className="text-gray-600">Увеличение количества обращений потенциальных клиентов</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">120%</div>
              <div className="text-lg font-semibold mb-2">Время на сайте</div>
              <div className="text-gray-600">Пользователи стали проводить больше времени на сайте</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">ТОП-10</div>
              <div className="text-lg font-semibold mb-2">Позиции в Google</div>
              <div className="text-gray-600">По ключевым запросам в поисковой выдаче</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Хотите создать подобный проект?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обсудим ваши задачи и создадим эффективное решение для вашего бизнеса
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Начать проект
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DevCorp;
