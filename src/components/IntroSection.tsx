import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const IntroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              A software engineer crafting{' '}
              <span className="text-blue-400 font-semibold">human-first</span> tech
            </p>
            
            {/* Floating sphere animation */}
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-spin-reverse opacity-40"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 animate-pulse"></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};