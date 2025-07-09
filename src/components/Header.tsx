
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'О нас', href: '/about' },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold text-primary hover:text-accent transition-colors group">
            <Zap className="w-8 h-8 mr-2 group-hover:rotate-12 transition-transform duration-300 text-accent" />
            <span className="gradient-animate bg-clip-text text-transparent">WebStudio Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent relative group ${
                  location.pathname === item.href ? 'text-accent' : 'text-gray-700'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+79001234567" className="flex items-center text-sm text-gray-600 hover:text-accent transition-colors hover:scale-105 transform duration-200">
              <Phone className="w-4 h-4 mr-1" />
              +7 (900) 123-45-67
            </a>
            <a href="mailto:info@webstudio-pro.ru" className="flex items-center text-sm text-gray-600 hover:text-accent transition-colors hover:scale-105 transform duration-200">
              <Mail className="w-4 h-4 mr-1" />
              info@webstudio-pro.ru
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-accent transition-colors hover:scale-110 transform duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top-2">
            <nav className="py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-accent ${
                    location.pathname === item.href ? 'text-accent bg-gray-50' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 mt-4 pt-4 px-4 space-y-2">
                <a href="tel:+79001234567" className="flex items-center text-sm text-gray-600 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 mr-1" />
                  +7 (900) 123-45-67
                </a>
                <a href="mailto:info@webstudio-pro.ru" className="flex items-center text-sm text-gray-600 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 mr-1" />
                  info@webstudio-pro.ru
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
