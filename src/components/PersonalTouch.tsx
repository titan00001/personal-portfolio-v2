import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const InsightCard: React.FC<{
  title: string;
  content: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ title, content, isActive, onHover, onLeave }) => {
  return (
    <div 
      className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'bg-gradient-to-br from-blue-500/20 to-pink-500/20 border border-blue-500/50 scale-105' 
          : 'bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className={`text-gray-300 transition-all duration-300 ${
        isActive ? 'opacity-100 transform translate-y-0' : 'opacity-70'
      }`}>
        {content}
      </p>
    </div>
  );
};

export const PersonalTouch: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const insights = [
    {
      title: "How I Think",
      content: "I believe the best code is written for humans first, computers second. Every function should tell a story, every variable should have purpose."
    },
    {
      title: "How I Code",
      content: "Red-green-refactor. Test-driven development isn't just a practice—it's a philosophy. I write code that works today and adapts tomorrow."
    },
    {
      title: "How I Collaborate",
      content: "Great software is a team sport. I believe in clear communication, thoughtful code reviews, and sharing knowledge that lifts everyone up."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not a Resume
            </h2>
            <p className="text-gray-400 text-lg">
              A glimpse into the philosophy behind the code
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <InsightCard
                title={insight.title}
                content={insight.content}
                isActive={activeCard === index}
                onHover={() => setActiveCard(index)}
                onLeave={() => setActiveCard(null)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};