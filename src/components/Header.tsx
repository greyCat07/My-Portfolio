/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ activeSection, theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-brand-border/60 py-4 shadow-xl shadow-brand-dark/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2 text-xl font-display font-bold tracking-tight text-brand-text-heading hover:text-brand-neon transition-colors"
          >
            <span className="text-brand-text-heading">{PERSONAL_INFO.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-brand-surface/40 px-2 py-1 rounded-full border border-brand-border/40 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-5 py-1.5 text-sm font-sans font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-zinc-950' : 'text-brand-text-muted hover:text-brand-text-heading'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-brand-neon to-brand-purple rounded-full -z-10 shadow-lg shadow-brand-neon/20 animate-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? 'text-zinc-950 font-bold' : ''}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Actions & Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-brand-border/80 text-brand-text-muted hover:text-brand-neon hover:border-brand-neon/50 bg-brand-surface/50 transition-all cursor-pointer relative group flex items-center justify-center shadow-lg"
              title={theme === 'dark' ? 'Switch to High-Contrast Light Mode' : 'Switch to Techno-Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500 group-hover:-rotate-12 transition-transform duration-300" />
              )}
              <span className="absolute -bottom-10 right-0 w-max scale-0 group-hover:scale-100 transition-all duration-200 bg-brand-surface border border-brand-border text-[11px] text-brand-text-muted px-2.5 py-1.5 rounded-lg shadow-xl font-mono">
                {theme === 'dark' ? 'Activate Light Mode ☀️' : 'Activate Dark Mode 🌌'}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-brand-border/80 text-brand-text-muted hover:text-brand-neon transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-brand-dark/95 backdrop-blur-2xl border-b border-brand-border py-8 px-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-3 px-4 rounded-xl font-display text-lg font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-neon to-brand-purple text-zinc-950 font-bold'
                        : 'text-brand-text-muted hover:text-brand-text-heading hover:bg-brand-surface/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-text-muted">
              <span>Bridging logic & art</span>
              <span className="flex items-center gap-1 text-brand-neon">
                <Sparkles className="w-3.5 h-3.5" /> Handcrafted
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
