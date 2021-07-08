const currentYear = () => {
  return new Date().getFullYear()
}

export const Footer = () => {
  return (
    <footer className="site-footer">
      <section
        className="social-footer
        text-center"
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
          Github
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/sandralvargas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          itemProp="sameAs"
        >
          LinkedIn
        </a>
      </section>
      <p className="copyright">Copyright {currentYear()}.</p>
    </footer>
  )
}
