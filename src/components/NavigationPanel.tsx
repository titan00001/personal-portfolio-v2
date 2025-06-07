import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Book, 
  Code, 
  Zap, 
  Search,
  Filter,
  Clock2,
  Target,
  Lightbulb,
  Menu,
  X,
} from 'lucide-react';
import { Project, ReadingItem as ReadingItemType, ExplorationTopic } from '../types';
import { projects, readingList, explorationTopics } from '../data/navigation';

const CollapsibleSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}> = ({ title, icon, isExpanded, onToggle, children }) => {
  return (
    <div className="border-b border-gray-700/30 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-800/30 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span className="font-semibold text-white">{title}</span>
        </div>
        <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
          <ChevronRight size={16} className="text-gray-400" />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project; isExpanded: boolean; onToggle: () => void }> = ({
  project,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="mb-3 last:mb-0">
      <button
        onClick={onToggle}
        className="w-full text-left p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-white text-sm">{project.title}</h4>
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${
              project.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'
            }`}></span>
            <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`} />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-3 pb-3">
          <p className="text-gray-300 text-xs leading-relaxed mb-2">
            {project.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Completed: {new Date(project.completionDate).toLocaleDateString()}</span>
            <span className={`px-2 py-1 rounded ${
              project.status === 'completed' 
                ? 'bg-green-500/20 text-green-300' 
                : 'bg-yellow-500/20 text-yellow-300'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReadingItem: React.FC<{ item: ReadingItemType; isExpanded: boolean; onToggle: () => void }> = ({
  item,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="mb-3 last:mb-0">
      <button
        onClick={onToggle}
        className="w-full text-left p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium text-white text-sm">{item.title}</h4>
          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} />
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>by {item.author}</span>
          <span className={`px-2 py-1 rounded ${
            item.status === 'completed' 
              ? 'bg-green-500/20 text-green-300' 
              : 'bg-blue-500/20 text-blue-300'
          }`}>
            {item.status === 'completed' ? 'Read' : 'Reading'}
          </span>
        </div>
        
        <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
          {item.category}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-3 pb-3">
          <p className="text-gray-300 text-xs leading-relaxed">
            {item.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExplorationItem: React.FC<{ topic: ExplorationTopic; isExpanded: boolean; onToggle: () => void }> = ({
  topic,
  isExpanded,
  onToggle
}) => {
  const getTypeIcon = () => {
    switch (topic.type) {
      case 'interest': return <Lightbulb size={12} className="text-yellow-400" />;
      case 'learning': return <Book size={12} className="text-blue-400" />;
      case 'research': return <Search size={12} className="text-purple-400" />;
      case 'goal': return <Target size={12} className="text-green-400" />;
    }
  };

  return (
    <div className="mb-3 last:mb-0">
      <button
        onClick={onToggle}
        className="w-full text-left p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {getTypeIcon()}
            <h4 className="font-medium text-white text-sm">{topic.title}</h4>
          </div>
          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} />
        </div>
        
        <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded capitalize">
          {topic.type}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-3 pb-3">
          <p className="text-gray-300 text-xs leading-relaxed mb-2">
            {topic.description}
          </p>
          {topic.progress && (
            <div className="flex items-center space-x-2 text-xs">
              <Clock2 size={10} className="text-blue-400" />
              <span className="text-blue-300">{topic.progress}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type SortByType = 'date' | 'category' | 'status';

export const NavigationPanel: React.FC = () => {
  const [isPanelMounted, setIsPanelMounted] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    projects: false,
    reading: false,
    exploration: false
  });
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortByType>('date');

  useEffect(() => {
    if (isPanelMounted) {
      const timer = setTimeout(() => setIsPanelOpen(true), 10);
      return () => clearTimeout(timer);
    }
  }, [isPanelMounted]);

  useEffect(() => {
    if (!isPanelOpen) return;
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [isPanelOpen]);

  const openPanel = () => {
    setIsPanelMounted(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const handleTransitionEnd = () => {
    if (!isPanelOpen) {
      setIsPanelMounted(false);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const filteredReadingList = readingList
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'category':
          return a.category.localeCompare(b.category);
        case 'status':
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

  return (
    <>
      <button
        onClick={openPanel}
        className={`fixed top-6 right-6 z-40 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full text-white hover:bg-gray-800/90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/30 ${
          isPanelMounted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        aria-label="Open navigation panel"
        disabled={isPanelMounted}
      >
        <Menu size={20} />
      </button>

      {isPanelMounted && (
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`fixed top-6 right-6 z-50 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg w-80 max-h-[calc(100vh-3rem)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform ${
            isPanelOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-700/50">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">Navigation</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <button 
                  onClick={closePanel}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close navigation panel"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="text-xs text-gray-400">
              Local time: {currentTime.toLocaleTimeString()}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[calc(100vh-8rem)]">
            {/* Projects Section */}
            <CollapsibleSection
              title="Projects"
              icon={<Code size={16} className="text-blue-400" />}
              isExpanded={expandedSections.projects}
              onToggle={() => toggleSection('projects')}
            >
              <div className="space-y-1">
                {projects.map(project => (
                  <ProjectItem
                    key={project.id}
                    project={project}
                    isExpanded={expandedItems[`project-${project.id}`] || false}
                    onToggle={() => toggleItem(`project-${project.id}`)}
                  />
                ))}
              </div>
            </CollapsibleSection>

            {/* Reading List Section */}
            <CollapsibleSection
              title="Reading List"
              icon={<Book size={16} className="text-pink-400" />}
              isExpanded={expandedSections.reading}
              onToggle={() => toggleSection('reading')}
            >
              {/* Search and Sort Controls */}
              <div className="mb-4 space-y-2">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white text-xs placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Filter size={12} className="text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortByType)}
                    className="flex-1 px-2 py-1 bg-gray-800/50 border border-gray-600/30 rounded text-white text-xs focus:border-blue-400/50 focus:outline-none"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="category">Sort by Category</option>
                    <option value="status">Sort by Status</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                {filteredReadingList.map(item => (
                  <ReadingItem
                    key={item.id}
                    item={item}
                    isExpanded={expandedItems[`reading-${item.id}`] || false}
                    onToggle={() => toggleItem(`reading-${item.id}`)}
                  />
                ))}
              </div>
            </CollapsibleSection>

            {/* Exploration Section */}
            <CollapsibleSection
              title="Exploration"
              icon={<Zap size={16} className="text-yellow-400" />}
              isExpanded={expandedSections.exploration}
              onToggle={() => toggleSection('exploration')}
            >
              <div className="space-y-1">
                {explorationTopics.map(topic => (
                  <ExplorationItem
                    key={topic.id}
                    topic={topic}
                    isExpanded={expandedItems[`exploration-${topic.id}`] || false}
                    onToggle={() => toggleItem(`exploration-${topic.id}`)}
                  />
                ))}
              </div>
            </CollapsibleSection>
          </div>
        </div>
      )}
    </>
  );
};