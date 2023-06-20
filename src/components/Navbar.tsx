import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'navMenu' })

  return (
    <nav>
      <ul className="md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap gap-5 items-center text-base justify-center">
        <li className="hover:text-white">
          <a href="#projects">{t('projects.label')}</a>
        </li>
        <li className="hover:text-white">
          <a href="#about">{t('about.label')}</a>
        </li>
        <li className="hover:text-white">
          <a href="#skills">{t('skills.label')}</a>
        </li>
      </ul>
    </nav>
  )
}
