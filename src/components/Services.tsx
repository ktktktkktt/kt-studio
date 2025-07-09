
import { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Monitor, Smartphone, ShoppingCart, Search, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/utils/animations';
import ConsultationModal from './ConsultationModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useScrollAnimation(0.1);
  const servicesRef = useScrollAnimation(0.1);

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Корпоративные сайты",
      description: "Создание представительских сайтов для вашего бизнеса с современным дизайном и удобной навигацией.",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "Система управления контентом"],
      price: "от 45 000 ₽",
      link: "/services/corporate"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Интернет-магазины",
      description: "Разработка полнофункциональных интернет-магазинов с системой заказов и оплаты.",
      features: ["Каталог товаров", "Корзина и оплата", "Панель администратора"],
      price: "от 80 000 ₽",
      link: "/services/ecommerce"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Landing Page",
      description: "Эффективные посадочные страницы для рекламных кампаний с высокой конверсией.",
      features: ["Высокая конверсия", "Быстрая загрузка", "A/B тестирование"],
      price: "от 25 000 ₽",
      link: "/services/landing"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Веб-приложения",
      description: "Разработка сложных веб-приложений и SaaS-решений с современными технологиями.",
      features: ["React/Vue.js", "REST API", "Базы данных"],
      price: "от 120 000 ₽",
      link: "/services/webapp"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO-продвижение",
      description: "Комплексное продвижение сайта в поисковых системах для увеличения органического трафика.",
      features: ["Техническое SEO", "Контент-маркетинг", "Анализ конкурентов"],
      price: "от 30 000 ₽",
      link: "/services/seo"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Техническая поддержка",
      description: "Обновление, доработка и техническое сопровождение существующих сайтов.",
      features: ["Исправление ошибок", "Обновления", "Регулярные бэкапы"],
      price: "от 15 000 ₽",
      link: "/services/support"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Услуги по разработке сайтов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг для создания и развития вашего онлайн-присутствия
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`bg-gray-50 rounded-2xl p-8 hover-lift hover-glow transition-all duration-300 group cursor-pointer block animate-on-scroll stagger-${((index % 6) + 1)}`}
            >
              <div className="text-accent mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {service.price}
                </span>
                <div className="flex items-center text-accent group-hover:text-primary transition-colors">
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white hover-lift">
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-300 float-animation" />
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Не можете выбрать подходящую услугу?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию, и мы поможем определить оптимальное решение для вашего бизнеса
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200"
          >
            Получить консультацию
          </button>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Services;
