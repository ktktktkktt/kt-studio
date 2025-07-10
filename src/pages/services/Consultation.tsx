
import { ArrowRight, CheckCircle, Clock, Users, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consultation = () => {
  const consultationTypes = [
    {
      title: "Техническая консультация",
      description: "Анализ технических решений, архитектуры проекта и выбор технологий",
      duration: "1-2 часа",
      price: "от 5 000 ₽",
      features: ["Анализ требований", "Выбор технологий", "Планирование архитектуры", "Оценка сложности"]
    },
    {
      title: "Стратегическая консультация",
      description: "Планирование развития продукта, анализ рынка и бизнес-стратегии",
      duration: "2-3 часа",
      price: "от 8 000 ₽",
      features: ["Анализ рынка", "Планирование MVP", "Roadmap развития", "Монетизация"]
    },
    {
      title: "Консультация по дизайну",
      description: "UX/UI аудит, планирование пользовательского опыта",
      duration: "1-2 часа", 
      price: "от 6 000 ₽",
      features: ["UX аудит", "UI анализ", "Wireframes", "Прототипирование"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Консультации</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Профессиональные консультации по веб-разработке, техническим решениям и бизнес-стратегии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="btn-primary">
              Записаться на консультацию
            </Link>
            <button className="btn-secondary flex items-center group">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Виды консультаций</h2>
            <p className="text-xl text-gray-600">
              Подберем формат консультации под ваши задачи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-accent mr-2" />
                  <span className="text-gray-700">{type.duration}</span>
                </div>
                
                <div className="text-3xl font-bold text-primary mb-6">{type.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contacts" className="btn-primary w-full text-center">
                  Выбрать
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как проходит консультация</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Заявка", description: "Оставляете заявку и описываете задачу" },
              { step: "2", title: "Подготовка", description: "Анализируем вашу ситуацию и готовим план встречи" },
              { step: "3", title: "Консультация", description: "Проводим встречу онлайн или очно" },
              { step: "4", title: "Отчет", description: "Предоставляем письменные рекомендации" }
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
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную 30-минутную консультацию и получите план развития вашего проекта
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200 inline-flex items-center">
            Записаться на консультацию
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
