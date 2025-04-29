import React, { useEffect } from 'react';
import { FileDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-up">
            Resume
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Here's a detailed look at my professional journey, education, and skills.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
            <div className="bg-indigo-600 text-white p-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">Rohit Kumar Gupta</h3>
                  <p className="text-indigo-200">Content Writer | Digital Marketer | Tech Enthusiast</p>
                </div>
                
                <a
                  href="/resume.pdf"
                  download="Rohit_Kumar_Gupta_Resume.pdf"
                  className="mt-4 md:mt-0 px-6 py-3 bg-white text-indigo-600 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-md"
                >
                  <FileDown size={18} />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Education
                    </h4>
                    
                    <div className="ml-4 border-l-2 border-indigo-600 pl-4">
                      <div className="mb-4">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Bachelor of Computer Applications (BCA)
                        </h5>
                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                          <span>GLA University, Mathura</span>
                          <span>2021 - 2024</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          Graduated with comprehensive knowledge in computer applications, programming, and software development.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Experience
                    </h4>
                    
                    <div className="ml-4 border-l-2 border-indigo-600 pl-4">
                      <div className="mb-4">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Executive Content Writer
                        </h5>
                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                          <span>Digiversal Consultant Private Limited</span>
                          <span>March 2024 - Present</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                          <li>Content creation for blogs, websites, and social media</li>
                          <li>SEO optimization and keyword research</li>
                          <li>Creation of visual content using design tools</li>
                          <li>Collaboration with marketing team on branding strategies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Contact Information
                    </h4>
                    
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Email:</span> 
                        <span>rg0066553@gmail.com</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Location:</span> 
                        <span>Mathura, India</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Languages
                    </h4>
                    
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li className="flex justify-between">
                        <span>English</span>
                        <span>Professional</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hindi</span>
                        <span>Native</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Interests
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {['Content Creation', 'Digital Marketing', 'Technology', 'Web Development', 'Writing', 'Reading'].map((interest, i) => (
                        <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;