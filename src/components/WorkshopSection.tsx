import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Filter } from 'lucide-react';
import { WorkshopProject } from '../types';
import { sampleProjects, workshopContent } from '../data/workshop';

export const WorkshopSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WorkshopProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  const filteredProjects = filter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === filter);

  const handleOpenModal = (project: WorkshopProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="py-20 relative">
        {/* Blueprint background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                {workshopContent.title.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  {workshopContent.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                {workshopContent.subtitle}
              </p>
              
              {/* Filter Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Filter size={20} className="text-gray-400" />
                <div className="flex space-x-2">
                  {workshopContent.filters.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category as 'all' | 'frontend' | 'backend' | 'fullstack')}
                      className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                        filter === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 200}>
                <ProjectCard 
                  project={project} 
                  onOpenModal={handleOpenModal}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Work in Progress Card */}
          <ScrollReveal delay={600}>
            <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white font-mono">{workshopContent.wipTitle}</h3>
              </div>
              <p className="text-gray-300 mb-4">
                {workshopContent.wipDescription}
              </p>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 space-y-1">
                  {workshopContent.wipStatus.map((status, index) => (
                    <div key={index} className={status.includes('Currently working on') ? 'text-yellow-400' : ''}>
                      {status}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};