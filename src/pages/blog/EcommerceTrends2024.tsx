import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommerceTrends2024 = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Тренды e-commerce 2024 для роста продаж</title>
        <meta name="description" content="E-commerce тренды 2024: персонализация, скорость, мобильный UX. Как сделать сайт для бизнеса, который продаёт больше." />
        <link rel="canonical" href="/blog/ecommerce-trends-2024" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Тренды e-commerce 2024 для роста продаж', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">E-commerce тренды 2024: что важно знать</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>25 ноября 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>14 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              В 2024 на первый план выходят скорость, персонализация и удобство мобильной покупки. Рекомендательные системы, быстрая доставка, BNPL и качественная аналитика помогают расти. Если вы хотите сделать сайт для бизнеса в e-commerce, начинайте с UX, скорости и SEO — это фундамент поколения продаж.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default EcommerceTrends2024;
