import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const ProgressiveWebApps = () => {
  return (
    <BlogArticleLayout
      title="Progressive Web Apps: будущее веб-разработки"
      description="Что такое PWA и как они помогают бизнесу: офлайн-режим, пуш-уведомления, высокая скорость. Разработка сайта для бизнеса с PWA."
      canonical="/blog/progressive-web-apps"
      author="Кирилл Ткаченко"
      date="20 декабря 2023"
      readTime="13 мин"
    >
      <p className="text-xl text-muted-foreground mb-8">
        PWA объединяют лучшее от веба и мобильных приложений: мгновенную загрузку, офлайн-режим, установку на экран и пуш-уведомления. Для бизнеса это возможность сделать сайт, который работает как приложение и повышает вовлечённость. Используя сервис-воркеры, кеширование и стратегию prefetch, мы сокращаем TTFB и улучшаем Core Web Vitals. Для компаний, которым нужна разработка сайта для бизнеса с высокой конверсией и удержанием, PWA помогают сократить путь от первого захода до повторной покупки.
      </p>
    </BlogArticleLayout>
  );
};
export default ProgressiveWebApps;

