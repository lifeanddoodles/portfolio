import { SparklesIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'
import { skills as skillsData } from '../../data'
import { Skill, SkillProficiencyLevel } from '../../types/Model'

interface SkillsListProps {
  proficiencyLevel: keyof typeof SkillProficiencyLevel
}
const SkillsList: React.FC<SkillsListProps> = ({ proficiencyLevel }) => {
  const { t } = useTranslation()

  return (
    <>
      <p>{t(`skills.proficiencyDescription.${proficiencyLevel}`)}</p>
      <ul className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skillsData
          .filter((skill) => {
            return skill.proficiencyLevel === proficiencyLevel
          })
          .map(
            (skill: Skill): JSX.Element => (
              <li key={skill.id} className="p-2 sm:w-1/2 w-full">
                <h4 className="title-font font-medium text-white">
                  {t(`skills.items.${skill.id}.name`)}
                </h4>
              </li>
            )
          )}
      </ul>
    </>
  )
}

const Skills = () => {
  const { t } = useTranslation()
  return (
    <section id="skills" className="mb-10">
      <SparklesIcon className="mx-auto inline-block w-10 mb-4" />
      <h3 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
        {t('skills.title')}
      </h3>
      <section itemProp="knowsAbout" id="skills">
        <SkillsList proficiencyLevel={SkillProficiencyLevel.advanced} />
        <SkillsList proficiencyLevel={SkillProficiencyLevel.medium} />
        <SkillsList proficiencyLevel={SkillProficiencyLevel.beginner} />
      </section>
    </section>
  )
}

export default Skills
