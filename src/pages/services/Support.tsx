
import { Shield, Clock, Database, HeadphonesIcon, Settings, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const services = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 мониторинг",
      description: "Круглосуточное наблюдение за работой вашего сайта"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Резервное копирование",
      description: "Автоматическое создание бэкапов данных"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Обновления безопасности",
      description: "Регулярные патчи и обновления системы"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Техническая поддержка",
      description: "Консультации по работе с сайтом"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Доработки и изменения",
      description: "Добавление нового функционала"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Мониторинг производительности",
      description: "Анализ скорости работы и оптимизация"
    }
  ];

  const plans = [
    {
      name: "Базовый",
      price: "15 000 ₽/мес",
      features: [
        "24/7 мониторинг",
        "Еженедельные бэкапы",
        "Обновления безопасности",
        "Email поддержка"
      ]
    },
    {
      name: "Стандартный",
      price: "25 000 ₽/мес",
      features: [
        "Все из базового плана",
        "Ежедневные бэкапы",
        "Мониторинг производительности",
        "Телефонная поддержка",
        "До 5 часов доработок"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "40 000 ₽/мес",
      features: [
        "Все из стандартного плана",
        "Приоритетная поддержка",
        "До 15 часов доработок",
        "Консультации по развитию",
        "Аналитические отчеты"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-gradient">Техническая поддержка</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Комплексное обслуживание и развитие ваших веб-проектов. Гарантируем стабильную работу и безопасность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="btn-primary">
                  Выбрать план
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Примеры работ
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Техническая поддержка"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Что входит в техподдержку</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг для поддержания вашего сайта в рабочем состоянии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-xl p-4 w-fit mb-6">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий план технической поддержки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-accent shadow-xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="bg-accent text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contacts" 
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Выбрать план
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужна техническая поддержка?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обеспечим стабильную работу вашего сайта и его развитие
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Support;
