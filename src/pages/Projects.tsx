import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/solid'
import { Trans, useTranslation } from 'react-i18next'
import NativeLink from '../components/NativeLink'
import { projects } from '../data'
import { Project } from '../types/Model'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import SectionParagraph from '../components/Paragraph/SectionParagraph'
import Group from '../components/Group'

// const pathToAssets = require.context('assets/', false, /\.(png|jpe?g|svg)$/)

/*
 * TODO: Test that we can get the index of a project
 */
const getProjectIndex = (id: string) => {
  return projects.findIndex((p) => p.id === id)
}

const ProjectItem = ({ project }: { project: Project }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' })
  const title = t(`items.${getProjectIndex(project.id)}.title`)
  const subtitle = t(`items.${getProjectIndex(project.id)}.subtitle`)
  const description = t(`items.${getProjectIndex(project.id)}.description`)

  /*
   * TODO: Test that we can get the project info rendered correctly.
   * TODO: Test that external links work.
   * TODO: Test that the heading levels are correct.
   */
  return (
    <article
      itemScope
      itemType={`https://schema.org/${project.creativeItemType}`}
      className="w-100 sm:w-1/2 p-4 mx-auto"
    >
      {title && (
        <Heading level={3} text={title} itemProp="name" className="text-left" />
      )}
      {subtitle && (
        <Heading
          level={4}
          text={subtitle}
          className="tracking-widest text-left"
        />
      )}
      {project?.image?.thumbnail && (
        <img src={project.image.thumbnail} alt="" itemProp="image" />
      )}
      {project?.technologies && (
        <div className="flex flex-wrap my-2 justify-start">
          {project?.technologies.map((technology) => (
            <span
              key={technology}
              className="m-1 px-3 py-1 text-gray-400 bg-gray-800 text-sm font-small rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
      {description && (
        <Paragraph
          itemProp="description"
          className="text-left"
          text={
            <Trans
              i18nKey={description}
              components={{
                bold_tag: <strong />,
              }}
            />
          }
        />
      )}
      {project.client && (
        <Paragraph itemProp="sourceOrganization">{project.client}</Paragraph>
      )}
      {(project.cta.live || project.cta.code) && (
        <Group className="gap-4">
          {project.cta.live && (
            <a
              href={project.cta.live}
              itemProp="url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-gray-300 bg-gray-700 border-0 py-2 px-6 hover:bg-gray-600 hover:text-white rounded text-lg mb-4"
            >
              {t('callsToAction.main')}
              <ArrowTopRightOnSquareIcon className="inline-block w-4 ml-2" />
            </a>
          )}
          {project.cta.code && (
            <span
              itemScope
              itemType="https://schema.org/SoftwareSourceCode"
              itemProp="subjectOf"
            >
              <a
                href={project.cta.code}
                target="_blank"
                rel="noopener noreferrer"
                itemProp="codeRepository"
                className={`inline-flex text-gray-${
                  !project.cta.live ? '300' : '400'
                } bg-gray-${
                  !project.cta.live ? '700' : '800'
                } border-0 py-2 px-6 hover:bg-gray-${
                  !project.cta.live ? '600' : '700'
                } hover:text-white rounded text-lg mb-4`}
              >
                {t('callsToAction.secondary')}
                <ArrowTopRightOnSquareIcon className="inline-block w-4 ml-2" />
              </a>
            </span>
          )}
        </Group>
      )}
    </article>
  )
}

const Projects = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' })

  /*
   * TODO: Test that we can get the section title and description rendered correctly
   * TODO: Test that we can get the projects rendered correctly
   */
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
      <Heading text={t('title')} />
      <SectionParagraph
        marginBottom={8}
        text={
          <Trans
            i18nKey={'projects.description'}
            components={{
              bold_tag: <strong />,
              external_anchor_tag: (
                <NativeLink url="https://github.com/lifeanddoodles/portfolio" />
              ),
            }}
          />
        }
      />
      {projects.length > 0 && (
        <div className="flex flex-wrap -m-4 lg:max-w-xxl">
          {projects?.map((project: Project) => {
            return <ProjectItem project={project} key={project.id} />
          })}
        </div>
      )}
    </section>
  )
}

export default Projects
