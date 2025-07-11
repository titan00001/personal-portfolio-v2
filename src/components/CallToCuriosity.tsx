import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Copy, Check } from 'lucide-react';
import { callToCuriosityContent } from '../data/callToCuriosity';

export const CallToCuriosity: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = callToCuriosityContent.email;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {callToCuriosityContent.title.split(' ').slice(0, 5).join(' ')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              {callToCuriosityContent.title.split(' ').slice(5).join(' ')}
            </span>
            ?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            {callToCuriosityContent.subtitle}
          </p>
          
          <button
            onClick={copyEmail}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span>{email}</span>
            {copied ? (
              <Check size={20} className="text-green-300" />
            ) : (
              <Copy size={20} className="group-hover:scale-110 transition-transform" />
            )}
          </button>
          
          {copied && (
            <p className="text-green-400 mt-4 animate-fade-in">
              {callToCuriosityContent.copied}
            </p>
          )}
        </ScrollReveal>
        
        <ScrollReveal delay={500}>
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm mb-4">{callToCuriosityContent.stillScrolling}</p>
            <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent mx-auto"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};