
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernWebsite2024 = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom section-padding max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к блогу
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Современный сайт 2024"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Как создать современный сайт в 2024 году: полное руководство
          </h1>
          
          <div className="flex items-center justify-between text-gray-600 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Кирилл Ткаченко</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>15 января 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>10 мин чтения</span>
              </div>
            </div>
            <button className="flex items-center text-accent hover:text-primary transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Поделиться
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            В 2024 году создание современного сайта требует комплексного подхода, учитывающего последние тенденции в веб-разработке, дизайне и пользовательском опыте. В этом руководстве мы разберем все ключевые аспекты создания сайта, который будет успешно работать в современных реалиях.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Планирование и анализ</h2>
          
          <p className="mb-6">
            Прежде чем приступить к разработке, необходимо тщательно спланировать проект. Этот этап включает в себя:
          </p>

          <ul className="mb-8 space-y-2">
            <li><strong>Анализ целевой аудитории</strong> - изучение потребностей и поведения пользователей</li>
            <li><strong>Определение целей сайта</strong> - что должен достичь ваш сайт</li>
            <li><strong>Анализ конкурентов</strong> - изучение решений на рынке</li>
            <li><strong>Создание технического задания</strong> - детальное описание функционала</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Современные технологии</h2>
          
          <p className="mb-6">
            В 2024 году рекомендуется использовать следующий стек технологий:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Frontend:</h3>
          <ul className="mb-6 space-y-2">
            <li><strong>React или Vue.js</strong> - для создания интерактивных интерфейсов</li>
            <li><strong>TypeScript</strong> - для типизации и повышения надежности кода</li>
            <li><strong>Tailwind CSS</strong> - для быстрой и гибкой стилизации</li>
            <li><strong>Next.js или Nuxt.js</strong> - для SEO и производительности</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Backend:</h3>
          <ul className="mb-6 space-y-2">
            <li><strong>Node.js с Express</strong> - для быстрой разработки API</li>
            <li><strong>PostgreSQL или MongoDB</strong> - для хранения данных</li>
            <li><strong>Redis</strong> - для кэширования</li>
            <li><strong>Docker</strong> - для контейнеризации</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. UX/UI дизайн</h2>
          
          <p className="mb-6">
            Современный дизайн должен быть не только красивым, но и функциональным:
          </p>

          <ul className="mb-8 space-y-2">
            <li><strong>Минимализм</strong> - чистый и понятный интерфейс</li>
            <li><strong>Мобильный приоритет</strong> - дизайн сначала для мобильных устройств</li>
            <li><strong>Быстрая загрузка</strong> - оптимизация изображений и кода</li>
            <li><strong>Доступность</strong> - сайт должен быть удобен для всех пользователей</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. SEO и производительность</h2>
          
          <p className="mb-6">
            Для успешного продвижения сайта необходимо учесть:
          </p>

          <ul className="mb-8 space-y-2">
            <li><strong>Core Web Vitals</strong> - метрики производительности от Google</li>
            <li><strong>Семантическая разметка</strong> - правильное использование HTML тегов</li>
            <li><strong>Оптимизация изображений</strong> - использование WebP формата</li>
            <li><strong>HTTPS и безопасность</strong> - обязательное требование</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Тестирование и запуск</h2>
          
          <p className="mb-6">
            Перед запуском сайта необходимо провести комплексное тестирование:
          </p>

          <ul className="mb-8 space-y-2">
            <li><strong>Кроссбраузерное тестирование</strong> - проверка во всех популярных браузерах</li>
            <li><strong>Адаптивность</strong> - тестирование на разных устройствах</li>
            <li><strong>Производительность</strong> - анализ скорости загрузки</li>
            <li><strong>Безопасность</strong> - проверка на уязвимости</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Заключение</h2>
          
          <p className="mb-6">
            Создание современного сайта в 2024 году - это комплексный процесс, требующий знаний в области дизайна, разработки, SEO и маркетинга. Следуя данному руководству, вы сможете создать сайт, который будет эффективно решать поставленные задачи и обеспечивать отличный пользовательский опыт.
          </p>

          <p className="mb-8">
            Помните, что веб-разработка постоянно развивается, поэтому важно следить за новыми тенденциями и регулярно обновлять свои знания.
          </p>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-12 mb-12">
          {['React', 'JavaScript', 'Web Development', 'UX/UI', 'SEO'].map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Нужен современный сайт?</h3>
          <p className="mb-6 opacity-90">
            Мы создадим для вас сайт по всем современным стандартам
          </p>
          <Link to="/contacts" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Обсудить проект
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModernWebsite2024;
