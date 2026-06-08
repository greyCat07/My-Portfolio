/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SoftSkill {
  name: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  type: 'college' | 'highschool';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isRecent?: boolean;
  bullets?: string[];
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  imageType: 'design' | 'programming' | 'web';
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  description: string;
  iconName: 'appian' | 'factorial' | 'list';
  items?: string[];
  verificationUrl?: string;
}
