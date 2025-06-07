import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { personalTouchContent } from '../data/personalTouch';

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

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {personalTouchContent.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {personalTouchContent.subtitle}
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6">
          {personalTouchContent.insights.map((insight, index) => (
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