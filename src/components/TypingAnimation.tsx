import React, { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  showCursorAfterComplete?: boolean;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 50, 
  onComplete,
  className = "",
  showCursorAfterComplete = false
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!hasCalledComplete.current) {
      setIsComplete(true);
      if (onComplete) {
        hasCalledComplete.current = true;
        onComplete();
      }
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    if (!isComplete || showCursorAfterComplete) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setShowCursor(false);
    }
  }, [isComplete, showCursorAfterComplete]);

  useEffect(() => {
    hasCalledComplete.current = false;
    setCurrentIndex(0);
    setDisplayText('');
    setIsComplete(false);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      {(!isComplete || showCursorAfterComplete) && (
        <span className={`inline-block ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          |
        </span>
      )}
    </span>
  );
};