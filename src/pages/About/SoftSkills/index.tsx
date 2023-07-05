import { Trans, useTranslation } from 'react-i18next'
import { knownLanguages, languagesProficiency } from '../../../data'

const SoftSkills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <section id="languages" className="my-10">
      <h4 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
        {t('title')}
      </h4>
      <p className="text-base leading-relaxed xl:w-2/4 lg:max-w-xl lg:w-3/4 mx-auto mb-4">
        {t('description')}
      </p>
      <ul
        key="languagesList"
        itemProp="knowsLanguage"
        id="languages"
        className="flex flex-wrap mb-4 lg:max-w-lg lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
      >
        {knownLanguages.map((item) => (
          <li key={item} className="p-2 sm:w-1/2 w-full">
            <span className="title-font font-medium text-white">
              {t(`labels.${item}`)} (
              {t(`proficiencyLevels.${languagesProficiency[item]}`)})
            </span>
          </li>
        ))}
      </ul>
      <p className="text-base leading-relaxed xl:w-2/4 lg:max-w-xl lg:w-3/4 mx-auto mb-4">
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

export default SoftSkills
