/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, ChevronRight, Workflow, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import appianBadge from '../assets/images/Appian-Credential-Program_5F00_Certified-Associate-Developer.png';
import pfBadge from '../assets/images/OIP.webp';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-20 px-6 bg-brand-dark/95 relative border-t border-brand-border/40">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto"
      >
        
        {/* Section Header */}
        <motion.div variants={cardVariants} className="flex items-center gap-3 mb-12">
          <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-purple">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-text-heading tracking-tight">
            Professional Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="bg-brand-surface border border-brand-border hover:border-brand-purple/40 p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.04)] group relative overflow-hidden"
            >
              <div className="absolute -right-16 -bottom-16 w-36 h-36 bg-brand-purple/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-colors" />

              <div className="flex sm:flex-row items-start gap-5 w-full">
                {/* Logo / Badge Frame */}
                <div className="w-14 h-14 rounded-full bg-brand-dark border-2 border-brand-border flex items-center justify-center text-brand-purple relative z-10 group-hover:scale-105 group-hover:border-brand-purple/60 transition-all duration-300 flex-shrink-0">
                  {cert.iconName === 'appian' ? (
                    <ShieldCheck className="w-7 h-7 text-sky-400 group-hover:text-cyan-400 transition-colors" />
                  ) : cert.iconName === 'factorial' ? (
                    <Workflow className="w-7 h-7 text-brand-purple group-hover:text-purple-400 transition-colors" />
                  ) : (
                    <GraduationCap className="w-7 h-7 text-brand-neon group-hover:text-green-400 transition-colors" />
                  )}
                </div>

                {/* Title & Description block */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-display font-bold text-brand-text-heading group-hover:text-brand-purple transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-brand-text-muted text-xs sm:text-sm font-sans mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Appian Badge Display in the Middle */}
              {cert.id === 'cert-1' && (
                <div className="w-full flex justify-center py-4 relative z-10 border-t border-brand-border/30 pt-4">
                  <div className="relative group/badge">
                    {/* Ambient glow */}
                    <div className="absolute inset-0 bg-sky-500/15 rounded-full blur-xl group-hover/badge:scale-110 transition-all duration-500" />
                    <img
                      src={appianBadge}
                      alt="Appian Certified Associate Developer Badge"
                      className="relative w-36 h-36 object-contain rounded-full border border-brand-border/60 bg-brand-dark/30 p-1 group-hover/badge:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}

              {/* Process Factorial Badge Display in the Middle */}
              {cert.id === 'cert-2' && (
                <div className="w-full flex justify-center py-4 relative z-10 border-t border-brand-border/30 pt-4">
                  <div className="relative group/badge">
                    {/* Ambient glow */}
                    <div className="absolute inset-0 bg-brand-purple/15 rounded-full blur-xl group-hover/badge:scale-110 transition-all duration-500" />
                    <img
                      src={pfBadge}
                      alt="Process Factorial Developer Badge"
                      className="relative w-36 h-36 object-contain rounded-full border border-brand-border/60 bg-brand-dark/30 p-1 group-hover/badge:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}

              {/* Training Lists if any */}
              {cert.items && cert.items.length > 0 && (
                <ul className="w-full mt-4 space-y-2 text-xs text-brand-text-muted font-sans border-t border-brand-border/40 pt-4 relative z-10">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-neon mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Action detail indicator */}
              <div className="mt-auto pt-4 relative z-10 w-full">
                {cert.iconName !== 'list' ? (
                  cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-brand-text-muted hover:text-brand-neon group-hover:text-brand-neon transition-colors cursor-pointer group/link"
                    >
                      <span>Verify Credential</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1 text-xs font-mono font-medium text-brand-text-muted group-hover:text-brand-neon transition-colors cursor-pointer">
                      <span>Verify Credential</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )
                ) : (
                  <div className="inline-flex items-center gap-1 text-xs font-mono font-medium text-brand-text-muted group-hover:text-brand-purple transition-colors w-full justify-between">
                    <span>Academic &amp; Agency Standards</span>
                    <ChevronRight className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
