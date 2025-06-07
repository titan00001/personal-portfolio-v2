# Component Documentation

## Overview
This document provides detailed documentation for all React components in the software developer portfolio application. Each component follows a consistent design philosophy centered around developer aesthetics, smooth animations, and professional presentation.

## Core Components

### ScrollReveal
**Location**: `src/components/ScrollReveal.tsx`
**Purpose**: Provides smooth fade-in animations when elements enter the viewport

```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;  // Intersection threshold (0-1)
  delay?: number;      // Animation delay in milliseconds
}
```

**Features**:
- Uses Intersection Observer API for performance
- Customizable animation threshold and delay
- Smooth opacity and translate-y transitions
- Reusable wrapper component

**Usage**:
```jsx
<ScrollReveal threshold={0.1} delay={200}>
  <div>Content to animate</div>
</ScrollReveal>
```

---

### TypingAnimation
**Location**: `src/components/TypingAnimation.tsx`
**Purpose**: Creates realistic typing effects with cursor blink

```typescript
interface TypingAnimationProps {
  text: string;
  speed?: number;        // Typing speed in milliseconds
  onComplete?: () => void;
  className?: string;
}
```

**Features**:
- Character-by-character typing simulation
- Animated cursor with 500ms blink interval
- Callback function on completion
- Customizable typing speed

**Usage**:
```jsx
<TypingAnimation 
  text="Hello World!" 
  speed={50} 
  onComplete={() => console.log('Done!')} 
/>
```

---

### HeroSection
**Location**: `src/components/HeroSection.tsx`
**Purpose**: Main landing section with sequential typing animations

**Features**:
- Sequential typing animation system
- Breathing gradient background
- Developer-focused messaging
- Scroll indicator with bounce animation
- Multi-step reveal system

**Design Elements**:
- Gradient background: `from-gray-900 via-black to-gray-900`
- Accent colors: Green (`text-green-400`), Blue (`text-blue-400`), Pink (`text-pink-400`)
- Code-style typography with syntax highlighting

---

### NavigationPanel
**Location**: `src/components/NavigationPanel.tsx`
**Purpose**: Comprehensive sidebar navigation with collapsible sections

**Features**:
- Collapsible sections with smooth animations
- Project tracking with status indicators
- Reading list management
- Exploration topics categorization
- Search and filter functionality

**Sections**:
1. **Current Projects** - Active development work
2. **Reading List** - Books and articles with completion status
3. **Exploration** - Research interests and goals

**Interactive Elements**:
- Expand/collapse animations (300ms duration)
- Status indicators (green for completed, yellow for in-progress)
- Technology badges with hover effects

---

### ProjectCard
**Location**: `src/components/ProjectCard.tsx`
**Purpose**: Interactive project showcase cards with statistics

```typescript
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
```

**Features**:
- Animated counters for statistics
- Interactive preview modes (terminal, image, video)
- Hover effects with scale and glow
- Technology badges with custom styling
- Challenge quotes with accent borders

**Animations**:
- Card hover scale: `1.02`
- Counter animations with `requestAnimationFrame`
- Terminal typing simulation
- Smooth transitions (500ms duration)

---

### ProjectModal
**Location**: `src/components/ProjectModal.tsx`
**Purpose**: Detailed project showcase modal with full information

**Features**:
- Full-screen modal overlay
- Detailed project information
- Live preview integration
- GitHub and live site links
- Smooth open/close animations

---

### CraftSection
**Location**: `src/components/CraftSection.tsx`
**Purpose**: Philosophy showcase with horizontal scrolling cards

**Features**:
- Horizontal scroll with snap points
- Three pillar design: Build, Design, Think
- Animated visual elements for each pillar
- Smooth card hover effects

**Cards**:
1. **Build** - Animated progress bars
2. **Design** - Rotating design elements
3. **Think** - Sequential thinking process

---

### WorkshopSection
**Location**: `src/components/WorkshopSection.tsx`
**Purpose**: Main project showcase with filtering and grid layout

**Features**:
- Project filtering by category
- Grid layout with responsive design
- Blueprint background pattern
- Work-in-progress section
- Modal integration for detailed views

**Filter Categories**:
- All projects
- Frontend
- Backend
- Full-stack

---

### PersonalTouch
**Location**: `src/components/PersonalTouch.tsx`
**Purpose**: Personal insights and developer philosophy

**Features**:
- Personal anecdotes and insights
- Developer lifestyle representation
- Soft skills and mindset showcase

---

### CallToCuriosity
**Location**: `src/components/CallToCuriosity.tsx`
**Purpose**: Contact and engagement section

**Features**:
- Call-to-action elements
- Contact information
- Social links and professional profiles

## Utility Components

### AnimatedCounter
**Location**: `src/components/ProjectCard.tsx` (internal)
**Purpose**: Smooth number animations with intersection observer

**Features**:
- Intersection Observer for performance
- Smooth counting animation
- Customizable duration
- Number formatting with locale support

### TechBadge
**Location**: `src/components/ProjectCard.tsx` (internal)
**Purpose**: Consistent technology stack badges

**Features**:
- Monospace font styling
- Hover effects with glow
- Consistent color scheme
- Border animations

### TerminalPreview
**Location**: `src/components/ProjectCard.tsx` (internal)
**Purpose**: Terminal-style preview with typing effect

**Features**:
- Realistic terminal styling
- Traffic light buttons
- Typing animation
- Monospace font with syntax highlighting

## Design Patterns

### Consistent Hover Effects
All interactive elements follow a consistent hover pattern:
- Scale: `hover:scale-[1.02]` or `hover:scale-105`
- Duration: `duration-300` to `duration-500`
- Border glow: `hover:border-blue-500/50`
- Shadow: `hover:shadow-xl hover:shadow-blue-500/10`

### Animation Timing
- Fast interactions: 200-300ms
- Content reveals: 500ms
- Complex animations: 1000ms
- Typing effects: 30-60ms per character

### Color Consistency
- Primary text: `text-white`
- Secondary text: `text-gray-300` / `text-gray-400`
- Accent colors: Blue (`text-blue-400`), Pink (`text-pink-400`), Green (`text-green-400`)
- Status indicators: Green (completed), Yellow (in-progress)

### Typography
- Primary font: `IBM Plex Mono` (monospace)
- Code elements: `font-mono` class
- Headings: `font-bold` with size variants
- Body text: Regular weight with good line height

## Accessibility Features

### Keyboard Navigation
- All interactive elements are focusable
- Proper tab order maintained
- Enter/Space key support for buttons

### Screen Reader Support
- Proper ARIA labels and roles
- Semantic HTML structure
- Alternative text for visual elements

### Performance Optimizations
- Intersection Observer for animations
- RequestAnimationFrame for smooth counters
- Lazy loading for modal content
- Optimized re-renders with React hooks

## Testing Considerations

### Component Testing
- Props validation
- Animation completion
- User interaction handling
- Accessibility compliance

### Integration Testing
- Modal open/close functionality
- Filter state management
- Navigation between sections
- Responsive behavior

### Performance Testing
- Animation frame rates
- Memory usage during animations
- Scroll performance
- Modal rendering optimization 