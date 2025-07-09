
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Palette, Smartphone, Globe, Database, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/utils/animations';

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useScrollAnimation(0.1);

  const team = [
    {
      name: "Кирилл Ткаченко",
      role: "Ведущий разработчик",
      specialty: "Frontend & Backend",
      description: "Эксперт в React, Node.js и современных веб-технологиях. Более 7 лет опыта разработки.",
      image: "/lovable-uploads/f507d7ba-285c-46a1-b8ed-5f6fc1bfe213.png",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Анна Петрова",
      role: "UX/UI Дизайнер",
      specialty: "Дизайн интерфейсов",
      description: "Создает интуитивные и красивые интерфейсы, которые увеличивают конверсию.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["Figma", "Adobe Creative Suite", "UI/UX", "Прототипирование"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      name: "Дмитрий Соколов",
      role: "Mobile разработчик",
      specialty: "Мобильные приложения",
      description: "Специализируется на создании нативных и гибридных мобильных приложений.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: "Елена Волкова",
      role: "Frontend разработчик",
      specialty: "Веб-интерфейсы",
      description: "Создает отзывчивые и интерактивные веб-интерфейсы с современными технологиями.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["Vue.js", "CSS3", "Animation", "Responsive Design"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Максим Орлов",
      role: "Backend разработчик",
      specialty: "Серверная разработка",
      description: "Разрабатывает надежные серверные решения и API для веб-приложений.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["Python", "Django", "REST API", "Microservices"],
      icon: <Database className="w-6 h-6" />
    },
    {
      name: "Сергей Козлов",
      role: "DevOps инженер",
      specialty: "Инфраструктура",
      description: "Обеспечивает стабильную работу приложений и автоматизацию процессов.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, team.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, team.length - 2)) % Math.max(1, team.length - 2));
  };

  return (
    <div ref={carouselRef} className="animate-on-scroll">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Наша команда</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {team.map((member, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift hover-glow group">
                <div className="flex items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-accent text-sm">{member.role}</p>
                  </div>
                  <div className="ml-auto text-primary group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-sm text-gray-700 mb-1">{member.specialty}</h5>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
