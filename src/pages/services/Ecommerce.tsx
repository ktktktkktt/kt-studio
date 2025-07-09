
import { ArrowLeft, CheckCircle, Clock, DollarSign, Shield, Zap, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Безопасные платежи",
      description: "Интеграция с надежными платежными системами"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Личный кабинет",
      description: "Удобный интерфейс для клиентов и администраторов"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Аналитика продаж",
      description: "Подробная статистика и отчеты по продажам"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Быстрая работа",
      description: "Оптимизированная производительность сайта"
    }
  ];

  const packages = [
    {
      name: "Базовый",
      price: "80 000 ₽",
      features: [
        "Каталог до 100 товаров",
        "Корзина и оформление заказа",
        "Интеграция с одной платежной системой",
        "Адаптивный дизайн",
        "Базовая админ-панель"
      ]
    },
    {
      name: "Стандартный",
      price: "120 000 ₽",
      features: [
        "Каталог до 500 товаров",
        "Несколько способов оплаты",
        "Система скидок и купонов",
        "Интеграция с 1С",
        "Расширенная аналитика"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "200 000 ₽",
      features: [
        "Неограниченный каталог",
        "Мультиязычность",
        "API для интеграций",
        "Система лояльности",
        "Техподдержка 6 месяцев"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Анализ требований",
      description: "Изучаем вашу нишу, конкурентов и потребности клиентов"
    },
    {
      number: "02",
      title: "Проектирование",
      description: "Создаем структуру каталога и пользовательские сценарии"
    },
    {
      number: "03",
      title: "Дизайн",
      description: "Разрабатываем уникальный дизайн, ориентированный на конверсию"
    },
    {
      number: "04",
      title: "Разработка",
      description: "Программируем функционал и интегрируем необходимые сервисы"
    },
    {
      number: "05",
      title: "Тестирование",
      description: "Проверяем работоспособность всех функций и оптимизируем"
    },
    {
      number: "06",
      title: "Запуск",
      description: "Переносим сайт на хостинг и настраиваем аналитику"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-primary">Интернет-магазины</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Создание <span className="text-gradient">интернет-магазинов</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Разработаем полнофункциональный интернет-магазин с современным дизайном, 
                удобной системой управления и высокой конверсией.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Срок: 3-8 недель</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">От 80 000 ₽</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary">
                  Получить консультацию
                </button>
                <Link to="/portfolio" className="btn-secondary">
                  Посмотреть примеры
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Интернет-магазин" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Что включает разработка интернет-магазина
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-accent mb-4 mx-auto w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Пакеты услуг и цены
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 ${pkg.popular ? 'ring-2 ring-accent shadow-xl scale-105' : 'shadow-lg'}`}>
                {pkg.popular && (
                  <div className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-accent text-white hover:bg-accent/90' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">
            Процесс разработки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-r from-primary to-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы запустить ваш интернет-магазин?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и коммерческое предложение для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Получить консультацию
            </button>
            <Link to="/portfolio" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Посмотреть портфолио
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
