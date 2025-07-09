
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, BookOpen, Video, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const EduPlatform = () => {
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
                Веб-приложение для онлайн-обучения <span className="text-gradient">EduPlatform</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Интерактивная образовательная платформа с видеокурсами, тестированием и системой сертификации
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
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Веб-приложение</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center">
                  Открыть платформу
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожую
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="EduPlatform образовательная платформа"
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
                  EduPlatform - это современная образовательная платформа, созданная для учебных заведений и 
                  корпоративного обучения. Платформа объединяет лучшие практики онлайн-образования и современные 
                  технологии для создания эффективной среды обучения.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Основной функционал:</h3>
                <ul className="space-y-2">
                  <li>• Система создания и управления курсами</li>
                  <li>• Интерактивные видеоуроки с субтитрами</li>
                  <li>• Система тестирования и экзаменов</li>
                  <li>• Личные кабинеты студентов и преподавателей</li>
                  <li>• Прогресс-трекинг и аналитика обучения</li>
                  <li>• Форумы и система обсуждений</li>
                  <li>• Выдача сертификатов и дипломов</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Интерактивные возможности:</h3>
                <ul className="space-y-2">
                  <li>• Виртуальные классы с видеоконференциями</li>
                  <li>• Система вебинаров и live-трансляций</li>
                  <li>• Интерактивные презентации и симуляторы</li>
                  <li>• Система peer-to-peer обучения</li>
                  <li>• Геймификация с баллами и достижениями</li>
                  <li>• Адаптивное обучение на основе ИИ</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Технические особенности:</h3>
                <ul className="space-y-2">
                  <li>• Масштабируемая архитектура для тысяч пользователей</li>
                  <li>• Интеграция с LMS стандартами (SCORM, xAPI)</li>
                  <li>• Мобильные приложения для iOS и Android</li>
                  <li>• Offline-режим для просмотра контента</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Технологии</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-accent mr-3" />
                    <span>React + TypeScript</span>
                  </div>
                  <div className="flex items-center">
                    <Video className="w-5 h-5 text-accent mr-3" />
                    <span>WebRTC</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-accent mr-3" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Время разработки:</span>
                    <span className="font-medium">14 месяцев</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Курсов:</span>
                    <span className="font-medium">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Преподавателей:</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Языков интерфейса:</span>
                    <span className="font-medium">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="EduPlatform видеоуроки"
              className="rounded-lg shadow-md hover-lift"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="EduPlatform тестирование"
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
              <div className="text-4xl font-bold text-accent mb-2">100K+</div>
              <div className="text-lg font-semibold mb-2">Студентов</div>
              <div className="text-gray-600">Зарегистрированных на платформе</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">78%</div>
              <div className="text-lg font-semibold mb-2">Завершение курсов</div>
              <div className="text-gray-600">Студентов успешно заканчивают обучение</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
              <div className="text-lg font-semibold mb-2">Средняя оценка</div>
              <div className="text-gray-600">Отзывы студентов о платформе</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Хотите создать образовательную платформу?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Разработаем современную LMS-систему для вашего учебного заведения или корпоративного обучения
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Обсудить платформу
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EduPlatform;
