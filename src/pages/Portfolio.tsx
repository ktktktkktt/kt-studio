
import { useState } from 'react';
import { ExternalLink, Code, Smartphone, ShoppingCart, Monitor, Filter, Search } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Все проекты', icon: <Monitor className="w-4 h-4" /> },
    { id: 'corporate', name: 'Корпоративные', icon: <Code className="w-4 h-4" /> },
    { id: 'ecommerce', name: 'Интернет-магазины', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'landing', name: 'Landing Page', icon: <Smartphone className="w-4 h-4" /> },
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
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Портфолио</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Примеры наших работ и успешных проектов различной сложности
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>150+ завершенных проектов</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>120+ довольных клиентов</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>7+ лет опыта</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <div className="text-primary mr-2">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium">{categories.find(c => c.id === project.category)?.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
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
                      {project.results.map((result, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="flex items-center text-accent hover:text-primary transition-colors group w-full justify-center py-2 border border-accent rounded-lg hover:bg-accent hover:text-white">
                    Подробнее о проекте
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
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
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Обсудить проект
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
