import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgressiveWebApps = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>PWA: как сделать быстрый сайт-приложение</title>
        <meta name="description" content="Что такое PWA и как они помогают бизнесу: офлайн-режим, пуш-уведомления, высокая скорость. Разработка сайта для бизнеса с PWA." />
        <link rel="canonical" href="/blog/progressive-web-apps" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'PWA: как сделать быстрый сайт-приложение', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Progressive Web Apps: будущее веб-разработки</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>20 декабря 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>13 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              PWA объединяют лучшее от веба и мобильных приложений: мгновенную загрузку, офлайн-режим, установку на экран и пуш-уведомления. Для бизнеса это возможность сделать сайт, который работает как приложение и повышает вовлечённость. Используя сервис-воркеры, кеширование и стратегию prefetch, мы сокращаем TTFB и улучшаем Core Web Vitals. Для компаний, которым нужна разработка сайта для бизнеса с высокой конверсией и удержанием, PWA помогают сократить путь от первого захода до повторной покупки.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default ProgressiveWebApps;
