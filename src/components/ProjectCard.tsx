import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Code, Users, Clock, Bug, Zap } from 'lucide-react';

interface ProjectStats {
  linesOfCode: number;
  features: number;
  timeToBuild: string;
  usersImpacted?: number;
  bugsSquashed: number;
}

interface Project {
  id: string;
  title: string;
  techStack: string[];
  synopsis: string;
  challenge: string;
  stats: ProjectStats;
  previewType: 'video' | 'terminal' | 'image';
  previewContent: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress';
}

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ 
  value, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  return (
    <span className="px-3 py-1 text-xs font-mono bg-gray-800/50 border border-gray-600/30 rounded-full text-blue-300 hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300 hover:shadow-sm hover:shadow-blue-400/20">
      {tech}
    </span>
  );
};

const TerminalPreview: React.FC<{ content: string }> = ({ content }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + content[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, content]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-green-400">
        $ {displayText}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(project)}
    >
      {/* Status indicator */}
      <div className="absolute top-4 right-4">
        <div className={`w-3 h-3 rounded-full ${
          project.status === 'in-progress' 
            ? 'bg-yellow-400 animate-pulse' 
            : 'bg-green-400'
        }`}></div>
      </div>

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 font-mono">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
      </div>

      {/* Interactive Preview */}
      <div className="mb-4 h-32 bg-gray-800/30 rounded-lg overflow-hidden relative">
        {isHovered && project.previewType === 'terminal' ? (
          <TerminalPreview content={project.previewContent} />
        ) : project.previewType === 'image' ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 flex items-center justify-center">
            <Code size={32} className="text-blue-400" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <Zap size={32} className="text-purple-400" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-white text-sm font-mono">Click to explore</div>
        </div>
      </div>

      {/* Synopsis */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.synopsis}
      </p>

      {/* Challenge Quote */}
      <div className="bg-yellow-400/10 border-l-4 border-yellow-400 pl-4 py-2 mb-4">
        <p className="text-yellow-300 text-xs font-mono italic">
          "{project.challenge}"
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-blue-400 mb-1">
            <Code size={14} />
            <span className="text-xs">Lines</span>
          </div>
          <div className="text-white font-mono text-sm">
            <AnimatedCounter value={project.stats.linesOfCode} />
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-green-400 mb-1">
            <Zap size={14} />
            <span className="text-xs">Features</span>
          </div>
          <div className="text-white font-mono text-sm">
            <AnimatedCounter value={project.stats.features} />
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-purple-400 mb-1">
            <Clock size={14} />
            <span className="text-xs">Time</span>
          </div>
          <div className="text-white font-mono text-sm">
            {project.stats.timeTouild}
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-red-400 mb-1">
            <Bug size={14} />
            <span className="text-xs">Bugs</span>
          </div>
          <div className="text-white font-mono text-sm">
            <AnimatedCounter value={project.stats.bugsSquashed} />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {project.githubUrl && (
          <button 
            className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, '_blank');
            }}
          >
            <Github size={16} />
            <span>Code</span>
          </button>
        )}
        
        {project.liveUrl && (
          <button 
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-sm"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveUrl, '_blank');
            }}
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </button>
        )}
      </div>
    </div>
  );
};