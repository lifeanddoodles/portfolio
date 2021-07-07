import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="site-header">
      <h1 className="logo">
        <Link to="/" rel="home">
          Site Logo
        </Link>
      </h1>
    </header>
  )
}
