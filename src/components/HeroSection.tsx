import React, { useState } from 'react';
import { TypingAnimation } from './TypingAnimation';

export const HeroSection: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleFirstComplete = () => {
    setTimeout(() => setStep(1), 500);
  };

  const handleSecondComplete = () => {
    setTimeout(() => setStep(2), 300);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Breathing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-pink-500/5 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="font-mono text-lg md:text-xl lg:text-2xl text-green-400 mb-8">
          <div className="mb-4">
            {step >= 0 && (
              <TypingAnimation 
                text="// Building things that think and feel."
                speed={60}
                onComplete={handleFirstComplete}
              />
            )}
          </div>
          
          {step >= 1 && (
            <div className="text-left">
              <TypingAnimation 
                text="function startPortfolio() {"
                speed={40}
                onComplete={handleSecondComplete}
              />
              {step >= 2 && (
                <div className="ml-8 mt-2 space-y-1">
                  <div className="text-blue-400">
                    <TypingAnimation text="const you = getInspired();\" speed={30} />
                  </div>
                  <div className="text-pink-400">
                    <TypingAnimation text="explore(you);" speed={30} />
                  </div>
                  <div className="text-green-400">
                    <TypingAnimation text="}" speed={30} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {step >= 2 && (
          <div className="mt-16 animate-fade-in">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto animate-bounce"></div>
            <p className="text-white/60 text-sm mt-4">Scroll to explore</p>
          </div>
        )}
      </div>
    </section>
  );
};