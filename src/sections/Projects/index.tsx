import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/solid'
import { Trans, useTranslation } from 'react-i18next'
import Group from '../../components/Group'
import Heading from '../../components/Heading'
import NativeLink from '../../components/NativeLink'
import Paragraph from '../../components/Paragraph'
import SectionParagraph from '../../components/Paragraph/SectionParagraph'
import { projects } from '../../data'
import SectionHeader from '../../layout/SectionHeader'
import { Project } from '../../types/Model'

const getProjectIndex = (id: string) => {
  return projects.findIndex((p) => p.id === id)
}

export const ProjectItem = ({ project }: { project: Project }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' })
  const title = t(`items.${getProjectIndex(project.id)}.title`)
  const subtitle = t(`items.${getProjectIndex(project.id)}.subtitle`)
  const description = t(`items.${getProjectIndex(project.id)}.description`)

  return (
    <article
      itemScope
      itemType={`https://schema.org/${project.creativeItemType}`}
      className="bg-neutral-200 dark:bg-neutral-800 w-100 flex-auto md:max-w-sm p-4 rounded-lg flex flex-col"
    >
      {title && (
        <Heading
          level={3}
          text={title}
          itemProp="name"
          className="text-lg mb-2 text-left"
        />
      )}
      {subtitle && (
        <Heading
          level={4}
          text={subtitle}
          className="text-sm text-left tracking-widest text-primary-light"
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
              className="text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700 m-1 px-3 py-1 text-sm font-small rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
      {description && (
        <Paragraph
          itemProp="description"
          className="text-left grow"
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
              className="text-neutral-100 hover:text-white bg-primary hover:bg-primary-dark inline-flex border-0 py-2 px-6 rounded text-lg mb-4"
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
                className={`inline-flex border-0 py-2 px-6 rounded text-lg mb-4 ${
                  !project.cta.live
                    ? 'text-neutral-100 hover:text-white bg-primary hover:bg-primary-dark'
                    : 'text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-neutral-100 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-900'
                }`}
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

  return (
    <section
      id="projects-section"
      className="container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <SectionHeader>
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
                  <NativeLink
                    className="icon-link text-primary-light underline hover:text-neutral-700 dark:hover:text-white"
                    url="https://github.com/lifeanddoodles/portfolio"
                  />
                ),
              }}
            />
          }
        />
      </SectionHeader>
      {projects.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 -m-4 lg:max-w-screen-xl">
          {projects?.map((project: Project) => {
            return <ProjectItem project={project} key={project.id} />
          })}
        </div>
      )}
    </section>
  )
}

export default Projects
