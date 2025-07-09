
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Users, Code } from 'lucide-react';
import { useScrollAnimation } from '@/utils/animations';

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const team = [
    {
      name: "Кирилл Ткаченко",
      role: "Ведущий разработчик",
      experience: "7+ лет",
      photo: "/lovable-uploads/f507d7ba-285c-46a1-b8ed-5f6fc1bfe213.png",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      description: "Эксперт в создании современных веб-приложений с фокусом на производительность и пользовательский опыт.",
      projects: "150+",
      rating: 4.9,
      specialization: "Fullstack разработка",
      achievements: ["Сертифицированный React разработчик", "Спикер IT-конференций", "Ментор junior разработчиков"]
    },
    {
      name: "Анна Петрова",
      role: "UI/UX Дизайнер",
      experience: "5+ лет",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Создаю интуитивные и красивые интерфейсы, которые помогают пользователям легко достигать своих целей.",
      projects: "100+",
      rating: 4.8,
      specialization: "UX/UI Design",
      achievements: ["Победитель конкурса дизайна", "Автор статей о UX", "Ментор дизайнеров"]
    },
    {
      name: "Михаил Сидоров",
      role: "Мобильный разработчик",
      experience: "6+ лет",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      description: "Специализируюсь на разработке кроссплатформенных мобильных приложений с нативной производительностью.",
      projects: "80+",
      rating: 4.9,
      specialization: "Mobile Development",
      achievements: ["Эксперт React Native", "Контрибьютор открытых проектов", "Технический лидер"]
    },
    {
      name: "Елена Козлова",
      role: "Backend разработчик",
      experience: "4+ лет",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
      description: "Создаю надежные и масштабируемые серверные решения для высоконагруженных приложений.",
      projects: "60+",
      rating: 4.7,
      specialization: "Backend Development",
      achievements: ["AWS Certified", "DevOps практики", "Архитектор решений"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const currentMember = team[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессионалы, которые создают выдающиеся решения
          </p>
        </div>

        <div className={`bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Фото и основная информация */}
            <div className="text-center md:text-left">
              <div className="relative inline-block mb-6">
                <img
                  src={currentMember.photo}
                  alt={currentMember.name}
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-3 shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{currentMember.name}</h3>
              <p className="text-accent text-lg font-semibold mb-2">{currentMember.role}</p>
              <p className="text-gray-600 mb-4">{currentMember.specialization}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {currentMember.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {currentMember.experience}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {currentMember.projects} проектов
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  {currentMember.rating}
                </div>
              </div>
            </div>

            {/* Описание и достижения */}
            <div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {currentMember.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-primary" />
                  Достижения
                </h4>
                <ul className="space-y-2">
                  {currentMember.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Навигация */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
