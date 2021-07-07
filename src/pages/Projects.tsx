import { Project } from '../types/Model'
import { projects } from '../data'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project: Project, index: number) => {
        return (
          <article key={index}>
            <h1>{project.title}</h1>
          </article>
        )
      })}
    </section>
  )
}

export default Projects
