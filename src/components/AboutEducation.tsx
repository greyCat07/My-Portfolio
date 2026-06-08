/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, GraduationCap, Building, Award, FlaskConical } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data';

export default function AboutEducation() {
  // Animation variants for staggered load-in
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
    <section id="about" className="py-24 px-6 bg-brand-dark/90 relative">
      {/* Absolute faint backing glows */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[250px] h-[250px] bg-brand-neon/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Block - About Me */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="flex items-center gap-2.5">
              <User className="text-brand-purple w-5 h-5" />
              <h2 className="text-2xl font-display font-bold text-brand-text-heading tracking-tight">
                About Me
              </h2>
            </div>

            <div className="bg-brand-surface border border-brand-border/60 p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-brand-purple/40 transition-colors duration-300">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-brand-purple/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-colors duration-500" />
              <p className="text-brand-text-muted font-sans text-sm sm:text-base leading-relaxed relative z-10 font-normal">
                {PERSONAL_INFO.about}
              </p>

              {/* Soft Skills Section */}
              <div className="mt-8 pt-6 border-t border-brand-border/40 relative z-10">
                <span className="text-[11px] font-mono tracking-widest text-brand-purple font-semibold uppercase block mb-4">
                  Soft Skills
                </span>
                
                <div className="flex flex-wrap gap-2.5">
                  {PERSONAL_INFO.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-brand-text-heading bg-brand-dark/60 border border-brand-border/80 hover:border-brand-purple/50 hover:text-brand-purple transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Education Timeline */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="flex items-center gap-2.5">
              <GraduationCap className="text-brand-neon w-5 h-5" />
              <h2 className="text-2xl font-display font-bold text-brand-text-heading tracking-tight">
                Education
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-brand-surface border border-brand-border/60 p-6 rounded-2xl flex gap-4 items-start relative overflow-hidden group hover:border-brand-neon/40 transition-colors duration-300"
                >
                  <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-neon/5 rounded-full blur-2xl group-hover:bg-brand-neon/10 transition-colors duration-500" />
                  
                  {/* Icon Wrapper */}
                  <div className="p-3.5 rounded-xl bg-brand-dark border border-brand-border/80 text-brand-neon flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {edu.type === 'college' ? (
                      <Building className="w-5 h-5 text-sky-400" />
                    ) : (
                      <FlaskConical className="w-5 h-5 text-brand-purple" />
                    )}
                  </div>

                  {/* Institution Details */}
                  <div className="relative z-10 flex flex-col">
                    <h3 className="font-display font-semibold text-brand-text-heading group-hover:text-cyan-300 transition-colors duration-300 text-sm sm:text-base">
                      {edu.institution}
                    </h3>
                    <p className="text-brand-neon text-xs font-mono font-semibold mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-brand-text-muted text-xs font-sans mt-2">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
