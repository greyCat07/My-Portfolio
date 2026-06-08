/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Linkedin, Send, Sparkles, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fully fill out all communication fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    
    // Smooth delivery simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto dismiss success toast
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1800);
  };

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
    <section id="contact" className="py-24 px-6 bg-brand-dark/90 relative overflow-hidden">
      {/* Visual background backing halos */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-50px] w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Text Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-surface/40 border border-brand-border text-[11px] font-mono tracking-widest text-brand-neon uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Reach out
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-text-heading tracking-tight">
                Initiate Contact
              </h2>
              <p className="text-brand-text-muted font-sans text-sm sm:text-base leading-relaxed">
                Looking for a versatile professional to bridge technical execution and creative design? Let's connect.
              </p>
            </div>

            {/* Structured channel items */}
            <div className="flex flex-col gap-5 pt-4">
              
              {/* Location channel */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-full bg-brand-surface border border-brand-border text-brand-neon group-hover:border-brand-neon/60 group-hover:scale-105 transition-all">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-text-muted block">Location</span>
                  <span className="text-sm font-sans font-semibold text-brand-text-heading">{PERSONAL_INFO.contact.location}</span>
                </div>
              </div>

              {/* Email channel */}
              <div className="flex items-center gap-4 group justify-between bg-brand-surface/40 hover:bg-brand-surface/70 border border-transparent hover:border-brand-border p-3.5 rounded-2xl transition-all duration-300">
                <div 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-4 flex-grow cursor-pointer"
                  title="Click to copy email address to clipboard"
                >
                  <div className="p-3.5 rounded-full bg-brand-surface border border-brand-border text-brand-neon group-hover:border-brand-neon/60 group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5 text-brand-neon" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-text-muted block">Direct Email</span>
                    <span className="text-sm font-mono text-brand-text-heading group-hover:text-brand-neon transition-colors select-all">
                      {PERSONAL_INFO.contact.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-brand-border bg-brand-surface/40 hover:bg-brand-surface hover:border-brand-neon/50 text-brand-text-muted hover:text-brand-neon transition-all flex items-center justify-center cursor-pointer relative group/button"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="absolute -top-10 right-0 scale-0 group-hover/button:scale-100 transition-transform duration-200 bg-brand-surface border border-brand-border text-[9px] text-brand-text-muted px-2 py-1 rounded shadow-lg font-mono whitespace-nowrap z-30">
                      {emailCopied ? 'Copied!' : 'Copy Email'}
                    </span>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="p-2 rounded-lg border border-brand-border bg-brand-surface/40 hover:bg-brand-surface hover:border-brand-purple/50 text-brand-text-muted hover:text-brand-purple transition-all flex items-center justify-center cursor-pointer relative group/mail"
                    title="Send Email directly"
                  >
                    <Send className="w-4 h-4" />
                    <span className="absolute -top-10 right-0 scale-0 group-hover/mail:scale-100 transition-transform duration-200 bg-brand-surface border border-brand-border text-[9px] text-brand-text-muted px-2 py-1 rounded shadow-lg font-mono whitespace-nowrap z-30">
                      Open Mail App
                    </span>
                  </a>
                </div>
              </div>

              {/* LinkedIn channel */}
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-full bg-brand-surface border border-brand-border text-brand-neon group-hover:border-brand-neutron/60 group-hover:scale-105 transition-all">
                  <Linkedin className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-text-muted block">Professional Networks</span>
                  <span className="text-sm font-sans text-brand-text-heading group-hover:text-brand-purple transition-colors">{PERSONAL_INFO.contact.linkedinLabel}</span>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Block - Interactive Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-brand-surface border border-brand-border/60 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-brand-neon/5 rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-brand-dark/80 text-brand-text-heading placeholder-brand-text-muted/40 text-sm py-3.5 px-4 rounded-xl border border-brand-border focus:border-brand-neon focus:ring-2 focus:ring-brand-neon/20 focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@example.com"
                  className="w-full bg-brand-dark/80 text-brand-text-heading placeholder-brand-text-muted/40 text-sm py-3.5 px-4 rounded-xl border border-brand-border focus:border-brand-neon focus:ring-2 focus:ring-brand-neon/20 focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full bg-brand-dark/80 text-brand-text-heading placeholder-brand-text-muted/40 text-sm py-3.5 px-4 rounded-xl border border-brand-border focus:border-brand-neon focus:ring-2 focus:ring-brand-neon/20 focus:outline-none transition-all font-sans resize-none"
                />
              </div>

              {/* Error feedback block */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl flex items-center gap-2.5 text-xs"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-brand-neon hover:bg-cyan-400 disabled:bg-cyan-800 text-brand-dark font-display font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-neon/15 hover:shadow-brand-neon/30 cursor-pointer disabled:cursor-not-allowed uppercase tracking-wider text-xs sm:text-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-brand-dark" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Notification Status Overlay block */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-brand-card border border-brand-neon p-4 rounded-xl shadow-2xl flex items-start gap-3.5 max-w-sm blur-none"
          >
            <div className="p-1 rounded-full bg-brand-neon/10 text-brand-neon">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-brand-text-heading text-sm">Transmission Successful</h4>
              <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                Thank you! Your submission has been processed. Chermie will review your request promptly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Copied Toast Notification */}
      <AnimatePresence>
        {emailCopied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-brand-card border border-brand-purple p-4 rounded-xl shadow-2xl flex items-start gap-3.5 max-w-sm blur-none"
          >
            <div className="p-1.5 rounded-full bg-brand-purple/10 text-brand-purple">
              <Check className="w-5 h-5 text-brand-purple" />
            </div>
            <div>
              <h4 className="font-display font-bold text-brand-text-heading text-sm font-semibold">Address Copied to Clipboard!</h4>
              <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                Chermie's email address has been successfully copied. You are ready to paste.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
