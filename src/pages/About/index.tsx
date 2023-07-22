import { UserIcon } from '@heroicons/react/24/solid'
import { Trans, useTranslation } from 'react-i18next'
import Skills from './Skills'
import SoftSkills from './SoftSkills'
import Heading from '../../components/Heading'
import SectionParagraph from '../../components/Paragraph/SectionParagraph'
import SectionHeader from '../../layout/SectionHeader'

const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })
  /*
   * TODO: Test that we can get the section info rendered correctly.
   * TODO: Test that the heading levels are correct.
   * TODO: Test that the languages rendered correctly.
   */

  return (
    <section
      id="about"
      className="container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <SectionHeader>
        <UserIcon className="mx-auto inline-block w-10 mb-4" />
        <Heading text={t('title')} />
      </SectionHeader>
      <Trans
        i18nKey="about.description"
        components={{
          paragraph_tag: <SectionParagraph />,
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
