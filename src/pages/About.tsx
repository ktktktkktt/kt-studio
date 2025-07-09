
import { Award, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      year: "2019",
      title: "Начало карьеры",
      description: "Запуск первых проектов и формирование экспертизы"
    },
    {
      year: "2021",
      title: "Расширение услуг",
      description: "Добавление новых направлений и увеличение команды"
    },
    {
      year: "2023",
      title: "Признание экспертизы",
      description: "Получение профессиональных сертификатов"
    },
    {
      year: "2024",
      title: "Новые горизонты",
      description: "Развитие инновационных решений и методик"
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Профессионализм",
      description: "Высокие стандарты качества и экспертный подход к каждому проекту"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Клиентоориентированность",
      description: "Индивидуальный подход и внимание к потребностям каждого клиента"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Надежность",
      description: "Соблюдение сроков и выполнение обязательств в полном объеме"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Развитие",
      description: "Постоянное совершенствование и внедрение новых технологий"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                О <span className="text-gradient">компании</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Мы помогаем бизнесу и частным лицам находить эффективные решения их задач. 
                Наш опыт и профессионализм — ваш успех.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Кирилл Ткаченко</h3>
              <p className="text-gray-600 mb-6">
                Профессиональный консультант с многолетним опытом работы в сфере бизнес-решений. 
                Специализируется на создании эффективных стратегий и индивидуальном подходе к каждому клиенту.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-gray-700">Сертифицированный специалист</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-gray-700">Более 100 успешных проектов</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-gray-700">Постоянное развитие экспертизы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Наши ценности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-accent/10 transition-colors">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Наш путь</h2>
              <p className="text-xl text-gray-600">
                Ключевые этапы развития компании
              </p>
            </div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mr-8 flex-shrink-0">
                    {achievement.year}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
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
            Готовы работать с профессионалами?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами и получите персональную консультацию
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
