/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="work" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background backing glow details */}
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-16">
          <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-neon">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-text-heading tracking-tight flex items-center gap-2">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline Structure */}
        <div className="relative border-l-2 border-brand-border/40 ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-12">
          <div className="space-y-10">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Visual Bullet Connector on Timeline Line */}
                <div className="absolute -left-[45px] sm:-left-[53px] top-4 w-7 h-7 rounded-full bg-brand-dark border-2 border-brand-border flex items-center justify-center group-hover:border-brand-neon transition-colors duration-300 z-10">
                  <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    exp.isRecent 
                      ? 'bg-brand-neon animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.7)]' 
                      : 'bg-brand-border group-hover:bg-brand-purple'
                  }`} />
                </div>

                {/* Main Card */}
                <div className="bg-brand-surface border border-brand-border/60 hover:border-brand-neon/40 p-6 sm:p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.06)] relative overflow-hidden">
                  
                  {/* Neon backlight overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-brand-text-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-mono font-semibold text-brand-neon uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                        {exp.role}
                      </p>
                    </div>

                    {/* Badge/Time metadata block */}
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      {exp.isRecent && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-brand-neon/10 text-brand-neon border border-brand-neon/30 uppercase tracking-widest">
                          <Sparkles className="w-3 h-3 animate-spin duration-10000" /> Recent
                        </span>
                      )}
                      
                      <span className="text-xs sm:text-sm text-brand-text-muted font-sans font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-purple opacity-70" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Location info */}
                  {exp.location && (
                    <div className="flex items-center gap-2 text-xs text-brand-text-muted mb-6">
                      <MapPin className="w-3.5 h-3.5 text-brand-purple opacity-70" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  {/* Bullet accomplishments or description block */}
                  {exp.bullets ? (
                    <ul className="space-y-2.5 relative z-10 pl-1">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text-muted">
                          <span className="text-brand-neon mt-1.5">▪</span>
                          <span className="font-sans leading-relaxed group-hover:text-brand-text-heading transition-colors duration-300">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-brand-text-muted font-sans leading-relaxed group-hover:text-brand-text-heading transition-colors duration-300">
                      {exp.description}
                    </p>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
