import { UserIcon } from '@heroicons/react/24/solid'
import { Trans, useTranslation } from 'react-i18next'
import Skills from './Skills'
import SoftSkills from './SoftSkills'

const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })

  return (
    <section
      id="about"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <UserIcon className="mx-auto inline-block w-10 mb-4" />
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        {t('title')}
      </h2>
      <Trans
        i18nKey="about.description"
        components={{
          paragraph_tag: (
            <p className="text-base leading-relaxed xl:w-2/4 lg:max-w-xl mx-auto mb-4 text-left" />
          ),
          abbreviation_tag_1: <abbr title="HyperText Markup Language" />,
          abbreviation_tag_2: <abbr title="Cascading Style Sheets" />,
          abbreviation_tag_3: (
            <abbr title="Syntactically Awesome Style Sheets" />
          ),
          abbreviation_tag_4: <abbr title="MongoDB, Express, React, Node" />,
          abbreviation_tag_5: (
            <abbr title="PostgreSQL, Express, React, and Node" />
          ),
        }}
      />
      <Skills />
      <SoftSkills />
    </section>
  )
}

export default About
