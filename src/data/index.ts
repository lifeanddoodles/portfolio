import { SkillCategory, SkillProficiencyLevel } from '../types/Model'

export const projects = [
  {
    id: '000',
    image: {
      thumbnail: '/images/twirly-whiskers-thumb.jpg',
      full: '/images/twirly-whiskers.jpg',
    },
    url: {
      code: 'https://github.com/lifeanddoodles/hundred-poems/',
      live: 'https://lifeanddoodles.github.io/hundred-poems/',
    },
    client: null,
    creativeItemType: 'WebSite',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'i18next'],
    tags: ['App Development', 'Web Development'],
  },
  {
    id: '001',
    image: {
      thumbnail: '../assets/images/portfolio/alex-dvm-thumb.jpg',
      full: '../assets/images/portfolio/alex-dvm.jpg',
    },
    url: {
      code: '',
      live: 'https://client.lifeanddoodles.com/soundshq/',
    },
    client: null,
    creativeItemType: 'WebSite',
    technologies: ['WordPress', 'HTML', 'CSS'],
    tags: ['Web Development', 'Theme Development', 'Plugin Development'],
  },
  {
    id: '002',
    image: {
      thumbnail: '/images/twirly-whiskers-thumb.jpg',
      full: '/images/twirly-whiskers.jpg',
    },
    url: {
      code: 'https://github.com/lifeanddoodles/hundred-poems/',
      live: 'https://lifeanddoodles.github.io/hundred-poems/',
    },
    client: null,
    creativeItemType: 'WebSite',
    technologies: ['React', 'HTML', 'CSS'],
    tags: ['App Development', 'Web Development'],
  },
]

export const skills = [
  {
    id: 'react',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'css-in-js',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'redux',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'typescript',
    categories: [SkillCategory.frontend, SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    id: 'accessibility',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'schema-markup',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'html',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'css',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'sass',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'javascript',
    categories: [SkillCategory.frontend],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'git',
    categories: [SkillCategory.tooling],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'npm',
    categories: [SkillCategory.tooling],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'slack',
    categories: [SkillCategory.collaboration],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'jira',
    categories: [SkillCategory.collaboration],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    id: 'node',
    categories: [SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
  {
    id: 'express',
    categories: [SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
  {
    id: 'postman',
    categories: [SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
  {
    id: 'postgresql',
    categories: [SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
  {
    id: 'mongodb',
    categories: [SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
]
