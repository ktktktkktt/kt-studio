
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeoEcommerceGuide = () => {
  return (
    <div className="min-h-screen pt-16">
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к блогу
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              SEO для интернет-магазинов: как увеличить продажи через поиск
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-1" />
                <span>Кирилл Ткаченко</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-1" />
                <span>5 января 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>12 мин</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="SEO для интернет-магазинов"
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              SEO для интернет-магазинов имеет свои особенности. Важно не только привлечь трафик, но и привести именно тех покупателей, которые готовы совершить покупку. Рассказываем о стратегиях продвижения e-commerce проектов.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Семантическое ядро для интернет-магазина</h2>
            <p>
              Основа успешного SEO — правильно собранное семантическое ядро. Для интернет-магазинов важно работать с коммерческими запросами: "купить", "цена", "доставка". Используйте инструменты для анализа конкурентов и поиска ниш.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Типы запросов</h3>
            <ul>
              <li><strong>Информационные:</strong> "как выбрать смартфон"</li>
              <li><strong>Коммерческие:</strong> "купить iPhone 15"</li>
              <li><strong>Навигационные:</strong> "магазин техники Москва"</li>
              <li><strong>Брендовые:</strong> "Samsung Galaxy S24"</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Техническая оптимизация</h2>
            <p>
              Скорость загрузки критична для интернет-магазинов. Пользователи не будут ждать медленный сайт. Оптимизируйте изображения, используйте CDN, настройте кэширование.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Мобильная оптимизация</h3>
            <p>
              Более 60% покупок совершается с мобильных устройств. Убедитесь, что ваш сайт адаптивен, кнопки удобны для нажатия, формы заказа просты в заполнении.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Оптимизация карточек товаров</h2>
            <p>
              Каждая карточка товара — это потенциальная страница для привлечения трафика. Используйте уникальные описания, качественные фото, отзывы покупателей.
            </p>

            <div className="bg-secondary p-6 rounded-2xl mt-6">
              <h4 className="font-semibold mb-2">Структура title для товара:</h4>
              <code>Название товара - Бренд - Купить в Городе | Название магазина</code>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Контент-маркетинг</h2>
            <p>
              Создавайте полезный контент: обзоры товаров, гайды по выбору, сравнения. Это поможет привлечь аудиторию на информационных запросах и в дальнейшем конвертировать в покупателей.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Локальное SEO</h2>
            <p>
              Если у вас есть офлайн точки продаж, обязательно настройте локальное SEO. Зарегистрируйтесь в Google My Business, Яндекс.Справочнике, собирайте отзывы.
            </p>

            <div className="bg-muted p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-semibold mb-4">Ключевые метрики</h3>
              <ul>
                <li>Органический трафик</li>
                <li>Конверсия из органики</li>
                <li>Средний чек от SEO</li>
                <li>Позиции по коммерческим запросам</li>
                <li>Индексируемые страницы</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">#SEO</span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">#E-commerce</span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">#Marketing</span>
            </div>
            
            <button className="flex items-center text-accent hover:text-primary transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Поделиться
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SeoEcommerceGuide;
