import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import Select from '../../components/Select'

export const Header = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'header' })
  /* The names of the translation files that will be used in the component. 
  You can include multiple or just leave it empty and look through all the translation files 
  but its better to just state only the ones you need. */

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(
      code
    ) /* Sends i81n the code of the language to change and the function in i18n.js takes this code and sets
    it to the local storage variable. The language detector detects this and translates the text that
    is either in a "t" function or inside a "Trans" component */
  }

  return (
    <header
      id="site-header"
      data-testid="site-header"
      className="bg-gray-800 md:sticky top-0 z-10"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-5">
        <h1 className="title-font font-medium text-white mb-4 md:mb-0 text-xl">
          <Link to="/" rel="home" className="ml-3 text-xl">
            {t('navMenu.home.label')}
          </Link>
        </h1>
        <Navbar />
        <a
          href="#contact"
          className="md:mr-auto inline-flex items-center text-white bg-red-600 border-0 py-1 px-3 hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          {t('navMenu.contact.label')}
        </a>
        <Select
          id="changeLanguage"
          label={t('languageSwitcher.label')}
          value={i18n.language}
          options={[
            { label: t('languageSwitcher.options.en'), value: 'en' },
            { label: t('languageSwitcher.options.es'), value: 'es' },
          ]}
          onChange={changeLanguage}
        />
      </div>
    </header>
  )
}
