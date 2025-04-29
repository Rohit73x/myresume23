import React, { useEffect } from 'react';
import { Calendar, Users, Target, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-up">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-indigo-600 pl-8 pb-16" data-aos="fade-up">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  Executive Content Writer
                </h3>
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm">
                  March 2024 - Present
                </span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Digiversal Consultant Private Limited
              </h4>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                  <p>
                    Content writing and editing for blogs, websites, and social media platforms, ensuring SEO optimization and engaging narratives.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                  <p>
                    Implementing SEO strategies, including keyword targeting, on-page optimization, and internal linking to improve content visibility.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                  <p>
                    Creating social media branding materials, including reels and infographics using tools like Canva and Veed.Ai for enhanced engagement.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                  <p>
                    Collaborating with the marketing team to develop and implement effective branding strategies across multiple channels.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Increased blog traffic by optimizing content for search engines and enhancing readability</li>
                  <li>Developed comprehensive content strategy for client websites resulting in improved engagement metrics</li>
                  <li>Created viral social media campaigns that expanded brand reach and audience engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;