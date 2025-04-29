import React, { useEffect } from 'react';
import { FileDown, ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Rohit Kumar Gupta
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-indigo-600 dark:text-indigo-400">
              Content Writer | Digital Marketer | Tech Enthusiast
            </p>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              BCA graduate with a passion for creating engaging content, 
              implementing digital marketing strategies, and exploring the latest 
              in technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Rohit_Kumar_Gupta_Resume.pdf"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-md"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <FileDown size={18} />
                Download Resume
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Rohit Kumar Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;