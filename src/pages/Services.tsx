
const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Услуги</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по созданию и развитию веб-проектов
          </p>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Корпоративные сайты</h2>
              <p className="text-gray-600 mb-6">
                Создание представительских сайтов для компаний любого размера
              </p>
              <div className="text-2xl font-bold text-primary mb-4">от 45 000 ₽</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Адаптивный дизайн</li>
                <li>• SEO-оптимизация</li>
                <li>• Система управления</li>
                <li>• Интеграция с CRM</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Интернет-магазины</h2>
              <p className="text-gray-600 mb-6">
                Разработка онлайн-магазинов с системой заказов и оплаты
              </p>
              <div className="text-2xl font-bold text-primary mb-4">от 80 000 ₽</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Каталог товаров</li>
                <li>• Корзина и оплата</li>
                <li>• Админ-панель</li>
                <li>• Интеграция с 1С</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Landing Page</h2>
              <p className="text-gray-600 mb-6">
                Посадочные страницы с высокой конверсией для рекламы
              </p>
              <div className="text-2xl font-bold text-primary mb-4">от 25 000 ₽</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Высокая конверсия</li>
                <li>• Быстрая загрузка</li>
                <li>• A/B тестирование</li>
                <li>• Аналитика</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
