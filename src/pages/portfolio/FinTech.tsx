
import { useScrollAnimation } from '@/utils/animations';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Smartphone, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinTech = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen pt-16">
      <section ref={heroRef} className={`section-padding bg-gradient-to-br from-background to-muted transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <Link to="/portfolio" className="inline-flex items-center text-accent hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к портфолио
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Landing Page для стартапа <span className="text-gradient">FinTech</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Эффективная посадочная страница с высокой конверсией для привлечения инвесторов и клиентов
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">12%</div>
                  <div className="text-sm text-muted-foreground">Конверсия</div>
                </div>
                <div className="text-center bg-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">1.2с</div>
                  <div className="text-sm text-muted-foreground">Скорость загрузки</div>
                </div>
                <div className="text-center bg-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">$500K</div>
                  <div className="text-sm text-muted-foreground">Привлечено инвестиций</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                alt="FinTech Landing Page"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinTech;
