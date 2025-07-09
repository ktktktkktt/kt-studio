
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "100+",
      label: "Довольных клиентов",
      description: "Успешно реализованных проектов"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5+",
      label: "Лет опыта",
      description: "В сфере профессиональных услуг"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      label: "Довольных клиентов",
      description: "Рекомендуют нас друзьям"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "24/7",
      label: "Поддержка",
      description: "Всегда готовы помочь"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы предоставляем профессиональные услуги высокого качества с индивидуальным подходом к каждому клиенту.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Профессиональный подход</h3>
                  <p className="text-gray-600">
                    Высокий уровень экспертизы и внимание к деталям в каждом проекте
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
                  <p className="text-gray-600">
                    Каждое решение адаптировано под ваши конкретные потребности и цели
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 rounded-full p-3 mr-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Быстрая реализация</h3>
                  <p className="text-gray-600">
                    Оптимизированные процессы работы для достижения результата в кратчайшие сроки
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-accent mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
