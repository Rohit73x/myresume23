import React, { useEffect } from 'react';
import { Edit, Search, PenTool, Code } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: 'Content Writing',
      icon: <Edit className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: 'SEO Writing', proficiency: 90 },
        { name: 'Blogging', proficiency: 85 },
        { name: 'Copywriting', proficiency: 80 },
        { name: 'Website Content', proficiency: 85 },
      ]
    },
    {
      id: 2,
      title: 'SEO & Digital Marketing',
      icon: <Search className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: 'Keyword Research', proficiency: 85 },
        { name: 'On-Page SEO', proficiency: 90 },
        { name: 'Off-Page SEO', proficiency: 75 },
        { name: 'Content Strategy', proficiency: 80 },
      ]
    },
    {
      id: 3,
      title: 'Design & Multimedia',
      icon: <PenTool className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: 'Canva', proficiency: 90 },
        { name: 'Veed.Ai', proficiency: 85 },
        { name: 'ClipChamp', proficiency: 75 },
        { name: 'Basic Video Editing', proficiency: 70 },
      ]
    },
    {
      id: 4,
      title: 'Technical',
      icon: <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: 'C/C++', proficiency: 70 },
        { name: 'Java', proficiency: 65 },
        { name: 'HTML/CSS', proficiency: 80 },
        { name: 'JavaScript', proficiency: 65 },
        { name: 'MySQL', proficiency: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-up">
            Skills
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            A comprehensive overview of my professional capabilities across content, marketing, design, and technical domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Self-Motivated', 'Quick Learner', 'Strong Communicator', 'Adaptable',
              'Detail-Oriented', 'Creative Thinking', 'Problem Solving', 'Team Collaboration'
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-full text-sm font-medium"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;