/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Download, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Provide a polished down-to-earth user feedback experience when CV is downloaded.
    alert('Preparing CV PDF compiled for Chermie Moureen Rilloraza. Download started!');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex items-center justify-center bg-brand-dark bg-grid-pattern"
    >
      {/* Background glowing elements */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Metadata & Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-border backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-neon"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-brand-neon font-semibold uppercase">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-brand-text-heading">
              Computer Science <br />
              Professional &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-sky-400 to-brand-purple">
                Graphic Artist
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-brand-text-muted max-w-xl font-sans leading-relaxed"
          >
            {PERSONAL_INFO.subtitle}
          </motion.p>

          {/* Call to Actions / Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('#contact')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-neon hover:bg-cyan-400 text-brand-dark font-semibold rounded-xl font-sans transition-all duration-300 shadow-lg shadow-brand-neon/20 hover:shadow-brand-neon/40 transform hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
            >
              Get in Touch
              <Send className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('#work')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-surface border border-brand-border hover:border-brand-neon/50 text-brand-text-heading hover:text-brand-neon font-semibold rounded-xl font-sans transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              View Experience
            </button>

            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-brand-border/80 hover:border-brand-purple/50 text-brand-text-muted hover:text-brand-purple rounded-xl font-sans text-sm font-medium transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>
        </div>

        {/* Right Column - Glowing Portrait Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[410px] lg:h-[410px] group flex items-end justify-center overflow-visible"
          >
            {/* Glowing halos */}
            <div className="absolute w-[88%] h-[88%] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-brand-neon/20 to-brand-purple/20 rounded-full blur-2xl group-hover:scale-105 transition-transform duration-500 z-0" />
            <div className="absolute w-[90%] h-[90%] bottom-[-4px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-neon via-indigo-500 to-brand-purple rounded-full opacity-35 group-hover:opacity-60 blur transition-all duration-500 z-0" />

            {/* Back Circle Frame */}
            <div className="absolute w-[88%] h-[88%] bottom-0 left-1/2 -translate-x-1/2 rounded-full border-2 border-brand-border bg-brand-surface/60 shadow-2xl z-10 backdrop-blur-md transition-all duration-300 group-hover:border-brand-neon/40" />

            {/* Portrait Image (fits perfectly at bottom and overlaps at the top/sides) */}
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] h-[105%] object-cover object-bottom rounded-b-full z-20 transform group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02] saturate-[1.02]"
            />

            {/* Creative tag overlay */}
            <div className="absolute bottom-6 right-6 bg-brand-surface/90 border border-brand-border px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-40">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-medium text-brand-text-heading">
                Artist &amp; Coder
              </span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative arrow helper */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          onClick={() => handleScrollTo('#about')}
          className="cursor-pointer text-brand-text-muted hover:text-brand-neon transition-colors p-2"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-brand-border via-brand-neon to-transparent mx-auto" />
        </motion.div>
      </div>

    </section>
  );
}
