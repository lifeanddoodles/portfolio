import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const currentYear = () => {
  return new Date().getFullYear()
}

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="site-footer text-center pb-10">
      <section
        className="social-footer"
        role="group"
        aria-label="Social media profiles"
        id="social"
      >
        <a
          className="icon-link"
          href="https://github.com/lifeanddoodles"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          itemProp="sameAs"
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a
          className="icon-link ml-4"
          href="https://www.linkedin.com/in/sandralvargas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          itemProp="sameAs"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </section>
      <p className="copyright">Copyright {currentYear()}.</p>
    </footer>
  )
}
