import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeadlessCMS = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Headless CMS: контент для масштабируемого бизнеса</title>
        <meta name="description" content="Headless CMS для сайта бизнеса: скорость, безопасность, интеграции. Как выбрать и внедрить, чтобы ускорить контент-операции." />
        <link rel="canonical" href="/blog/headless-cms" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Headless CMS: контент для масштабируемого бизнеса', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Headless CMS: новый подход к управлению контентом</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>10 декабря 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>10 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Headless CMS отделяет бэкенд от фронтенда, позволяя быстро публиковать контент в любое приложение: сайт, мобильное, умные устройства. Для бизнеса это сокращение времени вывода материалов, гибкость шаблонов и безопасность. Если вам нужна разработка сайта для бизнеса с частыми обновлениями контента, headless архитектура даст скорость, масштабируемость и качественный редакторский опыт.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default HeadlessCMS;
