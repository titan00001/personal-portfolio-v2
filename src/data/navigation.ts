import { Project, ReadingItem, ExplorationTopic } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real-time Analytics Dashboard',
    description: 'A comprehensive dashboard for tracking user engagement and system performance with live data visualization.',
    technologies: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    completionDate: '2024-01-15',
    status: 'completed'
  },
  {
    id: '2',
    title: 'AI Code Review Bot',
    description: 'Automated code review system using machine learning to identify potential issues and suggest improvements.',
    technologies: ['Python', 'OpenAI API', 'GitHub Actions'],
    completionDate: '2024-02-20',
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'Motion UI Library',
    description: 'Physics-based animation components for creating fluid, responsive user interfaces.',
    technologies: ['React', 'Framer Motion', 'TypeScript'],
    completionDate: '2024-03-10',
    status: 'ongoing'
  }
];

export const readingList: ReadingItem[] = [
  {
    id: '1',
    title: 'Designing for the Mind',
    author: 'Victor Yocco',
    category: 'UX Design',
    summary: 'Explores how psychological principles can improve user experience design and create more intuitive interfaces.',
    status: 'in-progress',
    dateAdded: '2024-01-10'
  },
  {
    id: '2',
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    category: 'Software Engineering',
    summary: 'A guide to building maintainable, scalable software systems with clear separation of concerns.',
    status: 'completed',
    dateAdded: '2023-12-15'
  },
  {
    id: '3',
    title: 'The Art of Readable Code',
    author: 'Dustin Boswell',
    category: 'Programming',
    summary: 'Practical techniques for writing code that is easy to understand, maintain, and debug.',
    status: 'completed',
    dateAdded: '2023-11-20'
  }
];

export const explorationTopics: ExplorationTopic[] = [
  {
    id: '1',
    title: 'Low-latency Systems',
    type: 'research',
    description: 'Investigating techniques for building ultra-fast, responsive systems that can handle high-frequency data processing.',
    progress: 'Researching memory management patterns'
  },
  {
    id: '2',
    title: 'AI-powered Motion UI',
    type: 'learning',
    description: 'Exploring how machine learning can predict and enhance user interface animations for better user experience.',
    progress: 'Building prototype with gesture recognition'
  },
  {
    id: '3',
    title: 'Quantum Computing Applications',
    type: 'interest',
    description: 'Understanding potential applications of quantum computing in everyday software development.',
    progress: 'Reading foundational papers'
  },
  {
    id: '4',
    title: 'Launch Open Source Framework',
    type: 'goal',
    description: 'Create and maintain a widely-adopted open source framework for modern web development.',
    progress: 'Planning architecture and community strategy'
  }
]; 