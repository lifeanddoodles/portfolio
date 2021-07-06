const currentYear = () => {
  return new Date().getFullYear()
}

export const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        voluptates obcaecati tempora praesentium.
      </p>
      <p className="copyright">Copyright {currentYear()}.</p>
    </footer>
  )
}
