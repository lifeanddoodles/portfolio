import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header id="site-header" className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          <Link to="/" rel="home" className="ml-3 text-xl">
            Sandra Vargas
          </Link>
        </h1>
        <Navbar />
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
