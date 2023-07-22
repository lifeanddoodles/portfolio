import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trans, useTranslation } from 'react-i18next'

const currentYear = () => {
  return new Date().getFullYear()
}

export const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  return (
    <footer data-testid="site-footer" className="site-footer text-center pb-10">
      <section
        className="social-footer"
        role="group"
        aria-label={t('social.ariaLabel')}
        id="social"
      >
        <a
          className="icon-link text-primary-light hover:text-neutral-700 dark:hover:text-white"
          href="https://github.com/lifeanddoodles"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('social.items.github.ariaLabel')}
          itemProp="sameAs"
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a
          className="icon-link text-primary-light hover:text-neutral-700 dark:hover:text-white ml-4"
          href="https://www.linkedin.com/in/sandralvargas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('social.items.linkedin.ariaLabel')}
          itemProp="sameAs"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </section>
      <p className="copyright">
        <Trans i18nKey="footer.copyright" values={{ year: currentYear() }} />
      </p>
    </footer>
  )
}
