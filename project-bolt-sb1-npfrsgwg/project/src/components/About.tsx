import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/5" data-aos="fade-right">
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rohit Kumar Gupta - Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-4xl font-bold">
                2024
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5" data-aos="fade-left">
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              BCA Graduate | Content Writer | Digital Marketer
            </h3>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate about Creating Engaging Content and Implementing Digital Strategies
            </h4>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I'm Rohit Kumar Gupta, a recent Bachelor of Computer Applications (BCA) graduate from GLA University, Mathura 
                (May 2024). As a Content Writer and Digital Marketing Executive, I blend my technical knowledge with creative skills 
                to develop compelling content and effective digital strategies.
              </p>
              
              <p>
                I'm deeply interested in technology, content creation, digital marketing strategies, and web development. My 
                background in computer applications gives me a unique perspective on digital content and marketing challenges.
              </p>
              
              <p>
                What sets me apart is my self-motivation, quick learning ability, strong communication skills, and adaptability. 
                I thrive in dynamic environments and embrace challenges as opportunities for growth.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h5 className="font-bold text-indigo-600 dark:text-indigo-400">University</h5>
                <p className="text-gray-700 dark:text-gray-300">GLA University</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h5 className="font-bold text-indigo-600 dark:text-indigo-400">Degree</h5>
                <p className="text-gray-700 dark:text-gray-300">BCA (2024)</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h5 className="font-bold text-indigo-600 dark:text-indigo-400">Email</h5>
                <p className="text-gray-700 dark:text-gray-300 text-sm">rg0066553@gmail.com</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h5 className="font-bold text-indigo-600 dark:text-indigo-400">Based in</h5>
                <p className="text-gray-700 dark:text-gray-300">Mathura, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;