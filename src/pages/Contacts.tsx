
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contacts = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Контакты</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:+7" className="hover:text-accent transition-colors">
                        +7 (___) ___-__-__
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Пн-Пт: 9:00-18:00, Сб-Вс: по договоренности
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@tkachenko-kirill.ru" className="hover:text-accent transition-colors">
                        info@tkachenko-kirill.ru
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Ответим в течение часа в рабочее время
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-gray-600">г. Москва, Россия</p>
                    <p className="text-sm text-gray-500">
                      Встречи по предварительной записи
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Время работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                    <p className="text-sm text-gray-500">
                      Выходные: консультации по договоренности
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Быстрый контакт</h3>
                <p className="text-gray-600 mb-4">
                  Для срочных вопросов звоните по телефону или пишите в мессенджеры
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-accent hover:text-primary transition-colors">
                    <span className="mr-2">Telegram</span>
                  </a>
                  <a href="#" className="flex items-center text-accent hover:text-primary transition-colors">
                    <span className="mr-2">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
