
import { Calendar, Clock, ExternalLink, ArrowLeft, Users, TrendingUp, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const StyleShop = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Link to="/portfolio" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к портфолио
          </Link>

          <header className="mb-12">
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="mr-4">Завершен в сентябре 2023</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>4 месяца разработки</span>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              Интернет-магазин модной одежды StyleShop
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Создание стильного интернет-магазина модной одежды с продвинутой системой фильтрации, персонализацией и интеграцией с социальными сетями
            </p>

            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="StyleShop"
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">О проекте</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  StyleShop — это современный интернет-магазин модной одежды, который сочетает в себе стильный дизайн и передовые технологии. Проект был создан для молодого бренда, стремящегося завоевать рынок онлайн-продаж модной одежды.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Задачи проекта</h3>
                <ul>
                  <li>Создать привлекательный и современный дизайн</li>
                  <li>Реализовать удобную систему поиска и фильтрации товаров</li>
                  <li>Интегрировать систему персонализации</li>
                  <li>Обеспечить высокую скорость загрузки</li>
                  <li>Создать seamless мобильный опыт</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Решения</h3>
                <p>
                  Мы разработали полнофункциональный интернет-магазин с акцентом на визуальную привлекательность и пользовательский опыт. Особое внимание уделили системе рекомендаций и персонализации контента.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">+35%</div>
                  <div className="text-sm text-gray-600">Увеличение AOV</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">+40%</div>
                  <div className="text-sm text-gray-600">Повторные покупки</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <Smartphone className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">80%</div>
                  <div className="text-sm text-gray-600">Мобильные продажи</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Ключевые особенности</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Умная система фильтрации</h4>
                  <p className="text-gray-600">Многоуровневые фильтры по размеру, цвету, бренду, цене с мгновенной обратной связью</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Персонализация</h4>
                  <p className="text-gray-600">Система рекомендаций на основе истории просмотров и покупок</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Social Commerce</h4>
                  <p className="text-gray-600">Интеграция с Instagram, возможность покупки через соцсети</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <h3 className="text-lg font-semibold mb-4">Технологии</h3>
                <div className="space-y-2">
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm ml-2">GraphQL</span>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm ml-2">Shopify</span>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm">Algolia</span>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm ml-2">Stripe</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <h3 className="text-lg font-semibold mb-4">Результаты</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Увеличение среднего чека на 35%
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Рост повторных покупок на 40%
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    80% продаж с мобильных устройств
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Скорость загрузки менее 2 секунд
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4">Клиент</h3>
                <p className="text-sm text-gray-600 mb-4">
                  StyleShop — молодой бренд модной одежды, ориентированный на активных городских жителей 20-35 лет.
                </p>
                <a href="#" className="inline-flex items-center text-accent hover:text-primary transition-colors text-sm font-medium">
                  Посетить сайт
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex items-center justify-between">
              <Link to="/portfolio/techstore" className="text-accent hover:text-primary transition-colors">
                ← Предыдущий проект
              </Link>
              <Link to="/portfolio/medcenter" className="text-accent hover:text-primary transition-colors">
                Следующий проект →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleShop;
