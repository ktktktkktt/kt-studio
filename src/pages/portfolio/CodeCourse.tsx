
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Code, Play, DollarSign, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeCourse = () => {
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
                Landing Page для курсов программирования <span className="text-gradient">CodeCourse</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Высококонверсионная посадочная страница для онлайн-курсов с видео-презентациями и интегрированной системой оплаты
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2024</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Образование</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  <span>Landing Page</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Посетить лендинг
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожий
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="CodeCourse лендинг курсов"
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
                  CodeCourse - это образовательная платформа, которая нуждалась в эффективном лендинге для привлечения 
                  студентов на курсы программирования. Главной задачей было создать страницу с высокой конверсией, 
                  которая убедительно презентует ценность курсов.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Ключевые элементы лендинга:</h3>
                <ul className="space-y-2">
                  <li>• Цепляющий заголовок с четким value proposition</li>
                  <li>• Промо-видео с преподавателем и отзывами студентов</li>
                  <li>• Детальная программа курса с модулями</li>
                  <li>• Блок социальных доказательств и отзывов</li>
                  <li>• Прозрачная ценовая политика с таймером акции</li>
                  <li>• Многоступенчатая форма регистрации</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Conversion-оптимизация:</h3>
                <ul className="space-y-2">
                  <li>• A/B тестирование заголовков и CTA кнопок</li>
                  <li>• Психологические триггеры (ограниченность, социальное доказательство)</li>
                  <li>• Оптимизация скорости загрузки (&lt; 2 сек)</li>
                  <li>• Мобильная адаптация для всех устройств</li>
                  <li>• Персонализация контента для разных источников трафика</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Code className="w-5 h-5 text-accent mr-3" />
                    <span>React + Next.js</span>
                  </div>
                  <div className="flex items-center">
                    <Play className="w-5 h-5 text-accent mr-3" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-accent mr-3" />
                    <span>Stripe</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-accent mr-3" />
                    <span>Vimeo API</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">6 недель</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Видео контент:</span>
                    <span className="font-medium">15+ часов</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Курсов:</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Языки:</span>
                    <span className="font-medium">RU/EN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="CodeCourse программа курса"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="CodeCourse отзывы студентов"
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
              <div className="text-4xl font-bold text-accent mb-2">18%</div>
              <div className="text-lg font-semibold mb-2">Конверсия</div>
              <div className="text-gray-600">Посетителей покупают курс</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">+200%</div>
              <div className="text-lg font-semibold mb-2">Рост регистраций</div>
              <div className="text-gray-600">По сравнению со старым лендингом</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">+25%</div>
              <div className="text-lg font-semibold mb-2">Средний чек</div>
              <div className="text-gray-600">Увеличение стоимости покупки</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужен высококонверсионный лендинг?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Создадим эффективную посадочную страницу, которая превращает посетителей в клиентов
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Заказать лендинг
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CodeCourse;
