export const Navbar = () => {
  return (
    <nav>
      <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <li className="mr-5 hover:text-white">
          <a href="#projects">Projects</a>
        </li>
        <li className="mr-5 hover:text-white">
          <a href="#about">About</a>
        </li>
        <li className="mr-5 hover:text-white">
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  )
}
