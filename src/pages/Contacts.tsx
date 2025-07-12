
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contacts = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Контакты</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Телефон</h3>
                    <p className="text-muted-foreground mb-2">
                      <a href="tel:+79001234567" className="hover:text-accent transition-colors">
                        +7 (900) 123-45-67
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Пн-Пт: 9:00-18:00, Сб: 10:00-16:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@tkachenko-kirill.ru" className="hover:text-accent transition-colors">
                        info@tkachenko-kirill.ru
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ответим в течение 30 минут
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, Россия</p>
                    <p className="text-sm text-muted-foreground">
                      Встречи по предварительной записи
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full p-3 mr-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00-18:00</p>
                    <p className="text-muted-foreground">Сб: 10:00-16:00</p>
                    <p className="text-sm text-muted-foreground">
                      Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center text-foreground">
                  <MessageCircle className="w-5 h-5 mr-2 text-accent" />
                  Мессенджеры
                </h3>
                <p className="text-muted-foreground mb-4">
                  Для быстрого общения используйте мессенджеры
                </p>
                <div className="flex space-x-4">
                  <a href="https://t.me/tkachenko_kirill" className="flex items-center text-accent hover:text-primary transition-colors">
                    <span className="mr-2">📱</span>
                    <span>Telegram</span>
                  </a>
                  <a href="https://wa.me/79001234567" className="flex items-center text-accent hover:text-primary transition-colors">
                    <span className="mr-2">💬</span>
                    <span>WhatsApp</span>
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
