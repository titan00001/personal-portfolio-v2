import React from 'react';
import { X, Github, ExternalLink, Code, Users, Clock, Bug } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  techStack: string[];
  synopsis: string;
  challenge: string;
  stats: {
    linesOfCode: number;
    features: number;
    timeTouild: string;
    usersImpacted?: number;
    bugsSquashed: number;
  };
  previewType: 'video' | 'terminal' | 'image';
  previewContent: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress';
  detailedDescription?: string;
  problem?: string;
  approach?: string;
  challenges?: string;
  outcome?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto m-4 animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white font-mono mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-mono bg-gray-800 border border-gray-600 rounded-full text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Hero Image/Demo */}
          <div className="mb-8 h-64 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Code size={48} className="text-blue-400 mx-auto mb-4" />
              <p className="text-gray-300">Interactive demo coming soon</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Code size={24} className="text-blue-400 mx-auto mb-2" />
              <div className="text-white font-mono text-lg">{project.stats.linesOfCode.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Lines of Code</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Clock size={24} className="text-green-400 mx-auto mb-2" />
              <div className="text-white font-mono text-lg">{project.stats.features}</div>
              <div className="text-gray-400 text-sm">Features</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Clock size={24} className="text-purple-400 mx-auto mb-2" />
              <div className="text-white font-mono text-lg">{project.stats.timeTouild}</div>
              <div className="text-gray-400 text-sm">Build Time</div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Bug size={24} className="text-red-400 mx-auto mb-2" />
              <div className="text-white font-mono text-lg">{project.stats.bugsSquashed}</div>
              <div className="text-gray-400 text-sm">Bugs Squashed</div>
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.problem || "This project addressed a critical need in the development workflow, requiring innovative solutions to complex technical challenges."}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.approach || "I approached this challenge by breaking it down into manageable components, leveraging modern development practices and focusing on scalable architecture."}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">Technical Challenges</h3>
              <div className="bg-yellow-400/10 border-l-4 border-yellow-400 pl-6 py-4">
                <p className="text-yellow-300 italic">
                  "{project.challenge}"
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                {project.challenges || "The most significant challenge was optimizing performance while maintaining code readability and maintainability."}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">Outcome & Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.outcome || "The project successfully delivered on all requirements, providing a robust solution that improved efficiency and user experience."}
              </p>
            </section>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8 pt-8 border-t border-gray-700">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};