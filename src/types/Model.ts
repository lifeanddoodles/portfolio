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

export interface Skill {
  icon: string
  name: string
  categories: string[]
}
