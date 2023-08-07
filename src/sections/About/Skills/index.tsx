import { SparklesIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'
import { skills as skillsData } from '../../../data'
import { Skill, SkillProficiencyLevel } from '../../../types/Model'
import Heading from '../../../components/Heading'
import SectionParagraph from '../../../components/Paragraph/SectionParagraph'
import SectionHeader from '../../../layout/SectionHeader'

interface SkillsListProps {
  proficiencyLevel: keyof typeof SkillProficiencyLevel
}
export const SkillsList: React.FC<SkillsListProps> = ({ proficiencyLevel }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'skills' })

  return (
    <>
      <SectionParagraph
        text={t(`proficiencyDescription.${proficiencyLevel}`)}
      />
      <ul className="flex flex-wrap mb-10 lg:max-w-xl lg:w-4/5 sm:mx-auto -mx-2 justify-center">
        {skillsData
          .filter((skill) => {
            return skill.proficiencyLevel === proficiencyLevel
          })
          .map(
            (skill: Skill): JSX.Element => (
              <li key={skill.id} className="p-2 w-full sm:w-1/2 md:w-1/3">
                <strong>{t(`items.${skill.id}.name`)}</strong>
              </li>
            )
          )}
      </ul>
    </>
  )
}

const Skills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'skills' })

  return (
    <section id="skills-section" className="my-10">
      <SectionHeader>
        <SparklesIcon className="mx-auto inline-block w-10 mb-4" />
        <Heading level={3} text={t('title')} />
      </SectionHeader>
      <section itemProp="knowsAbout" id="skills">
        <SkillsList proficiencyLevel={SkillProficiencyLevel.advanced} />
        <SkillsList proficiencyLevel={SkillProficiencyLevel.medium} />
        <SkillsList proficiencyLevel={SkillProficiencyLevel.beginner} />
      </section>
    </section>
  )
}

export default Skills
