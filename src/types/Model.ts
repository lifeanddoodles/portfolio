export interface Project {
  id: string
  title: string
  subtitle: string
  description: {
    short: string
  }
  image: {
    thumbnail: string
    full: string
  }
  url: {
    code?: string
    live: string
  }
  client: string | null
  creativeItemType: string
  technologies: string[]
  tags?: string[]
}

export enum SkillProficiencyLevel {
  beginner = 'beginner',
  medium = 'medium',
  advanced = 'advanced',
}

export enum SkillCategory {
  frontend = 'frontend',
  backend = 'backend',
  tooling = 'tooling',
  collaboration = 'collaboration',
}

export interface Skill {
  id: string
  categories: string[]
  proficiencyLevel: keyof typeof SkillProficiencyLevel
}

export interface Map {
  [key: string]: string | undefined
}

export interface ContactBody {
  'form-name': string
  name: string
  email: string
  message: string
}

export enum AVAILABILITY {
  AVAILABLE = 'available',
  NOT_AVAILABLE = 'notAvailable',
}
