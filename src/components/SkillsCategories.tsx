/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Palette, Code2, Globe, Cpu, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function SkillsCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  // Maps custom color accents and icons based on the image type
  const getCategoryTheme = (imageType: 'design' | 'programming' | 'web') => {
    switch (imageType) {
      case 'design':
        return {
          icon: <Palette className="w-8 h-8 text-brand-purple" />,
          borderColor: 'group-hover:border-brand-purple/50',
          glowColor: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]',
          badgeBg: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
          radialGlow: 'bg-brand-purple/15',
          glowText: 'text-brand-purple'
        };
      case 'programming':
        return {
          icon: <Cpu className="w-8 h-8 text-sky-400" />,
          borderColor: 'group-hover:border-sky-400/50',
          glowColor: 'group-hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]',
          badgeBg: 'bg-sky-400/10 text-sky-400 border-sky-400/20',
          radialGlow: 'bg-sky-400/15',
          glowText: 'text-sky-400'
        };
      case 'web':
        return {
          icon: <Globe className="w-8 h-8 text-brand-neon" />,
          borderColor: 'group-hover:border-brand-neon/50',
          glowColor: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]',
          badgeBg: 'bg-brand-neon/10 text-brand-neon border-brand-neon/20',
          radialGlow: 'bg-brand-neon/15',
          glowText: 'text-brand-neon'
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-brand-dark/95 relative">
      {/* Decorative backing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto"
      >
        
        {/* Section Title */}
        <motion.div variants={cardVariants} className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-surface/40 border border-brand-border text-[11px] font-mono tracking-widest text-brand-neon uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-text-heading tracking-tight">
            Technical Categories
          </h2>
          <p className="text-sm sm:text-base text-brand-text-muted max-w-xl font-sans">
            A cohesive collection of logic frameworks, layout precision, and creative software proficiencies.
          </p>
        </motion.div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => {
            const theme = getCategoryTheme(cat.imageType);
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className="group relative"
              >
                {/* Visual Glow Behind Cards */}
                <div className="absolute inset-0 bg-transparent rounded-2xl transition-all duration-500 pointer-events-none z-0" />

                {/* Main Card */}
                <div className={`relative z-10 bg-brand-surface border border-brand-border/60 ${theme.borderColor} ${theme.glowColor} p-8 rounded-2xl transition-all duration-500 flex flex-col items-center text-center h-full`}>
                  
                  {/* Decorative glowing back ellipse */}
                  <div className={`absolute top-8 w-28 h-28 ${theme.radialGlow} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`} />

                  {/* Icon Frame */}
                  <div className="w-20 h-20 rounded-2xl bg-brand-dark border-2 border-brand-border/80 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                    {theme.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-brand-text-heading mt-6 mb-3 group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>

                  {/* Divider line */}
                  <div className="w-12 h-0.5 bg-brand-border/80 my-4 group-hover:w-20 transition-all duration-500" />

                  {/* Chips/Tags container */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-xs">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono font-medium px-3 py-1.5 rounded-lg border bg-brand-dark/40 ${theme.badgeBg} transition-all duration-300 hover:scale-102 cursor-default`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
