import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <h1 itemProp="name">Hi, Sandra Vargas</h1>
      <Link to="contact">Work with me</Link>
      <Link to="#project">See my past work</Link>
    </div>
  )
}

export default Hero
