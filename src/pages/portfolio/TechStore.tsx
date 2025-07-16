import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/utils/animations';

const TechStore = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className={`section-padding bg-gradient-to-br from-background to-muted transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <Link to="/portfolio" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к портфолио
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h1 className="text-4xl font-bold mb-4">
                Интернет-магазин электроники TechStore
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Современный интернет-магазин с каталогом товаров, системой заказов и интеграцией с CRM
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Февраль 2024</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span>E-commerce</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="#"
                  className="btn-primary inline-flex items-center"
                >
                  Посетить сайт
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <Link to="/contacts" className="btn-secondary">
                  Заказать похожий
                </Link>
              </div>
            </div>
            
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="TechStore - главная страница"
                className="rounded-2xl shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className={`section-padding bg-background transition-all duration-1000 ${
        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">О проекте</h2>
              <p className="text-muted-foreground mb-6">
                TechStore - это современный интернет-магазин электроники, созданный с использованием 
                передовых веб-технологий. Проект включает в себя полнофункциональную систему управления 
                товарами, корзину покупок, систему оплаты и интеграцию с CRM.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Задачи</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Создать современный и удобный интерфейс магазина</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Реализовать систему каталогов и фильтрации товаров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Интегрировать платежную систему</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Обеспечить адаптивность для всех устройств</span>
                </li>
              </ul>
              
              <h3 className="text-2xl font-bold mb-4">Решение</h3>
              <p className="text-muted-foreground mb-6">
                Мы создали полноценный интернет-магазин с современным дизайном и интуитивно понятным 
                интерфейсом. Использовали React для фронтенда и Node.js для бэкенда, что обеспечило 
                высокую производительность и масштабируемость.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Каталог товаров"
                  className="rounded-lg shadow-md hover-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Корзина покупок"
                  className="rounded-lg shadow-md hover-lift"
                />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6 hover-glow">
                <h3 className="text-xl font-bold mb-4">Технологии</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "PostgreSQL", "Stripe", "Docker", "AWS"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background text-foreground text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted rounded-xl p-6 hover-glow">
                <h3 className="text-xl font-bold mb-4">Результаты</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <div className="font-semibold">+45%</div>
                      <div className="text-sm text-muted-foreground">Рост продаж</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <div className="font-semibold">70%</div>
                      <div className="text-sm text-muted-foreground">Мобильный трафик</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <div>
                      <div className="font-semibold">-30%</div>
                      <div className="text-sm text-muted-foreground">Снижение отказов</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Заказать похожий проект</h3>
                <p className="mb-4 opacity-90">
                  Хотите создать свой интернет-магазин? Обсудим детали вашего проекта.
                </p>
                <Link to="/contacts" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Получить консультацию
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStore;
