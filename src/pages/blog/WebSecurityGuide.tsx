import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebSecurityGuide = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Веб-безопасность: защита сайта для бизнеса</title>
        <meta name="description" content="Гид по веб-безопасности: как защитить сайт для бизнеса от атак. HTTPS, WAF, защита форм и базы данных, резервное копирование." />
        <link rel="canonical" href="/blog/web-security-guide" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Веб-безопасность: защита сайта для бизнеса', author: { '@type': 'Person', name: 'Кирилл Ткаченко' }, inLanguage: 'ru-RU' })}</script>
      </Helmet>
      <article className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2"/>Назад к блогу</Link>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Веб-безопасность: защищаем сайт от атак</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <div className="flex items-center mr-6"><User className="w-4 h-4 mr-1"/>Кирилл Ткаченко</div>
              <div className="flex items-center mr-6"><Calendar className="w-4 h-4 mr-1"/>25 декабря 2023</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/>11 мин</div>
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Безопасность — фундамент доверия. Чтобы разработать сайт для бизнеса, который выдержит угрозы, используйте HTTPS, строгую политику паролей, двухфакторную аутентификацию и регулярные обновления. Применяйте защиту от XSS/CSRF, валидируйте ввод на сервере, ограничивайте права БД и используйте параметризованные запросы. Резервные копии и мониторинг событий помогут быстро восстановиться в случае инцидента. WAF и CDN снижают нагрузку и блокируют вредоносный трафик. Регулярные аудиты безопасности и обучение сотрудников закрывают человеческий фактор. Укрепляя защиту, вы повышаете стабильность бизнеса и его позиции в поиске.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default WebSecurityGuide;
