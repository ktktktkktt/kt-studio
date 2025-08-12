import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConversionDesign = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Конверсионный дизайн сайта для бизнеса</title>
        <meta name="description" content="Психология и паттерны, повышающие конверсию сайта для бизнеса. Иерархия, CTA, доверие и скорость для роста заявок." />
        <link rel="canonical" href="/blog/conversion-design" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Конверсионный дизайн сайта для бизнеса', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Конверсионный дизайн: психология продающих сайтов</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>15 декабря 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>9 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Конверсия формируется на пересечении UX, контента и доверия. Если вам нужно сделать сайт для бизнеса, сосредоточьтесь на иерархии элементов, ясных заголовках, цепляющих подзаголовках и «чистых» формах. Социальные доказательства (кейсы, отзывы), гарантии и прозрачные цены снижают страхи. Скорость и адаптивность — обязательны. Правильные CTA, акцентный цвет и визуальные подсказки помогают пользователю быстрее принять решение.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default ConversionDesign;
