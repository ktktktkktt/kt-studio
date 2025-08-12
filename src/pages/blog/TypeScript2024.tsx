import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const TypeScript2024 = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>TypeScript в 2024: надёжная разработка</title>
        <meta name="description" content="Зачем TypeScript бизнесу: надёжность, скорость разработки и масштабируемость. Как внедрить TS, чтобы сделать сайт устойчивым." />
        <link rel="canonical" href="/blog/typescript-2024" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'TypeScript в 2024: надёжная разработка', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">TypeScript в 2024: зачем нужна типизация</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>30 ноября 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>12 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              TypeScript снижает количество ошибок на этапе разработки и упрощает поддержку кода. Если вы планируете разработку сайта для бизнеса, TS помогает стандартизировать архитектуру, улучшить качество PR-ревью и ускорить онбординг новых разработчиков. Типы делают код самодокументируемым, а инструменты редактора — более умными. В результате вы получаете стабильный продукт и предсказуемые релизы.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default TypeScript2024;
