
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Консультации",
      description: "Профессиональные консультации по вашему направлению с индивидуальным подходом и практическими рекомендациями.",
      features: ["Индивидуальный подход", "Практические решения", "Долгосрочная поддержка"],
      price: "от 5 000 ₽",
      link: "/services/consultation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Разработка решений",
      description: "Создание эффективных решений для вашего бизнеса с учетом всех особенностей и требований.",
      features: ["Современные технологии", "Гибкие решения", "Полная интеграция"],
      price: "от 15 000 ₽",
      link: "/services/development"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Поддержка и сопровождение",
      description: "Комплексная поддержка и сопровождение проектов на всех этапах реализации.",
      features: ["Круглосуточная поддержка", "Регулярные обновления", "Мониторинг системы"],
      price: "от 8 000 ₽",
      link: "/services/support"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр профессиональных услуг для решения ваших задач
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
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
                <Link 
                  to={service.link}
                  className="flex items-center text-accent hover:text-primary transition-colors group"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-3xl font-bold mb-4">
            Не знаете, какая услуга вам нужна?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию и мы поможем определить оптимальное решение
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
