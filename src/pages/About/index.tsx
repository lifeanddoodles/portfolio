import { UserIcon } from '@heroicons/react/24/solid'
import { Trans, useTranslation } from 'react-i18next'
import Skills from './Skills'

const About = () => {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="text-gray-400 bg-gray-900 body-font container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <UserIcon className="mx-auto inline-block w-10 mb-4" />
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        {t('about.title')}
      </h2>
      <Trans
        i18nKey="about.description"
        components={{
          paragraph_tag: (
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4" />
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
      <h4 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
        {t('languages.title')}
      </h4>
      <Trans i18nKey="list_map">
        {t('languages.description')}
        <ul
          itemProp="knowsLanguage"
          id="languages"
          className="flex flex-wrap mb-4 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
          // eslint-disable-next-line react/no-unknown-property
          i18nIsDynamicList
        >
          {t('languages.items', { returnObject: true })
            .split(', ')
            .map((item: string, index: number) => (
              <li key={index} className="p-2 sm:w-1/2">
                <span className="title-font font-medium text-white">
                  {item}
                </span>
              </li>
            ))}
        </ul>
      </Trans>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
        <Trans
          i18nKey="languages.note"
          components={{
            abbreviation_tag: <abbr title="Internationalization" />,
          }}
        />
      </p>
    </section>
  )
}

export default About
