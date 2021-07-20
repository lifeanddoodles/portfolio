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
    icon: `html5`,
    name: `HTML5`,
    categories: ['frontend'],
  },
  {
    icon: `css3`,
    name: `CSS3`,
    categories: ['frontend'],
  },
  {
    icon: `sass`,
    name: `Sass`,
    categories: ['frontend'],
  },
  {
    icon: `js`,
    name: `JavaScript (ES6)`,
    categories: ['frontend'],
  },
  {
    icon: `react`,
    name: `React`,
    categories: ['frontend'],
  },
  {
    icon: `git`,
    name: `Git`,
    categories: ['frontend', 'backend'],
  },
  {
    icon: `npm`,
    name: `NPM`,
    categories: ['frontend', 'backend'],
  },
  {
    icon: `node`,
    name: `Node.js`,
    categories: ['backend'],
  },
  {
    icon: `images/logos/express.svg`,
    name: `Express.js`,
    categories: ['backend'],
  },
  {
    icon: `images/logos/photoshop.svg`,
    name: `Photoshop`,
    categories: ['design'],
  },
  {
    icon: `images/logos/illustrator.svg`,
    name: `Illustrator`,
    categories: ['design'],
  },
  {
    icon: `images/logos/indesign.svg`,
    name: `InDesign`,
    categories: ['design'],
  },
]
