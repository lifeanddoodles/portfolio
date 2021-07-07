import Skills from './Skills'

const About = () => {
  return (
    <section id="about" itemScope itemType="https://schema.org/Person">
      <h1 itemProp="name">Hi, Sandra Vargas</h1>
      <p>
        I have 12+ years of experience working with HTML, CSS and JavaScript. I
        am interested in the application of accessibility guidelines and Schema
        Markup. And although I am looking for projects in the React ecosystem, I
        am willing to learn and work with other technologies.
      </p>
      <Skills />
    </section>
  )
}

export default About
