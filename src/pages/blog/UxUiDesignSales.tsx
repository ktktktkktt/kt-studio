
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const UxUiDesignSales = () => {
  return (
    <div className="min-h-screen pt-16">
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к блогу
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              UX/UI дизайн: как создать интерфейс, который продает
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-1" />
                <span>Кирилл Ткаченко</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-1" />
                <span>10 января 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>8 мин</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="UX/UI дизайн"
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Хороший UX/UI дизайн — это не просто красивые картинки. Это система, которая направляет пользователя к целевому действию и увеличивает конверсию. В этой статье разберем принципы создания интерфейсов, которые реально продают.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Основы конверсионного дизайна</h2>
            <p>
              Конверсионный дизайн основывается на понимании поведения пользователей и психологии принятия решений. Каждый элемент интерфейса должен иметь четкую цель и вести пользователя к совершению целевого действия.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Принцип иерархии</h3>
            <p>
              Визуальная иерархия помогает пользователю быстро понять, что важно на странице. Используйте размер, цвет, контраст и пространство для выделения ключевых элементов.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Закон Хика</h3>
            <p>
              Чем больше выборов у пользователя, тем сложнее ему принять решение. Упрощайте интерфейс, убирайте лишние элементы и предлагайте четкие пути действий.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Психология цвета в дизайне</h2>
            <p>
              Цвета влияют на эмоции и поведение пользователей. Красный создает чувство срочности, синий вызывает доверие, зеленый ассоциируется с безопасностью. Выбирайте цветовую палитру исходя из целей вашего продукта.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Оптимизация форм</h2>
            <p>
              Формы — критически важный элемент конверсии. Минимизируйте количество полей, используйте понятные подписи, добавляйте валидацию в реальном времени и четкие сообщения об ошибках.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Кнопки призыва к действию</h3>
            <p>
              CTA-кнопки должны выделяться на странице и содержать активные глаголы. "Получить скидку" работает лучше, чем "Отправить". Тестируйте разные формулировки и цвета.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Тестирование и аналитика</h2>
            <p>
              Даже самый продуманный дизайн нужно тестировать. Используйте A/B тесты, анализируйте тепловые карты, собирайте обратную связь от пользователей. Данные покажут, что действительно работает.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-semibold mb-4">Заключение</h3>
              <p>
                Создание конверсионного дизайна — это итеративный процесс, основанный на понимании пользователей и постоянном тестировании. Помните: лучший дизайн тот, который незаметно ведет пользователя к цели.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 mt-8 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">#UX</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">#UI</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">#Design</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">#Conversion</span>
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

export default UxUiDesignSales;
