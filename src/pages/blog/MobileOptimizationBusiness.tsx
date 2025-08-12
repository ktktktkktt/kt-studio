import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileOptimizationBusiness = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Мобильная оптимизация сайта для бизнеса</title>
        <meta name="description" content="Почему мобильная оптимизация критична, чтобы сделать сайт для бизнеса. Практики ускорения, UX и SEO для роста конверсии." />
        <link rel="canonical" href="/blog/mobile-optimization-business" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article', headline: 'Мобильная оптимизация сайта для бизнеса', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU'
        })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Мобильная оптимизация: почему это критично для бизнеса</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>28 декабря 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>7 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Большая часть трафика приходит с мобильных устройств — игнорировать это значит терять клиентов. Если вы хотите сделать сайт для бизнеса, который приносит заявки и продажи, нужно уделить внимание скорости загрузки, адаптивной вёрстке, удобству форм и кнопок. Поисковые системы ранжируют выше сайты, оптимизированные под Core Web Vitals. Ускорение изображений (WebP/AVIF), lazy loading, минимизация скриптов и грамотная типографика делают интерфейс быстрым и понятным. Продуманная мобильная навигация и короткие формы повышают конверсию, а корректные микроразметки помогают SEO. Итог: мобильная оптимизация — не опция, а обязательное условие разработки сайта для бизнеса.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default MobileOptimizationBusiness;
