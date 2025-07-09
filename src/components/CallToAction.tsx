
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-6">
          Готовы обсудить ваш проект?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами для получения персональной консультации и расчета стоимости
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="tel:+7" 
            className="flex items-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Позвонить сейчас
          </a>
          <a 
            href="mailto:info@tkachenko-kirill.ru"
            className="flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Написать email
          </a>
          <button className="flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
            <MessageCircle className="w-5 h-5 mr-2" />
            Онлайн-чат
          </button>
        </div>
        
        <div className="text-center opacity-80">
          <p className="text-sm">
            Ответим в течение 30 минут • Консультация бесплатно • Работаем по договору
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
