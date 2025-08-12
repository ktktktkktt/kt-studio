
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "150+",
      label: "Проектов",
      description: "Сайтов различной сложности"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "120+",
      label: "Клиентов",
      description: "Довольных результатом"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "7+",
      label: "Лет",
      description: "Опыта в разработке"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      label: "Качества",
      description: "Положительных отзывов"
    }
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Цифры нашего успеха</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Результаты работы, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-foreground/10 rounded-full p-6 mb-4 mx-auto w-fit group-hover:bg-foreground/20 transition-colors">
                <div className="text-accent">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
