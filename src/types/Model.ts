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
  client?: string
  creativeItemType: string
  technologies: []
  tags?: []
}
