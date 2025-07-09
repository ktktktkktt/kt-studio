
import { Smartphone, Apple, Play, Bell, Wifi, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mobile = () => {
  const features = [
    {
      icon: <Apple className="w-6 h-6" />,
      title: "iOS разработка",
      description: "Нативные приложения для iPhone и iPad с использованием Swift"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Android разработка", 
      description: "Приложения для Android с использованием Kotlin/Java"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Push-уведомления",
      description: "Система уведомлений для повышения вовлеченности"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Офлайн режим",
      description: "Работа приложения без подключения к интернету"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Безопасность данных",
      description: "Шифрование и защита пользовательской информации"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Адаптивный UI",
      description: "Интерфейс, адаптированный под разные размеры экранов"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-gradient">Мобильные приложения</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Создаем нативные и гибридные мобильные приложения для iOS и Android с современным UX/UI дизайном
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts" className="btn-primary">
                  Обсудить проект
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Примеры работ
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Мобильные приложения"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности мобильных приложений</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный функционал для создания успешного мобильного продукта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-xl p-4 w-fit mb-6">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">От идеи до App Store</h2>
            <p className="text-xl text-gray-600">
              Полный цикл разработки мобильного приложения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Анализ и планирование",
              "UX/UI дизайн",
              "Разработка и тестирование", 
              "Публикация в сторах"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы создать мобильное приложение?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обсудим вашу идею и создадим техническое задание бесплатно
          </p>
          <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
