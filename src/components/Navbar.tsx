export const Navbar = () => {
  return (
    <nav>
      <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <li className="mr-5 hover:text-white">
          <a href="#projects">projects</a>
        </li>
        <li className="mr-5 hover:text-white">
          <a href="#about">about</a>
        </li>
        <li className="mr-5 hover:text-white">
          <a href="#skills">skills</a>
        </li>
        {/* <li className="mr-5 hover:text-white">
          <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">contact</a>
        </li> */}
      </ul>
    </nav>
  )
}
