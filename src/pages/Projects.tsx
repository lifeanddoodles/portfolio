import { Project } from '../types/Model'
import { projects } from '../data'
import { CodeIcon, ExternalLinkIcon } from '@heroicons/react/solid'

// const pathToAssets = require.context('assets/', false, /\.(png|jpe?g|svg)$/)

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <CodeIcon className="mx-auto inline-block w-10 mb-4" />
      <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Projects
      </h2>
      <div className="flex flex-wrap -m-4">
        {projects.map((project: Project) => {
          return (
            <article
              key={project.id}
              itemScope
              itemType={`https://schema.org/${project.creativeItemType}`}
              className="sm:w-1/2 w-100 p-4"
            >
              <h3
                itemProp="name"
                className="title-font text-lg font-medium text-white mb-3"
              >
                {project.title}
              </h3>
              <h4 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h4>
              {/* <img
                src={project.image.full}
                alt={project.title}
                itemProp="image"
              /> */}
              <p itemProp="description" className="leading-relaxed mb-4">
                {project.description.short}
              </p>
              <p itemProp="sourceOrganization">{project.client}</p>
              <a
                href={project.url.live}
                itemProp="url"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                View Project
                <ExternalLinkIcon className="inline-block w-4 ml-2" />
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
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg"
                  >
                    View Code
                    <ExternalLinkIcon className="inline-block w-4 ml-2" />
                  </a>
                </span>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
