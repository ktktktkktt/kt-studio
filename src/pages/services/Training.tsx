
import { ArrowRight, CheckCircle, BookOpen, Users, Clock, Award, Play, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Training = () => {
  const courses = [
    {
      title: "Основы веб-разработки",
      description: "HTML, CSS, JavaScript для начинающих",
      duration: "8 недель",
      format: "Онлайн/Офлайн",
      price: "30 000 ₽",
      level: "Начинающий",
      topics: ["HTML5 семантика", "CSS3 и Flexbox", "JavaScript ES6+", "Работа с DOM", "Git и GitHub"]
    },
    {
      title: "React разработка",
      description: "Современная фронтенд разработка на React",
      duration: "10 недель", 
      format: "Онлайн",
      price: "45 000 ₽",
      level: "Средний",
      topics: ["Components и JSX", "State Management", "React Hooks", "Роутинг", "Тестирование"]
    },
    {
      title: "Fullstack разработка",
      description: "Полный стек Node.js + React",
      duration: "16 недель",
      format: "Онлайн/Офлайн", 
      price: "80 000 ₽",
      level: "Продвинутый",
      topics: ["Node.js и Express", "Базы данных", "REST API", "Authentication", "Деплой"]
    }
  ];

  const formats = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Групповые занятия",
      description: "Изучение в команде единомышленников",
      features: ["До 8 человек в группе", "Интерактивные занятия", "Peer review", "Командные проекты"],
      price: "Стандартная цена"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Индивидуальные занятия",
      description: "Персональный подход и гибкий график",
      features: ["1 на 1 с ментором", "Гибкий график", "Персональные задачи", "Быстрый прогресс"],
      price: "+50% к стоимости"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Видео-курсы",
      description: "Самостоятельное изучение в своем темпе",
      features: ["Доступ 24/7", "Практические задания", "Поддержка в чате", "Сертификат"],
      price: "-30% от стоимости"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Обучение</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Изучите веб-разработку с опытными наставниками. Практические курсы от HTML до полноценных приложений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="btn-primary">
              Записаться на курс
            </Link>
            <button className="btn-secondary flex items-center group">
              <Play className="w-5 h-5 mr-2" />
              Бесплатный урок
            </button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Курсы</h2>
            <p className="text-xl text-gray-600">
              Выберите курс, соответствующий вашему уровню подготовки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.level === 'Начинающий' ? 'bg-green-100 text-green-800' :
                    course.level === 'Средний' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-accent mr-3" />
                    <span className="text-gray-700">{course.format}</span>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-primary mb-6">{course.price}</div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Что изучим:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/contacts" className="btn-primary w-full text-center">
                  Записаться
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Форматы обучения</h2>
            <p className="text-xl text-gray-600">
              Выберите удобный для вас формат изучения материала
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-accent mb-6">
                  {format.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{format.title}</h3>
                <p className="text-gray-600 mb-6">{format.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-lg font-semibold text-primary">{format.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Code className="w-8 h-8" />, title: "Практический подход", description: "80% времени - практика на реальных проектах" },
              { icon: <Users className="w-8 h-8" />, title: "Опытные менторы", description: "Преподаватели с 5+ лет коммерческого опыта" },
              { icon: <Award className="w-8 h-8" />, title: "Сертификат", description: "Получите сертификат о прохождении курса" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Поддержка", description: "Помощь с трудоустройством и развитием карьеры" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Начните изучение веб-разработки уже сегодня
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию и получите персональный план обучения
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

export default Training;
