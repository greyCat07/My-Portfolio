/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EducationItem, ExperienceItem, SkillCategory, CertificationItem } from './types';
import chermieAvatar from './assets/images/chermie.png';

export const PERSONAL_INFO = {
  name: 'Chermie Moureen',
  fullName: 'Chermie Moureen J. Rilloraza',
  headline: 'Software Developer & Graphic Artist',
  subtitle: 'Turning complex code into seamless user experiences, and blank canvases into pixel-perfect designs. Let us build something beautiful that works flawlessly.',
  avatar: chermieAvatar,
  cvUrl: '#',
  about: 'I am a passionate technologist and creative mind, striving to create high-impact digital solutions. My background in computer science provides a solid foundation for complex problem-solving, while my experience as a graphic artist allows me to design intuitive and visually compelling user experiences.',
  softSkills: [
    'Creative',
    'Resourceful',
    'Keen to Learn',
    'Critical Thinker',
    'Tech-savvy',
    'Team Player'
  ],
  contact: {
    location: 'Philippines',
    email: 'chemjavierrill@gmail.com',
    linkedin: 'https://linkedin.com/in/chermie-moureen-rilloraza',
    linkedinLabel: 'Chermie Moureen Rilloraza | LinkedIn',
    github: 'https://github.com/greyCat07',
    instagram: 'https://www.instagram.com/chem_icalr/'
  }
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Polytechnic University of the Philippines',
    degree: 'BS Computer Science',
    period: '2020 - 2025 (Expected)',
    type: 'college'
  },
  {
    id: 'edu-2',
    institution: 'Mangatarem National High School',
    degree: 'STEM Strand',
    period: 'High School',
    type: 'highschool'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Accenture',
    role: 'Associate Software Engineer (Full-time)',
    period: 'Jun 2025 - Present · 1 yr 1 mo',
    location: 'Mandaluyong, National Capital Region, Philippines · On-site',
    isRecent: true,
    bullets: [
      'Packaged App Development Associate',
      'Certified Appian Associate Developer',
      'Process Factorial Developer'
    ]
  },
  {
    id: 'exp-2',
    company: 'LeeSunHwa Co., Ltd.',
    role: 'Design & Video Studio Professional',
    period: 'Jun 2024 - May 2025',
    location: 'Remote / Manila, Philippines',
    description: 'Contributed to high-quality visual outputs, blending creative design principles with technical execution in a fast-paced studio environment.'
  },
  {
    id: 'exp-3',
    company: 'Lamina Studios LLC',
    role: 'Cybersecurity Intern',
    period: 'Mar 2024 - Jun 2024',
    location: 'Manila, Philippines · Hybrid',
    description: 'Gained practical experience in threat analysis, security protocols, and safeguarding digital infrastructure within a tech-forward studio setting.'
  },
  {
    id: 'exp-4',
    company: 'Pix\'l Ink Digital Printing',
    role: 'Graphic Artist',
    period: 'Oct 2022 - Jan 2024',
    location: 'Pangasinan, Philippines · On-site',
    description: 'Executed precise digital print designs, managing color profiles and layout specifications to deliver premium marketing materials.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'skills-design',
    title: 'Design & UI/UX',
    imageType: 'design',
    tags: ['Figma', 'Adobe CC', 'Prototyping']
  },
  {
    id: 'skills-prog',
    title: 'Programming',
    imageType: 'programming',
    tags: ['Java', 'Python', 'C++', 'Data Structures']
  },
  {
    id: 'skills-web',
    title: 'Web Development',
    imageType: 'web',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Certified Appian Developer',
    description: 'Professional certification in low-code automation and business process management.',
    iconName: 'appian',
    verificationUrl: 'https://community.appian.com/members/chermiemr221135?badge=cert&now=639165112216765950'
  },
  {
    id: 'cert-2',
    title: 'Process Factorial Developer',
    description: 'Specialized certification in process optimization and technical workflow architecture.',
    iconName: 'factorial'
  },
  {
    id: 'cert-3',
    title: 'Other Certifications & Trainings',
    description: 'Continuous professional development covering cloud AI, web development, and software engineering.',
    iconName: 'list',
    items: [
      'Google Cloud Generative AI Trailblazer — Google Cloud Skills Boost (Issued Oct 2025)',
      'Amazon Q Developer Getting Started — Amazon Web Services (AWS) (Issued Oct 2025)',
    ]
  }
];
