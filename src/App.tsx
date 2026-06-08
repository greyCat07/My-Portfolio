/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import SkillsCategories from './components/SkillsCategories';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px', // Triggers when the section is centered within the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-brand-text-muted flex flex-col justify-between overflow-x-hidden transition-colors duration-300">
      {/* Navigation Header */}
      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      {/* Content Layout Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutEducation />
        <Experience />
        <SkillsCategories />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
