import { Skill } from '../../types/Model'
import { skills } from '../../data'
import { SparklesIcon } from '@heroicons/react/solid'

const Skills = () => {
  return (
    <section id="skills" className="mb-10">
      <SparklesIcon className="mx-auto inline-block w-10 mb-4" />
      <h3 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
        Skills
      </h3>
      <ul
        itemProp="knowsAbout"
        id="skills"
        className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
      >
        {skills.map((skill: Skill, index: number) => {
          return (
            <li key={index} className="p-2 sm:w-1/2 w-full">
              <span className="title-font font-medium text-white">
                {skill.name}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
