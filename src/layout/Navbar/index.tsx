import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'header.navMenu' })

  return (
    <nav>
      <ul className="md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap gap-5 items-center text-base justify-center">
        <li>
          <a
            className="hover:text-neutral-950 dark:hover:text-white"
            href="#projects"
          >
            {t('projects.label')}
          </a>
        </li>
        <li>
          <a
            className="hover:text-neutral-950 dark:hover:text-white"
            href="#about"
          >
            {t('about.label')}
          </a>
        </li>
        <li>
          <a
            className="hover:text-neutral-950 dark:hover:text-white"
            href="#skills"
          >
            {t('skills.label')}
          </a>
        </li>
      </ul>
    </nav>
  )
}
