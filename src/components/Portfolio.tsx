
import { ExternalLink, Code, Smartphone, ShoppingCart, Globe, Database, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Интернет-магазин электроники TechStore",
      description: "Создание современного интернет-магазина с каталогом товаров и системой заказов",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "Node.js", "PostgreSQL"],
      category: "E-commerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      link: "/portfolio/techstore"
    },
    {
      title: "Корпоративный сайт IT-компании DevCorp",
      description: "Разработка представительского сайта с портфолио проектов и системой управления",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Vue.js", "Laravel", "MySQL"],
      category: "Corporate",
      icon: <Code className="w-5 h-5" />,
      link: "/portfolio/devcorp"
    },
    {
      title: "Landing Page для стартапа FinTech",
      description: "Эффективная посадочная страница с высокой конверсией для привлечения инвесторов",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tech: ["Next.js", "Tailwind", "Vercel"],
      category: "Landing",
      icon: <Smartphone className="w-5 h-5" />,
      link: "/portfolio/fintech"
    },
    {
      title: "Интернет-магазин модной одежды StyleShop",
      description: "Создание стильного интернет-магазина с продвинутой системой фильтрации",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "GraphQL", "MongoDB"],
      category: "E-commerce",
      icon: <ShoppingCart className="w-5 h-5" />,
      link: "/portfolio/styleshop"
    },
    {
      title: "Веб-приложение для управления проектами TaskFlow",
      description: "Современное SaaS-приложение для управления проектами и командной работы",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["React", "TypeScript", "Node.js"],
      category: "WebApp",
      icon: <Globe className="w-5 h-5" />,
      link: "/portfolio/taskflow"
    },
    {
      title: "Корпоративный сайт медицинского центра",
      description: "Разработка сайта с системой онлайн-записи и личным кабинетом",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tech: ["Angular", "Django", "PostgreSQL"],
      category: "Corporate",
      icon: <Code className="w-5 h-5" />,
      link: "/portfolio/medcenter"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры успешно реализованных проектов различной сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={index} 
              to={project.link}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group block"
            >
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
                  <span className="text-sm font-medium">{project.category}</span>
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
                
                <div className="flex items-center text-accent hover:text-primary transition-colors group">
                  Подробнее
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary">
            Посмотреть все проекты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
