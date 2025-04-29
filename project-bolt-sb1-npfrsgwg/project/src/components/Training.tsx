import React, { useEffect } from 'react';
import { Calendar, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Training: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const certifications = [
    {
      id: 1,
      title: 'Python Programming',
      organization: 'Internshala',
      date: 'August 2022',
      icon: '🐍',
      color: 'bg-blue-100 dark:bg-blue-900',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'Web Development',
      organization: 'Internshala',
      date: 'August 2022',
      icon: '🌐',
      color: 'bg-orange-100 dark:bg-orange-900',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      organization: 'Simplilearn',
      date: 'July 2023',
      icon: '📱',
      color: 'bg-green-100 dark:bg-green-900',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      id: 4,
      title: 'Communication Skills',
      organization: 'TCS ION',
      date: 'July 2023',
      icon: '🗣️',
      color: 'bg-purple-100 dark:bg-purple-900',
      textColor: 'text-purple-600 dark:text-purple-400',
    }
  ];

  return (
    <section id="training" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-up">
            Training & Certifications
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`p-6 ${cert.color}`}>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">{cert.icon}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${cert.textColor}`}>
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{cert.organization}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Completed intensive training in {cert.title.toLowerCase()}, gaining practical skills and industry-relevant knowledge.
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These certifications have equipped me with the skills needed to excel in content creation and digital marketing.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            <span>Let's discuss how these skills can benefit your project</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Training;