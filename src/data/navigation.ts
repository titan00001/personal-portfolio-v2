import { Project, ReadingItem, ExplorationTopic } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Air Pollution Dispersion Simulator",
    description:
      "An interactive simulation of pollutant dispersion from a point source using the Gaussian plume model and Briggs equations, visualized with real-time canvas rendering.",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    completionDate: "2024-04-10",
    status: "completed",
  },
  {
    id: "2",
    title: "Medicine Inventory Management System",
    description:
      "A native desktop app for managing pharmacy inventory using PyQt, showcasing MVC architecture, SQLite integration, and event-driven UI handling.",
    technologies: ["Python", "PyQt5", "SQLite"],
    completionDate: "2023-08-01",
    status: "completed",
  },
  {
    id: "3",
    title: "@mithya-team/react-form-plugin",
    description:
      "A flexible dynamic form library for React with support for conditional logic, custom input components, and schema validation via Zod.",
    technologies: ["React", "TypeScript", "react-hook-form", "Zod"],
    completionDate: "2025-06-01",
    status: "ongoing",
  },
  {
    id: "4",
    title: "Real-time Blog Collaboration Editor",
    description:
      "A Google Docs-style rich text editor supporting real-time collaboration and code block embedding, powered by CRDT (Yjs) and Slate.js.",
    technologies: ["Next.js", "WebSocket", "Yjs", "Slate.js", "Tailwind CSS"],
    completionDate: "",
    status: "ongoing",
  },
];

export const readingList: ReadingItem[] = [
  {
    id: "1",
    title: "Designing for the Mind",
    author: "Victor Yocco",
    category: "UX Design",
    summary:
      "Explores how psychological principles can improve user experience design and create more intuitive interfaces.",
    status: "in-progress",
    dateAdded: "2024-01-10",
  },
  {
    id: "2",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    category: "Software Engineering",
    summary:
      "A guide to building maintainable, scalable software systems with clear separation of concerns.",
    status: "completed",
    dateAdded: "2023-12-15",
  },
  {
    id: "3",
    title: "The Art of Readable Code",
    author: "Dustin Boswell",
    category: "Programming",
    summary:
      "Practical techniques for writing code that is easy to understand, maintain, and debug.",
    status: "completed",
    dateAdded: "2023-11-20",
  },
];

export const explorationTopics: ExplorationTopic[] = [
  {
    id: "1",
    title: "Low-latency Systems",
    type: "research",
    description:
      "Investigating techniques for building ultra-fast, responsive systems that can handle high-frequency data processing.",
    progress: "Researching memory management patterns",
  },
  {
    id: "2",
    title: "AI-powered Motion UI",
    type: "learning",
    description:
      "Exploring how machine learning can predict and enhance user interface animations for better user experience.",
    progress: "Building prototype with gesture recognition",
  },
  {
    id: "3",
    title: "Quantum Computing Applications",
    type: "interest",
    description:
      "Understanding potential applications of quantum computing in everyday software development.",
    progress: "Reading foundational papers",
  },
  {
    id: "4",
    title: "Launch Open Source Framework",
    type: "goal",
    description:
      "Create and maintain a widely-adopted open source framework for modern web development.",
    progress: "Planning architecture and community strategy",
  },
];
