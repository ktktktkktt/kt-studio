
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Консультации",
      description: "Профессиональные консультации по вашему направлению с индивидуальным подходом",
      price: "от 5 000 ₽",
      duration: "1-2 часа",
      features: [
        "Детальный анализ ситуации",
        "Практические рекомендации",
        "Пошаговый план действий",
        "Поддержка в течение недели"
      ],
      popular: false
    },
    {
      title: "Разработка решений",
      description: "Создание эффективных решений для вашего бизнеса с учетом всех особенностей",
      price: "от 15 000 ₽",
      duration: "1-4 недели",
      features: [
        "Анализ требований",
        "Техническое задание",
        "Разработка и тестирование",
        "Внедрение и настройка",
        "Обучение сотрудников"
      ],
      popular: true
    },
    {
      title: "Поддержка и сопровождение",
      description: "Комплексная поддержка и сопровождение проектов на всех этапах",
      price: "от 8 000 ₽",
      duration: "Постоянно",
      features: [
        "Круглосуточная поддержка",
        "Регулярные обновления",
        "Мониторинг системы",
        "Резервное копирование"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            Наши <span className="text-gradient">услуги</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Мы предоставляем полный спектр профессиональных услуг для решения ваших задач
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-2 border-accent' : 'border border-gray-200'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Популярное
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${
                  service.popular 
                    ? 'bg-accent text-white hover:bg-accent/90' 
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}>
                  Выбрать услугу
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Как проходит консультация?",
                  answer: "Консультация проходит в удобном для вас формате: лично, по телефону или онлайн. Мы детально разбираем вашу ситуацию и предоставляем практические рекомендации."
                },
                {
                  question: "Сколько времени занимает разработка?",
                  answer: "Время разработки зависит от сложности проекта. Простые решения — 1-2 недели, сложные проекты — до 4 недель. Точные сроки обсуждаются индивидуально."
                },
                {
                  question: "Предоставляете ли вы гарантию?",
                  answer: "Да, мы предоставляем гарантию на все виды работ. Для консультаций — поддержка в течение недели, для разработки — 6 месяцев гарантии."
                },
                {
                  question: "Можно ли заказать услугу частично?",
                  answer: "Конечно! Мы предлагаем гибкие условия сотрудничества. Можете заказать только консультацию или отдельные этапы разработки."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию и узнайте, как мы можем помочь вам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Связаться с нами
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Посмотреть портфолио
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
