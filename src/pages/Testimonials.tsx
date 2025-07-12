
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      company: "TechStore",
      position: "Директор по маркетингу",
      content: "Отличная работа! Наш интернет-магазин получился современным и удобным. Продажи выросли на 45% за первые 3 месяца после запуска. Команда работала профессионально, соблюдая все сроки и требования.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      project: "Интернет-магазин электроники",
      result: "+45% продаж"
    },
    {
      name: "Мария Сидорова", 
      company: "DevCorp",
      position: "CEO",
      content: "Профессиональный подход и внимание к деталям. Корпоративный сайт полностью соответствует нашим требованиям и превзошел ожидания. Особенно понравилась работа с дизайном и пользовательским опытом.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      project: "Корпоративный сайт",
      result: "+60% заявок"
    },
    {
      name: "Дмитрий Козлов",
      company: "FinTech Startup", 
      position: "Основатель",
      content: "Благодаря качественному лендингу нам удалось привлечь инвесторов. Конверсия составила 12%, что значительно выше среднего по рынку. Результат превзошел все ожидания!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      project: "Landing Page",
      result: "12% конверсия"
    },
    {
      name: "Елена Волкова",
      company: "StyleShop",
      position: "Владелица бизнеса",
      content: "Создали потрясающий интернет-магазин одежды. Система фильтрации работает идеально, клиенты легко находят нужные товары. Средний чек увеличился на 35%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      project: "Интернет-магазин одежды",
      result: "+35% средний чек"
    },
    {
      name: "Игорь Смирнов",
      company: "MedCenter",
      position: "Главный врач",
      content: "Система онлайн-записи значительно упростила работу с пациентами. 70% записей теперь происходит через сайт, что разгрузило наш call-центр.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      project: "Медицинский портал",
      result: "70% онлайн-записей"
    },
    {
      name: "Анна Кузнецова",
      company: "EduPlatform",
      position: "Методист",
      content: "Платформа для онлайн-обучения получилась очень удобной. Студенты отмечают простоту интерфейса и стабильную работу. Завершаемость курсов увеличилась до 78%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      project: "Образовательная платформа",
      result: "78% завершение курсов"
    }
  ];

  const stats = [
    { number: "150+", label: "Довольных клиентов" },
    { number: "4.9", label: "Средняя оценка" },
    { number: "98%", label: "Рекомендуют нас" },
    { number: "45%", label: "Средний рост продаж" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Отзывы клиентов</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Мнения наших клиентов о качестве работы и достигнутых результатах
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-card-foreground italic pl-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Project Info */}
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-sm text-muted-foreground">Проект:</div>
                      <div className="text-foreground">{testimonial.project}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm text-muted-foreground">Результат:</div>
                      <div className="text-accent font-bold">{testimonial.result}</div>
                    </div>
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-accent">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Почему клиенты выбирают нас</h2>
            <p className="text-xl text-muted-foreground">
              Основные причины успешного сотрудничества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Качество и сроки",
                description: "Соблюдаем все договоренности и сдаем проекты вовремя",
                percentage: "100%"
              },
              {
                title: "Постоянная связь",
                description: "Регулярно информируем о ходе работ и обсуждаем изменения",
                percentage: "24/7"
              },
              {
                title: "Гарантия результата",
                description: "Предоставляем гарантию на все выполненные работы",
                percentage: "1 год"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-lg border">
                <div className="text-4xl font-bold text-accent mb-4">{item.percentage}</div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Станьте нашим следующим довольным клиентом
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обсудим ваш проект и покажем, как мы можем помочь достичь ваших бизнес-целей
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200 inline-flex items-center text-sm sm:text-base">
            Обсудить проект
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
