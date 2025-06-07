import { WorkshopProject } from '../types';

export const sampleProjects: WorkshopProject[] = [
  {
    id: '1',
    title: 'Real-time Analytics Dashboard',
    techStack: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    synopsis: 'Built this to simplify how teams track real-time progress under extreme latency constraints.',
    challenge: 'Scaling websocket connections to 10k+ users was the toughest part.',
    stats: {
      linesOfCode: 15420,
      features: 23,
      timeToBuild: '3 months',
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
      timeToBuild: '6 weeks',
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
      timeToBuild: '4 months',
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

export const workshopContent = {
  title: "Inside the Workshop",
  subtitle: "Where ideas become reality, one commit at a time",
  filters: ['all', 'frontend', 'backend', 'fullstack'],
  wipTitle: "What I'm Building Now",
  wipDescription: "Real-time collaborative code editor with AI-powered suggestions",
  wipStatus: [
    "📝 feat: Add real-time cursor tracking",
    "🔧 fix: Optimize WebRTC connection handling",
    "✨ feat: Implement AI code completion",
    "⚡ Currently working on: Multi-language support"
  ]
}; 