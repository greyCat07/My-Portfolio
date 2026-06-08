/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from 'react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const links = [
    { label: 'GitHub', href: PERSONAL_INFO.contact.github },
    { label: 'LinkedIn', href: PERSONAL_INFO.contact.linkedin },
    { label: 'Instagram', href: PERSONAL_INFO.contact.instagram },
    { label: 'Email', href: `mailto:${PERSONAL_INFO.contact.email}` }
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border/40 py-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="text-brand-text-heading font-display font-bold text-sm tracking-tight hover:text-brand-neon transition-colors"
          >
            {PERSONAL_INFO.name}
          </a>
        </div>

        {/* Central Info */}
        <div className="text-xs text-brand-text-muted text-center leading-normal md:leading-none">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Built with Precision.
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-brand-text-muted hover:text-brand-neon transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
