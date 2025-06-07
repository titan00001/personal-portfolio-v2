export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  completionDate: string;
  status: 'ongoing' | 'completed';
}

export interface WorkshopProject {
  id: string;
  title: string;
  techStack: string[];
  synopsis: string;
  challenge: string;
  stats: {
    linesOfCode: number;
    features: number;
    timeToBuild: string;
    usersImpacted?: number;
    bugsSquashed: number;
  };
  previewType: 'video' | 'terminal' | 'image';
  previewContent: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress';
  problem?: string;
    approach?: string;
    challenges?: string;
    outcome?: string;
}

export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  category: string;
  summary: string;
  status: 'completed' | 'in-progress';
  dateAdded: string;
}

export interface ExplorationTopic {
  id: string;
  title: string;
  type: 'interest' | 'learning' | 'research' | 'goal';
  description: string;
  progress?: string;
} 