
const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">О нас</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Команда профессионалов с многолетним опытом в веб-разработке
          </p>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Кирилл Ткаченко
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Основатель и ведущий разработчик с опытом более 7 лет в сфере создания веб-решений.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-600">Высшее техническое образование</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-600">Сертифицированный специалист React/Vue.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-600">Эксперт по SEO-оптимизации</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-600">Более 150 успешных проектов</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-gray-600 mb-6">
                Создавать веб-решения, которые помогают бизнесу расти и развиваться в цифровой среде. 
                Мы верим в силу качественного кода и продуманного дизайна.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-gray-700">Качество превыше скорости</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-gray-700">Прозрачность в работе</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-gray-700">Долгосрочные отношения</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
