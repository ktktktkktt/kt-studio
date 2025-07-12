
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Кирилл Ткаченко</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Профессиональные услуги и консультации. Индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">VK</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.033-1.49-.116-1.49.525v1.202c0 .33-.132.525-.525.525H12.6c-1.744 0-3.477-1.062-4.636-2.897C6.602 11.696 5.8 7.753 5.8 7.393c0-.33.132-.525.525-.525h1.744c.396 0 .545.198.677.594.792 2.435 2.188 4.57 2.766 4.57.198 0 .33-.132.33-.857V9.652c-.066-.99-.594-1.08-.594-1.41 0-.264.198-.525.525-.525h2.897c.33 0 .462.198.462.594v3.083c0 .33.132.462.264.462.198 0 .396-.132.792-.525 1.227-1.227 2.106-3.149 2.106-3.149.132-.264.33-.525.726-.525h1.744c.66 0 .792.33.66.792-.264 1.293-2.897 4.57-2.897 4.57-.198.264-.264.396 0 .66.198.198 1.293 1.293 1.293 1.293.396.396.132.792-.264.792z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">Telegram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Портфолио</Link></li>
              <li><Link to="/blog" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services/consultation" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Консультации</Link></li>
              <li><Link to="/services/development" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Разработка</Link></li>
              <li><Link to="/services/support" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Поддержка</Link></li>
              <li><Link to="/services/training" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Обучение</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <a href="tel:+7" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  +7 (___) ___-__-__
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <a href="mailto:info@tkachenko-kirill.ru" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  info@tkachenko-kirill.ru
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-accent" />
                <span className="text-gray-400 dark:text-gray-500">Пн-Пт 9:00-18:00</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent mt-1" />
                <span className="text-gray-400 dark:text-gray-500">г. Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2024 Кирилл Ткаченко. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 dark:text-gray-500 hover:text-white text-sm transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
