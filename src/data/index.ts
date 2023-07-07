import {
  CreativeWorkType,
  SkillCategory,
  SkillProficiencyLevel,
} from '../types/Model'

export const knownLanguages: string[] = ['en', 'es']

export const languagesProficiency: { [key: string]: string } = {
  en: 'advanced',
  es: 'native',
}

export const projects = [
  {
    id: '000',
    image: {
      thumbnail: '',
      full: '',
    },
    cta: {
      code: 'https://github.com/lifeanddoodles/portfolio',
      live: '',
    },
    client: null,
    creativeItemType: CreativeWorkType.WEB_SITE,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'i18n',
      'Unit testing',
    ],
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
    id: 'unit-testing',
    categories: [SkillCategory.frontend, SkillCategory.backend],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    id: 'i18n',
    categories: [SkillCategory.frontend],
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
