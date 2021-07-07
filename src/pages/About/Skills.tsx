import { Skill } from '../../types/Model'
import { skills } from '../../data'

const Skills = () => {
  return (
    <section id="skills">
      <h3>Skills</h3>
      <article>
        {skills.map((skill: Skill, index: number) => {
          return <li key={index}>{skill.name}</li>
        })}
      </article>
      {/* <h4>Front-End</h4>
      <p>
        I can convert mockup designs into a fully functioning website. A
        combination of design and technical expertise is required to get the job
        done right. I’ve honed my skills to deliver the best experience,
        regardless of the user&#39;s device.
      </p>
      <h4>Back-End</h4>
      <p>
        Although my main interest is definitely on the Front End, I do study to
        have a stronger grasp on how things work on the backend to familiarize
        myself with other concepts and considerations I might not have otherwise
        when creating an app or website, and when collaborating with other
        people.
      </p> */}
    </section>
  )
}

export default Skills
