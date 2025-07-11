import React, { useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Code, Palette, Brain } from 'lucide-react';
import { craftContent } from '../data/craft';

const icons = [<Code size={32} />, <Palette size={32} />, <Brain size={32} />];

const CraftCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  animation: React.ReactNode;
}> = ({ icon, title, description, animation }) => {
  return (
    <div className="min-w-80 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mx-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="h-32 flex items-center justify-center">
        {animation}
      </div>
    </div>
  );
};

export const CraftSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {craftContent.title}
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            {craftContent.subtitle}
          </p>
        </ScrollReveal>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {craftContent.pillars.map((pillar, index) => {
            const animation = index === 0 ? (
              <div className="space-y-2 w-full">
                <div className="h-2 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-2 bg-blue-500 rounded animate-pulse delay-100"></div>
                <div className="h-2 bg-pink-500 rounded animate-pulse delay-200"></div>
                <div className="h-2 bg-gray-600 rounded animate-pulse delay-300"></div>
              </div>
            ) : index === 1 ? (
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-pink-500 rounded opacity-60 animate-pulse"></div>
              </div>
            ) : (
              <div className="font-mono text-xs text-green-400 space-y-1">
                <div className="animate-fade-in">🤔 Challenge received...</div>
                <div className="animate-fade-in delay-500">🧠 Thinking...</div>
                <div className="animate-fade-in delay-1000">✅ Prototype created.</div>
              </div>
            );

            return (
              <CraftCard
                key={pillar.title}
                icon={icons[index]}
                title={pillar.title}
                description={pillar.description}
                animation={animation}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};