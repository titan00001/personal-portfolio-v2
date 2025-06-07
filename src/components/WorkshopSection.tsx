import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Filter, Grid, List } from 'lucide-react';

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
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Real-time Analytics Dashboard',
    techStack: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    synopsis: 'Built this to simplify how teams track real-time progress under extreme latency constraints.',
    challenge: 'Scaling websocket connections to 10k+ users was the toughest part.',
    stats: {
      linesOfCode: 15420,
      features: 23,
      timeTouild: '3 months',
      usersImpacted: 10000,
      bugsSquashed: 47
    },
    previewType: 'terminal',
    previewContent: 'npm run build && deploying to production... ✅ Dashboard live with 10,247 active connections',
    liveUrl: 'https://dashboard.example.com',
    githubUrl: 'https://github.com/alexchen/dashboard',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '2',
    title: 'AI-Powered Code Review Bot',
    techStack: ['Python', 'OpenAI API', 'GitHub Actions', 'Docker'],
    synopsis: 'Automated code review process that catches bugs before they reach production.',
    challenge: 'Training the AI to understand context and provide meaningful feedback.',
    stats: {
      linesOfCode: 8930,
      features: 12,
      timeTouild: '6 weeks',
      bugsSquashed: 23
    },
    previewType: 'terminal',
    previewContent: 'Analyzing pull request... Found 3 potential issues. Suggesting improvements...',
    githubUrl: 'https://github.com/alexchen/ai-reviewer',
    category: 'backend',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Motion UI Component Library',
    techStack: ['React', 'Framer Motion', 'Storybook', 'TypeScript'],
    synopsis: 'A collection of physics-based animations that make interfaces feel alive.',
    challenge: 'Balancing performance with smooth animations across all devices.',
    stats: {
      linesOfCode: 12340,
      features: 35,
      timeTouild: '4 months',
      bugsSquashed: 31
    },
    previewType: 'image',
    previewContent: '',
    liveUrl: 'https://motion-ui.example.com',
    githubUrl: 'https://github.com/alexchen/motion-ui',
    category: 'frontend',
    status: 'in-progress'
  }
];

export const WorkshopSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  const filteredProjects = filter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === filter);

  const handleOpenModal = (project: Project) => {
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
                Inside the{' '}
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  Workshop
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Where ideas become reality, one commit at a time
              </p>
              
              {/* Filter Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Filter size={20} className="text-gray-400" />
                <div className="flex space-x-2">
                  {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category as any)}
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
                <h3 className="text-xl font-bold text-white font-mono">What I'm Building Now</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Real-time collaborative code editor with AI-powered suggestions
              </p>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 space-y-1">
                  <div>📝 feat: Add real-time cursor tracking</div>
                  <div>🔧 fix: Optimize WebRTC connection handling</div>
                  <div>✨ feat: Implement AI code completion</div>
                  <div className="text-yellow-400">⚡ Currently working on: Multi-language support</div>
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