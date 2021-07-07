// import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      itemScope
      itemType="https://schema.org/Person"
      itemRef="languages skills"
    >
      <h1>
        Hi, I&#39;m <span itemProp="name">Sandra Vargas</span>
      </h1>
      <p>
        I&#39;m a <span itemProp="jobTitle">Front-end developer</span>{' '}
        interested in the React ecosystem and in the application of{' '}
        accessibility guidelines and Schema Markup.
      </p>
      <a href="#contact">Work with me</a>
      <a href="#projects">See my past work</a>
    </section>
  )
}

export default Hero
