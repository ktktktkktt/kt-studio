import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const MicroanimationsUX = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Микроанимации: улучшаем UX сайта</title>
        <meta name="description" content="Зачем нужны микроанимации и как они повышают конверсию. Делicate motion для сайта бизнеса: скорость, обратная связь, эмоции." />
        <link rel="canonical" href="/blog/microanimations-ux" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Микроанимации: улучшаем UX сайта', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Микроанимации в веб-дизайне: как улучшить UX</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>5 декабря 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>8 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Микроанимации создают ощущение живости интерфейса и дают обратную связь. Они помогают пользователю понимать, что происходит после клика или ввода. Важно использовать их деликатно: короткие длительности, правильно настроенные кривые и последовательность. Для бизнеса это способ повысить лояльность и конверсию, особенно на этапах оформления заказа и регистрации, где уместная анимация снижает напряжение и делает путь к целевому действию короче.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default MicroanimationsUX;
