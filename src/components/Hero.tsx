
import { ArrowRight, Play, Code, Smartphone, Search, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationModal from './ConsultationModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container-custom section-padding text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Code className="w-4 h-4 mr-2" />
              Профессиональная разработка сайтов
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Создаем сайты</span>
              <br />
              <span className="text-foreground">которые продают</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Разработка современных сайтов, интернет-магазинов и веб-приложений. 
              Привлекаем клиентов и увеличиваем продажи с помощью качественных решений.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in">
              <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-border">
                <Smartphone className="w-5 h-5 text-primary mr-2" />
                <span className="text-card-foreground">Адаптивный дизайн</span>
              </div>
              <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-border">
                <Search className="w-5 h-5 text-primary mr-2" />
                <span className="text-card-foreground">SEO-оптимизация</span>
              </div>
              <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-border">
                <Code className="w-5 h-5 text-primary mr-2" />
                <span className="text-card-foreground">Современные технологии</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
              <Link to="/quiz" className="btn-primary flex items-center group">
                <HelpCircle className="w-5 h-5 mr-2" />
                Пройти квиз - узнать стоимость
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={() => setIsModalOpen(true)} className="btn-secondary flex items-center group">
                Получить коммерческое предложение
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto animate-fade-in px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm md:text-base text-muted-foreground">Сайтов создано</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm md:text-base text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm md:text-base text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm md:text-base text-muted-foreground break-words">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - moved higher and with better positioning */}
        <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-muted-foreground/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>;
};

export default Hero;
