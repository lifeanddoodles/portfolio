import { DefaultTFuncReturn } from 'i18next'

export interface Project {
  id: string
  image: {
    thumbnail: string
    full: string
  }
  cta: {
    code?: string
    live: string
    caseStudy?: string
  }
  client: string | null
  creativeItemType: string
  technologies: string[]
  tags?: string[]
}

export enum CreativeWorkType {
  SOFTWARE_APPLICATION = 'SoftwareApplication',
  SOFTWARE_SOURCE_CODE = 'SoftwareSourceCode',
  WEB_CONTENT = 'WebContent',
  WEB_PAGE = 'WebPage',
  WEB_PAGE_ELEMENT = 'WebPageElement',
  WEB_SITE = 'WebSite',
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

export interface OptionProps {
  label: string | DefaultTFuncReturn
  value: string | number
  ariaLabel?: string
}

export interface SelectProps {
  label?: string
  options: OptionProps[]
  value: string | number
  onChange: (event: string) => void
  id?: string
  disabled?: boolean
}
