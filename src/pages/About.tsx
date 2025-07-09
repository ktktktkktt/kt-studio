
import { useScrollAnimation } from '@/utils/animations';
import TeamCarousel from '@/components/TeamCarousel';

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation(0.1);
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className={`section-padding bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">О нас</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Команда профессионалов с многолетним опытом в веб-разработке. 
            Создаем сайты, которые работают на ваш бизнес.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section ref={mainRef} className={`section-padding bg-white transition-all duration-1000 ${
        mainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Photo and Main Info */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/lovable-uploads/f507d7ba-285c-46a1-b8ed-5f6fc1bfe213.png" 
                  alt="Кирилл Ткаченко - основатель и ведущий разработчик"
                  className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">7+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Кирилл Ткаченко
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Основатель и ведущий разработчик с опытом более 7 лет в сфере создания веб-решений. 
                Специализируется на создании современных, функциональных сайтов для бизнеса любого масштаба.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Высшее техническое образование",
                  "React/Vue.js эксперт",
                  "SEO-специалист",
                  "200+ проектов"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Экспертиза</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Frontend разработка",
                    "Backend решения",
                    "UX/UI дизайн",
                    "SEO оптимизация",
                    "Техническая поддержка",
                    "Консультации"
                  ].map((skill, index) => (
                    <div key={index} className="text-sm text-gray-700 hover:text-primary transition-colors">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div ref={teamRef} className={`mb-20 transition-all duration-1000 ${
            teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <TeamCarousel />
          </div>

          {/* Additional Photos Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Философия работы</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Каждый проект для нас - это возможность создать что-то действительно ценное. 
                  Мы не просто пишем код, мы решаем бизнес-задачи и помогаем компаниям достигать своих целей.
                </p>
                <p>
                  Наш подход основан на глубоком понимании потребностей клиента, использовании современных 
                  технологий и постоянном стремлении к совершенству.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-lg mb-3">Наши принципы:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      <span>Качество превыше скорости</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      <span>Прозрачность на всех этапах</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      <span>Долгосрочные отношения</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      <span>Постоянное развитие</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/d80f070f-b50e-457b-842b-76f9bb0abc06.png" 
                alt="Кирилл Ткаченко в работе"
                className="rounded-xl shadow-lg w-full"
              />
              <img 
                src="/lovable-uploads/725206b9-886c-4939-86fb-0cc4f4b4de50.png" 
                alt="Кирилл Ткаченко - креативный подход"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Skills and Technologies */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">Технологии и навыки</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-4">Frontend</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>React.js, Vue.js, Angular</div>
                    <div>TypeScript, JavaScript ES6+</div>
                    <div>HTML5, CSS3, SASS/SCSS</div>
                    <div>Tailwind CSS, Bootstrap</div>
                    <div>Webpack, Vite, Parcel</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-4">Backend</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Node.js, Express.js</div>
                    <div>PHP, Laravel, WordPress</div>
                    <div>MySQL, PostgreSQL</div>
                    <div>MongoDB, Redis</div>
                    <div>REST API, GraphQL</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-4">Другие навыки</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>UX/UI дизайн</div>
                    <div>SEO оптимизация</div>
                    <div>Git, GitHub/GitLab</div>
                    <div>Docker, AWS</div>
                    <div>Figma, Adobe Creative Suite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements and Certificates */}
          <div className="text-center mb-20">
            <h3 className="text-2xl font-bold mb-8">Достижения и сертификаты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-gray-600">Реализованных проектов</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">7+</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Техподдержка</div>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
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
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Наше видение</h3>
                <p className="text-gray-600 mb-6">
                  Стать ведущей компанией в области веб-разработки, известной своим профессионализмом, 
                  инновационными решениями и безупречным качеством работы.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Мы стремимся:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Быть в авангарде технологических трендов</li>
                    <li>• Создавать решения, которые изменяют бизнес</li>
                    <li>• Развивать долгосрочные партнерские отношения</li>
                    <li>• Постоянно совершенствоваться и учиться</li>
                  </ul>
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
