import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Select from '../../components/Select'
import useDarkMode from '../../hooks/useDarkMode'
import Navbar from '../Navbar'

export const Header = () => {
  const homeLinkRef = useRef<HTMLAnchorElement>(null)
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

  const { darkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const homeLink = homeLinkRef.current

    if (!homeLink) return

    homeLink.addEventListener('click', scrollToTop)

    return () => {
      homeLink.removeEventListener('click', scrollToTop)
    }
  }, [])

  return (
    <header
      id="site-header"
      className="bg-neutral-100 dark:bg-neutral-800 md:sticky top-0 z-10"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-5">
        <h1 className="title-font font-medium mb-4 md:mb-0 text-xl">
          <Link
            to="/"
            rel="home"
            ref={homeLinkRef}
            className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white text-xl"
          >
            {t('navMenu.home.label')}
          </Link>
        </h1>
        <Navbar />
        <a
          href="#contact-section"
          className="text-white bg-accent hover:bg-accent-dark md:mr-auto inline-flex items-center border-0 py-1 px-3 rounded text-base mt-4 md:mt-0"
        >
          {t('navMenu.contact.label')}
        </a>
        <Select
          id="changeLanguage"
          ariaLabel={t('languageSwitcher.label')}
          value={i18n.language}
          options={[
            { label: t('languageSwitcher.options.en'), value: 'en' },
            { label: t('languageSwitcher.options.es'), value: 'es' },
          ]}
          onChange={changeLanguage}
        />
        <button
          onClick={toggleDarkMode}
          aria-label={
            darkMode
              ? t('darkModeToggle.toggleOff')
              : t('darkModeToggle.toggleOn')
          }
        >
          {darkMode ? (
            <MoonIcon className="w-8 h-8 hover:text-neutral-700 dark:hover:text-white" />
          ) : (
            <SunIcon className="w-8 h-8 hover:text-neutral-700 dark:hover:text-white" />
          )}
        </button>
      </div>
    </header>
  )
}
