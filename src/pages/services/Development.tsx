
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Development = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Веб-сайты",
      description: "Корпоративные сайты, лендинги и блоги",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "CMS интеграция", "Аналитика"],
      price: "от 50 000 ₽"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Веб-приложения",
      description: "SaaS, CRM, административные панели",
      features: ["Современный стек", "API интеграция", "Безопасность", "Масштабируемость"],
      price: "от 150 000 ₽"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Мобильные приложения",
      description: "Native и кроссплатформенные решения",
      features: ["iOS/Android", "Push-уведомления", "Офлайн-режим", "App Store"],
      price: "от 200 000 ₽"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend разработка",
      description: "API, базы данных, серверная логика",
      features: ["REST/GraphQL API", "Базы данных", "Облачная инфраструктура", "Микросервисы"],
      price: "от 100 000 ₽"
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Разработка</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полный цикл разработки веб-сайтов, приложений и цифровых продуктов с использованием современных технологий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="btn-primary">
              Обсудить проект
            </Link>
            <Link to="/portfolio" className="btn-secondary flex items-center group">
              <Palette className="w-5 h-5 mr-2" />
              Посмотреть работы
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Услуги разработки</h2>
            <p className="text-xl text-gray-600">
              Создаем качественные цифровые решения для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="text-accent mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <Link to="/contacts" className="btn-primary">
                    Заказать
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Технологии</h2>
            <p className="text-xl text-gray-600">
              Используем современный стек технологий для достижения лучших результатов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="font-semibold text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Процесс разработки</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Анализ", description: "Изучаем требования и планируем архитектуру" },
              { step: "2", title: "Дизайн", description: "Создаем UX/UI дизайн и прототипы" },
              { step: "3", title: "Разработка", description: "Пишем код с использованием лучших практик" },
              { step: "4", title: "Тестирование", description: "Проводим всестороннее тестирование" },
              { step: "5", title: "Запуск", description: "Деплоим проект и обеспечиваем поддержку" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать разработку?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обсудим ваш проект, определим требования и составим план разработки
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200 inline-flex items-center">
            Начать проект
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Development;
