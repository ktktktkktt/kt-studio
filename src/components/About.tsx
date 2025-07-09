
import { Award, Users, Clock, TrendingUp, Shield, Target } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: "Реализованных проектов",
      description: "Сайты различной сложности"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "7+",
      label: "Лет опыта",
      description: "В веб-разработке и дизайне"
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
      label: "Техподдержка",
      description: "Всегда готовы помочь"
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Экспертность",
      description: "Команда профессионалов с опытом работы более 7 лет в сфере веб-разработки"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Гарантии",
      description: "Предоставляем гарантию на все виды работ и техническую поддержку"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Результат",
      description: "Создаем сайты, которые работают на ваш бизнес и приносят реальную прибыль"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Почему выбирают нас для создания сайтов?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы создаем не просто сайты, а эффективные инструменты для развития вашего бизнеса. 
              Каждый проект - это индивидуальный подход и качественное решение.
            </p>
            
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <div className="text-accent">
                      {advantage.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Наши принципы работы</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Точное соблюдение сроков и бюджета</li>
                <li>• Регулярная отчетность о ходе работ</li>
                <li>• Использование современных технологий</li>
                <li>• Тестирование на всех устройствах</li>
                <li>• Обучение работе с сайтом</li>
              </ul>
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
