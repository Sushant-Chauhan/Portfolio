import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { ProfileSection } from './components/ProfileSection';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <ProfileSection />
      <Tools />
      <Contact />
      <Navigation />
    </div>
  );
}

export default App;