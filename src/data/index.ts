import { SkillProficiencyLevel } from '../types/Model'

export const projects = [
  {
    id: '001',
    title: 'Nonprofit Website',
    subtitle: 'WordPress Theme & Plugin',
    description: {
      short:
        'Designed and developed a theme based on their requirements and feedback, added extra functionality through Gutenberg blocks enabled through a plugin.',
    },
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
    title: '100 Poems (WIP)',
    subtitle: 'React Application',
    description: {
      short:
        'An application to view the poems from the famous Japanese anthology "Hyakunin Isshu" (百人一首) that saves your viewing preferences on the local storage.',
    },
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
    icon: `react`,
    name: `React`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `styled-components`,
    name: `Styled components`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `redux`,
    name: `Redux`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    icon: `typescript`,
    name: `TypeScript`,
    categories: ['frontend', 'backend'],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    icon: `wcag`,
    name: `WCAG/Accessibility`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `schema-markup`,
    name: `Schema markup`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `html5`,
    name: `HTML5`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `css3`,
    name: `CSS3`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `sass`,
    name: `SASS`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `js`,
    name: `JavaScript (ES6+)`,
    categories: ['frontend'],
    proficiencyLevel: SkillProficiencyLevel.advanced,
  },
  {
    icon: `git`,
    name: `Git`,
    categories: ['tooling'],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    icon: `npm`,
    name: `NPM`,
    categories: ['tooling'],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    icon: `slack`,
    name: `Slack`,
    categories: ['collaboration'],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    icon: `jira`,
    name: `JIRA`,
    categories: ['collaboration'],
    proficiencyLevel: SkillProficiencyLevel.medium,
  },
  {
    icon: `node`,
    name: `Node.js`,
    categories: ['backend'],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
  {
    icon: `images/logos/express.svg`,
    name: `Express.js`,
    categories: ['backend'],
    proficiencyLevel: SkillProficiencyLevel.beginner,
  },
]
