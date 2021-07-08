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
            <h3 itemProp="name">{project.title}</h3>
            <h4>{project.subtitle}</h4>
            {/* <img
              src={project.image.full}
              alt={project.title}
              itemProp="image"
            /> */}
            <p itemProp="description">{project.description.short}</p>
            <p itemProp="sourceOrganization">{project.client}</p>
            <a
              href={project.url.live}
              itemProp="url"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            {project.url.code && (
              <span
                itemScope
                itemType="https://schema.org/SoftwareSourceCode"
                itemProp="subjectOf"
              >
                <a
                  href={project.url.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="codeRepository"
                >
                  View Code
                </a>
              </span>
            )}
          </article>
        )
      })}
    </section>
  )
}

export default Projects
