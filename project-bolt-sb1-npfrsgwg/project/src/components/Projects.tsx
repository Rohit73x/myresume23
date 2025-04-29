import React, { useEffect } from 'react';
import { ExternalLink, BookOpen, Edit, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Ebook on AI Tools for Digital Marketing',
      description: 'Comprehensive guide exploring AI tools to enhance digital marketing strategies and campaign performance.',
      tools: ['Research', 'Content Writing', 'Graphic Design'],
      icon: <BookOpen className="w-12 h-12 text-white" />,
      color: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      link: '#',
      year: '2025'
    },
    {
      id: 2,
      title: 'Promotional Campaign Visuals',
      description: 'Created engaging infographics and social media reels for brand promotional campaigns.',
      tools: ['Canva', 'Veed.Ai', 'Clipchamp'],
      icon: <Edit className="w-12 h-12 text-white" />,
      color: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      link: '#',
      year: '2024'
    },
    {
      id: 3,
      title: 'Thought Leadership Articles',
      description: 'Series of industry-specific articles establishing authority and thought leadership.',
      tools: ['Content Strategy', 'SEO', 'Industry Research'],
      icon: <BookOpen className="w-12 h-12 text-white" />,
      color: 'bg-gradient-to-r from-green-600 to-teal-600',
      link: '#',
      year: '2024'
    },
    {
      id: 4,
      title: 'Case Studies & Whitepapers',
      description: 'Detailed case studies and whitepapers documenting successful branding strategies and outcomes.',
      tools: ['Data Analysis', 'Technical Writing', 'Visualization'],
      icon: <FileText className="w-12 h-12 text-white" />,
      color: 'bg-gradient-to-r from-orange-600 to-amber-600',
      link: '#',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-up">
            Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            A collection of my notable projects showcasing my expertise in content creation, digital marketing, and professional communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`${project.color} p-8 relative`}>
                <div className="absolute top-4 right-4 bg-black/20 text-white text-sm px-3 py-1 rounded-full">
                  {project.year}
                </div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tools & Skills Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full inline-block transition-all transform hover:scale-105 shadow-md"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;