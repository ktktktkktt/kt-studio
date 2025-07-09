
import { Database, Shield, Zap, Users, BarChart3, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebApp = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Панель администратора",
      description: "Удобная система управления контентом и пользователями"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Безопасность",
      description: "Многоуровневая система защиты данных и авторизации"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API интеграции",
      description: "Интеграция с внешними сервисами и системами"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Многопользовательский доступ",
      description: "Система ролей и прав доступа для команды"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Аналитика и отчеты",
      description: "Детальная статистика и настраиваемые отчеты"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Автоматизация процессов",
      description: "Настройка бизнес-логики и рабочих процессов"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"
  ];

  const steps = [
    "Анализ требований и планирование архитектуры",
    "Создание MVP с базовым функционалом",
    "Разработка основных модулей системы",
    "Интеграция с внешними сервисами",
    "Тестирование и оптимизация",
    "Развертывание и запуск в продакшен"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-gradient">Веб-приложения</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Создаем мощные SaaS-приложения и системы управления для автоматизации ваших бизнес-процессов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="btn-primary">
                  Обсудить проект
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Примеры работ
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Веб-приложения"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности наших веб-приложений</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный набор инструментов для управления вашим бизнесом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-xl p-4 w-fit mb-6">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Современные технологии</h2>
            <p className="text-xl text-gray-600">
              Используем проверенный стек технологий для создания надежных решений
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white px-6 py-3 rounded-full font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Процесс разработки</h2>
            <p className="text-xl text-gray-600">
              Пошаговый подход к созданию вашего веб-приложения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы создать веб-приложение для вашего бизнеса?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Получите персональную консультацию и техническое задание бесплатно
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebApp;
