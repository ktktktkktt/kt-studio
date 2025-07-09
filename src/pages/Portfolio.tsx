
import { useState } from 'react';
import { ExternalLink, Code, Smartphone, ShoppingCart, Monitor, Filter, Search, Globe, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/utils/animations';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const heroRef = useScrollAnimation(0.1);
  const filterRef = useScrollAnimation(0.1);
  const projectsRef = useScrollAnimation(0.1);
  
  const categories = [
    { id: 'all', name: 'Все проекты', icon: <Monitor className="w-4 h-4" /> },
    { id: 'corporate', name: 'Корпоративные', icon: <Code className="w-4 h-4" /> },
    { id: 'ecommerce', name: 'Интернет-магазины', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'landing', name: 'Landing Page', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'webapp', name: 'Веб-приложения', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', name: 'Мобильные приложения', icon: <Smartphone className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Интернет-магазин электроники TechStore",
      description: "Создание современного интернет-магазина с каталогом товаров, системой заказов и интеграцией с CRM",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "ecommerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      results: ["Увеличение продаж на 45%", "Снижение отказов на 30%", "Мобильный трафик 70%"],
      link: "/portfolio/techstore"
    },
    {
      id: 2,
      title: "Корпоративный сайт IT-компании DevCorp",
      description: "Разработка представительского сайта с портфолио проектов, блогом и системой управления контентом",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
      category: "corporate",
      icon: <Code className="w-5 h-5" />,
      results: ["Рост заявок на 60%", "Время на сайте +120%", "Позиции в ТОП-10 Google"],
      link: "/portfolio/devcorp"
    },
    {
      id: 3,
      title: "Landing Page для стартапа FinTech",
      description: "Эффективная посадочная страница с высокой конверсией для привлечения инвесторов и клиентов",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
      category: "landing",
      icon: <Smartphone className="w-5 h-5" />,
      results: ["Конверсия 12%", "Скорость загрузки 1.2с", "Привлечено $500K инвестиций"],
      link: "/portfolio/fintech"
    },
    {
      id: 4,
      title: "Интернет-магазин модной одежды StyleShop",
      description: "Создание стильного интернет-магазина с продвинутой системой фильтрации и персонализацией",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "GraphQL", "MongoDB", "Shopify"],
      category: "ecommerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      results: ["Увеличение AOV на 35%", "Повторные покупки +40%", "Мобильные продажи 80%"],
      link: "/portfolio/styleshop"
    },
    {
      id: 5,
      title: "Корпоративный сайт медицинского центра",
      description: "Разработка сайта с системой онлайн-записи, личным кабинетом и интеграцией с медицинской системой",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Angular", "Django", "PostgreSQL", "WebRTC"],
      category: "corporate",
      icon: <Code className="w-5 h-5" />,
      results: ["Онлайн-записи 70%", "Снижение нагрузки на call-центр", "Довольные пациенты 95%"],
      link: "/portfolio/medcenter"
    },
    {
      id: 6,
      title: "Landing Page для курсов программирования",
      description: "Конверсионная посадочная страница для онлайн-курсов с видео-презентациями и системой оплаты",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "Node.js", "Stripe", "Vimeo API"],
      category: "landing",
      icon: <Smartphone className="w-5 h-5" />,
      results: ["Конверсия 18%", "Регистрации +200%", "Средний чек увеличен на 25%"],
      link: "/portfolio/codecourse"
    },
    {
      id: 7,
      title: "Веб-приложение для управления проектами TaskFlow",
      description: "Современное SaaS-приложение для управления проектами и командной работы",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "webapp",
      icon: <Globe className="w-5 h-5" />,
      results: ["10K+ активных пользователей", "Время выполнения задач -40%", "Удержание 85%"],
      link: "/portfolio/taskflow"
    },
    {
      id: 8,
      title: "Мобильное приложение для доставки еды FoodExpress",
      description: "Нативное мобильное приложение с геолокацией, отслеживанием заказов и платежами",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React Native", "Firebase", "Maps API", "Stripe"],
      category: "mobile",
      icon: <Smartphone className="w-5 h-5" />,
      results: ["50K+ скачиваний", "Рейтинг 4.8★", "Время доставки -25%"],
      link: "/portfolio/foodexpress"
    },
    {
      id: 9,
      title: "Интернет-магазин товаров для дома HomeStore",
      description: "E-commerce платформа с 3D-просмотром товаров и AR-функциями",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Vue.js", "Three.js", "Node.js", "PostgreSQL"],
      category: "ecommerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      results: ["Конверсия +55%", "Возвраты -30%", "Время на сайте +90%"],
      link: "/portfolio/homestore"
    },
    {
      id: 10,
      title: "Корпоративный портал банка SecureBank",
      description: "Безопасный корпоративный портал с системой документооборота и аналитикой",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Angular", "Spring Boot", "Oracle", "Kubernetes"],
      category: "corporate",
      icon: <Code className="w-5 h-5" />,
      results: ["Безопасность 99.9%", "Производительность +60%", "Автоматизация 80%"],
      link: "/portfolio/securebank"
    },
    {
      id: 11,
      title: "Веб-приложение для онлайн-обучения EduPlatform",
      description: "Интерактивная платформа для онлайн-обучения с видеокурсами и тестированием",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "WebRTC", "Node.js", "MongoDB"],
      category: "webapp",
      icon: <Globe className="w-5 h-5" />,
      results: ["100K+ студентов", "Завершение курсов 78%", "Средняя оценка 4.9★"],
      link: "/portfolio/eduplatform"
    },
    {
      id: 12,
      title: "Мобильное приложение для фитнеса FitTracker",
      description: "Персональный фитнес-трекер с планами тренировок и интеграцией с носимыми устройствами",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Flutter", "Firebase", "HealthKit", "ML Kit"],
      category: "mobile",
      icon: <Smartphone className="w-5 h-5" />,
      results: ["200K+ активных пользователей", "Engagement 95%", "Премиум подписок 35%"],
      link: "/portfolio/fittracker"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 animate-on-scroll">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Портфолио</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Примеры наших работ и успешных проектов различной сложности
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            {[
              { count: "200+", label: "завершенных проектов" },
              { count: "150+", label: "довольных клиентов" },
              { count: "7+", label: "лет опыта" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>{stat.count} {stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section ref={filterRef} className="py-8 bg-white border-b animate-on-scroll">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Поиск проектов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="section-padding bg-white animate-on-scroll">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={project.link}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover-lift hover-glow transition-all duration-300 group block fade-in-up stagger-${((index % 6) + 1)}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <div className="text-primary mr-2">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium">{categories.find(c => c.id === project.category)?.name}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Результаты:</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-accent group-hover:text-primary transition-colors">
                    <span className="font-medium">Подробнее о проекте</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Хотите создать проект как в нашем портфолио?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Обсудим ваш проект и подберем оптимальное решение для достижения ваших целей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200">
              Обсудить проект
            </Link>
            <Link to="/contacts" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
