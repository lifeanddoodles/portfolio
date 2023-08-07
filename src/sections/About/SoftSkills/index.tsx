import { Trans, useTranslation } from 'react-i18next'
import { knownLanguages, languagesProficiency } from '../../../data'
import Heading from '../../../components/Heading'
import SectionParagraph from '../../../components/Paragraph/SectionParagraph'
import SectionHeader from '../../../layout/SectionHeader'

const SoftSkills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <section id="languages-section" className="my-10">
      <SectionHeader>
        <Heading level={4} text={t('title')} />
        <SectionParagraph text={t('description')} />
      </SectionHeader>
      <ul
        key="languagesList"
        itemProp="knowsLanguage"
        id="languages"
        className="flex flex-wrap mb-4 lg:max-w-lg lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
      >
        {knownLanguages.map((item) => (
          <li key={item} className="p-2 sm:w-1/2 w-full">
            <span className="title-font font-medium">
              {t(`labels.${item}`)} (
              {t(`proficiencyLevels.${languagesProficiency[item]}`)})
            </span>
          </li>
        ))}
      </ul>
      <SectionParagraph
        text={
          <Trans
            i18nKey="languages.note"
            components={{
              abbreviation_tag: <abbr title="Internationalization" />,
            }}
          />
        }
      />
    </section>
  )
}

export default SoftSkills
