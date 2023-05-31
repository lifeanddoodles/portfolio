import { UserIcon } from '@heroicons/react/24/solid'
import Skills from './Skills'

const About = () => {
  return (
    <section
      id="about"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <UserIcon className="mx-auto inline-block w-10 mb-4" />
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        About me
      </h2>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
        I have 12+ years of experience working with{' '}
        <abbr title="HyperText Markup Language">HTML</abbr>,{' '}
        <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript. Most of{' '}
        that time, I have worked with small digital agencies in the US.
      </p>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
        Although I am looking for projects in the React ecosystem, I am willing{' '}
        to learn and work with other technologies (I am a dabbler in the{' '}
        <abbr title="MongoDB, Express, React, Node">MERN</abbr> and{' '}
        <abbr title="PostgreSQL, Express, React, and Node">PERN</abbr> stacks).
      </p>
      <Skills />
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
        I also speak{' '}
        <span itemProp="knowsLanguage" id="languages">
          Spanish and English
        </span>
        , and am currently studying Japanese and French.
      </p>
    </section>
  )
}

export default About
