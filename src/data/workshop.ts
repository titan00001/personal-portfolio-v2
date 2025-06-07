import { WorkshopProject } from "../types";

export const sampleProjects: WorkshopProject[] = [
  {
    id: "1",
    title: "Air Pollution Dispersion Simulator",
    techStack: ["HTML", "CSS", "JavaScript", "Canvas"],
    synopsis:
      "Interactive Gaussian plume simulation based on Briggs equations to visualize air pollutant dispersion from a point source.",
    challenge:
      "Rewriting core dispersion logic and real-time canvas rendering using vanilla JS while maintaining scientific accuracy and usability.",
    stats: {
      linesOfCode: 8200,
      features: 11,
      timeToBuild: "1 month",
      usersImpacted: 500,
      bugsSquashed: 18,
    },
    previewType: "terminal",
    previewContent:
      "💨 Rendering plume with Stack Height: 75m, Wind Speed: 5 m/s, Stability Class: B... ✅ Simulation updated in real-time.",
    liveUrl: "https://titan00001.github.io/Air-pollution-model/",
    githubUrl: "https://github.com/titan00001/Air-pollution-model",
    category: "frontend",
    status: "completed",
  },
  {
    id: "2",
    title: "Medicine Inventory Management System",
    techStack: ["Python", "PyQt5", "SQLite"],
    synopsis:
      "A native desktop application built to manage medicine stock and simulate pharmacy operations — created to demonstrate my early understanding of GUI development in Python.",
    challenge:
      "Learning event-driven GUI programming using PyQt and applying MVC architecture for managing inventory views and database updates in real time.",
    stats: {
      linesOfCode: 4700,
      features: 7,
      timeToBuild: "4 weeks",
      bugsSquashed: 9,
    },
    previewType: "terminal",
    previewContent:
      "📦 Loaded 124 medicines | 💉 Expiry alerts enabled | 🔄 Inventory synced with SQLite DB",
    githubUrl: "https://github.com/yourusername/med-inventory-pyqt",
    category: "backend",
    status: "completed",
  },
  {
    id: "3",
    title: "Collaborative Blog Editor",
    techStack: ["Next.js", "Slate.js", "Yjs", "WebSocket", "CRDT", "Tailwind"],
    synopsis:
      "A real-time, rich text editor for blogs with collaborative editing features similar to Google Docs.",
    challenge:
      "Integrating CRDT with custom Slate.js nodes and syncing changes across multiple cursors efficiently.",
    stats: {
      linesOfCode: 7400,
      features: 9,
      timeToBuild: "ongoing",
      bugsSquashed: 12,
    },
    previewType: "terminal",
    previewContent:
      "User A joined the session. Syncing edits... 🟢 Collaboration active.",
    githubUrl: "https://github.com/yourusername/blog-collaborator",
    category: "fullstack",
    status: "in-progress",
  },
  {
    id: "4",
    title: "Config based React Form",
    techStack: ["React", "TypeScript", "react-hook-form", "Zod"],
    synopsis:
      "A dynamic and extensible form library for React that supports configurable input rendering, conditional logic, validation, and custom component injection.",
    challenge:
      "Designing a generic form engine with TypeScript support, conditional rendering, custom input extensibility, and integration with react-hook-form + schema validation.",
    stats: {
      linesOfCode: 6100,
      features: 14,
      timeToBuild: "1 week",
      bugsSquashed: 5,
    },
    previewType: "terminal",
    previewContent:
      "🔧 Generating dynamic form with 7 fields | ✅ Validating with Zod schema | 💡 Custom input: <OtpInput /> registered successfully",
    githubUrl: "https://github.com/mithya-team/react-form-plugin",
    liveUrl: "https://www.npmjs.com/package/@mithya-team/react-form-plugin",
    category: "frontend",
    status: "in-progress",
  },
];

export const workshopContent = {
  title: "Inside the Workshop",
  subtitle: "Where ideas become reality, one commit at a time",
  filters: ["all", "frontend", "backend", "fullstack"],
  wipTitle: "Collaborative Blog Editor",
  wipDescription:
    "A real-time, CRDT-powered blog editor built with Next.js, Slate.js, and Yjs — enabling seamless collaborative writing with support for rich formatting, embeds, and code blocks.",
  wipStatus: [
    "🧠 Architected using CRDT (Yjs) and WebSocket for real-time syncing",
    "💡 Custom Slate.js editor with support for rich text formatting and code blocks",
    "📦 Image upload implemented (private feature)",
    "🛠️ Next up: Real-time cursor tracking & collaborative awareness layer",
  ],
};
