import React from 'react';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { CraftSection } from './components/CraftSection';
import { WorkshopSection } from './components/WorkshopSection';
import { PersonalTouch } from './components/PersonalTouch';
import { CallToCuriosity } from './components/CallToCuriosity';
import { NavigationPanel } from './components/NavigationPanel';

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
     <NavigationPanel />
      <HeroSection />
      <IntroSection />
      <CraftSection />
      <WorkshopSection />
      <PersonalTouch />
      <CallToCuriosity />
    </div>
  );
}

export default App;