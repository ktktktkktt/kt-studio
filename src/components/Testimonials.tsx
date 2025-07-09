
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Иванов",
      position: "Директор ООО «Техносфера»",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Отличная работа! Сайт получился именно таким, как мы хотели. Команда профессиональная, сроки соблюдены, результат превзошел ожидания."
    },
    {
      name: "Марина Петрова",
      position: "Владелец интернет-магазина",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Создали для нас интернет-магазин с нуля. Удобная админка, красивый дизайн, все работает быстро. Продажи выросли в 3 раза!"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Маркетолог",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Заказывали landing page для рекламной кампании. Конверсия получилась выше ожидаемой. Рекомендую для серьезных проектов."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения реальных клиентов о качестве наших услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                <p className="text-gray-700 relative z-10 pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
