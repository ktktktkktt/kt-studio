
import { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'development', name: 'Разработка' },
    { id: 'design', name: 'Дизайн' },
    { id: 'seo', name: 'SEO' },
    { id: 'business', name: 'Бизнес' },
  ];

  const articles = [
    {
      id: 1,
      title: "Как создать современный сайт в 2024 году: полное руководство",
      excerpt: "Разбираем все этапы создания сайта - от планирования до запуска. Технологии, дизайн, SEO и лучшие практики.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      category: "development",
      author: "Кирилл Ткаченко",
      date: "2024-01-15",
      readTime: "10 мин",
      tags: ["React", "JavaScript", "Web Development"],
      link: "/blog/modern-website-2024"
    },
    {
      id: 2,
      title: "UX/UI дизайн: как создать интерфейс, который продает",
      excerpt: "Принципы создания пользовательских интерфейсов, которые увеличивают конверсию и улучшают пользовательский опыт.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "design",
      author: "Кирилл Ткаченко",
      date: "2024-01-10",
      readTime: "8 мин",
      tags: ["UX", "UI", "Design", "Conversion"],
      link: "/blog/ux-ui-design-sales"
    },
    {
      id: 3,
      title: "SEO для интернет-магазинов: как увеличить продажи через поиск",
      excerpt: "Стратегии SEO-продвижения интернет-магазинов. Технические аспекты, контент-маркетинг и работа с семантикой.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "seo",
      author: "Кирилл Ткаченко",
      date: "2024-01-05",
      readTime: "12 мин",
      tags: ["SEO", "E-commerce", "Marketing"],
      link: "/blog/seo-ecommerce-guide"
    },
    {
      id: 4,
      title: "React vs Vue vs Angular: выбираем фреймворк для вашего проекта",
      excerpt: "Сравнение популярных JavaScript фреймворков. Преимущества, недостатки и рекомендации по выбору.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "development",
      author: "Кирилл Ткаченко",
      date: "2024-01-01",
      readTime: "15 мин",
      tags: ["React", "Vue", "Angular", "JavaScript"],
      link: "/blog/react-vs-vue-vs-angular"
    },
    {
      id: 5,
      title: "Мобильная оптимизация: почему это критично для бизнеса",
      excerpt: "Анализ важности мобильной оптимизации, статистика использования мобильных устройств и практические советы.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "business",
      author: "Кирилл Ткаченко",
      date: "2023-12-28",
      readTime: "7 мин",
      tags: ["Mobile", "UX", "Business"],
      link: "/blog/mobile-optimization-business"
    },
    {
      id: 6,
      title: "Веб-безопасность: защищаем сайт от хакерских атак",
      excerpt: "Основы веб-безопасности, распространенные угрозы и методы защиты. SSL, HTTPS, защита от SQL-инъекций.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "development",
      author: "Кирилл Ткаченко",
      date: "2023-12-25",
      readTime: "11 мин",
      tags: ["Security", "HTTPS", "Web Development"],
      link: "/blog/web-security-guide"
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Блог</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Экспертные статьи о веб-разработке, дизайне и digital-маркетинге
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Поиск по статьям..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium">{categories.find(c => c.id === article.category)?.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={article.link}
                    className="flex items-center text-accent hover:text-primary transition-colors group w-full justify-center py-2 border border-accent rounded-lg hover:bg-accent hover:text-white"
                  >
                    Читать статью
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Подпишитесь на нашу рассылку
            </h2>
            <p className="text-gray-600 mb-6">
              Получайте новые статьи и полезные материалы о веб-разработке прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
