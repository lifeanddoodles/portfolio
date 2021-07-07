import { Link } from 'react-router-dom'
import { Project } from '../types/Model'
import { projects } from '../data'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project: Project) => {
        return (
          <article
            key={project.id}
            itemScope
            itemType={`https://schema.org/${project.creativeItemType}`}
          >
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            {/* <img
              src={project.image.full}
              alt={project.title}
              itemProp="image"
            /> */}
            <p>{project.description.short}</p>
            <Link to={project.url.live}>View Project</Link>
            {project.url.code && <Link to={project.url.code}>View Code</Link>}
          </article>
        )
      })}
    </section>
  )
}

export default Projects
