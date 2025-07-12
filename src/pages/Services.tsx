
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
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-background to-muted">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Услуги</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр услуг по созданию и развитию веб-проектов
          </p>
        </div>
      </section>
      
      <section ref={servicesRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border hover:border-accent/20 ${
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
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-card-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-2xl font-bold text-primary mb-6">
                  {service.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-accent font-semibold group-hover:text-primary transition-colors text-sm sm:text-base">
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
