import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section itemScope itemType="https://schema.org/Person">
      <h1>
        Hi, I&#39;m <span itemProp="name">Sandra Vargas</span>
      </h1>
      <p>
        I&#39;m a <span itemProp="occupation">Front-end developer</span>
        interested in the React ecosystem and in the application of
        accessibility guidelines and Schema Markup.
      </p>
      <Link to="#contact">Work with me</Link>
      <Link to="#projects">See my past work</Link>
    </section>
  )
}

export default Hero
