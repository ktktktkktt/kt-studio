
import { Monitor, Smartphone, Globe, ArrowRight, Database, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/utils/animations';

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Корпоративные сайты",
      description: "Профессиональные представительские сайты для бизнеса любого размера с современным дизайном и функциональностью.",
      price: "от 50 000 ₽",
      features: [
        "Адаптивный дизайн",
        "SEO-оптимизация", 
        "Система управления контентом",
        "Интеграция с CRM"
      ],
      link: "/services/corporate",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Интернет-магазины",
      description: "Полнофункциональные онлайн-магазины с системой заказов, оплаты и управления товарами.",
      price: "от 80 000 ₽",
      features: [
        "Каталог товаров",
        "Корзина и оплата",
        "Админ-панель",
        "Интеграция с 1С"
      ],
      link: "/services/ecommerce",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Landing Page",
      description: "Высококонверсионные посадочные страницы для рекламных кампаний и продвижения продуктов.",
      price: "от 25 000 ₽",
      features: [
        "Высокая конверсия",
        "Быстрая загрузка",
        "A/B тестирование",
        "Подключение аналитики"
      ],
      link: "/services/landing",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Веб-приложения",
      description: "Современные SaaS-приложения и системы управления для автоматизации бизнес-процессов.",
      price: "от 120 000 ₽",
      features: [
        "Панель администратора",
        "API интеграции",
        "Система уведомлений",
        "Аналитика и отчеты"
      ],
      link: "/services/webapp",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Мобильные приложения",
      description: "Нативные и гибридные мобильные приложения для iOS и Android с современным UX/UI.",
      price: "от 150 000 ₽",
      features: [
        "iOS и Android",
        "Push-уведомления",
        "Офлайн режим",
        "App Store размещение"
      ],
      link: "/services/mobile",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Техническая поддержка",
      description: "Обслуживание и развитие существующих проектов, исправление ошибок и добавление функций.",
      price: "от 15 000 ₽/мес",
      features: [
        "24/7 мониторинг",
        "Резервное копирование",
        "Обновления безопасности",
        "Техническая консультация"
      ],
      link: "/services/support",
      gradient: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" ref={servicesRef}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          servicesVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по созданию и развитию веб-проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 ${
                servicesVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className={`bg-gradient-to-r ${service.gradient} rounded-xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-2xl font-bold text-primary mb-6">
                {service.price}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-accent font-semibold group-hover:text-primary transition-colors">
                Подробнее
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
