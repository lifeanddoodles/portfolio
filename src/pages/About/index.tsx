import Skills from './Skills'

const About = () => {
  return (
    <section id="about">
      <h1>About me</h1>
      <p>
        I have 12+ years of experience working with{' '}
        <abbr title="HyperText Markup Languag">HTML</abbr>,{' '}
        <abbr title="Cascading Style Sheets">CSS</abbr> and JavaScript. Most of{' '}
        that time, I have worked with small digital agencies in the US.
      </p>
      <p>
        Although I am looking for projects in the React ecosystem, I am willing{' '}
        to learn and work with other technologies (I am a dabbler in the{' '}
        <abbr title="MongoDB, Express, React, Node">MERN</abbr> and{' '}
        <abbr title="PostgreSQL, Express, React, and Node">PERN</abbr> stacks).
      </p>
      <Skills />
      <p>
        I also speak{' '}
        <span itemProp="knowsLanguage" id="languages">
          Spanish and English
        </span>
        , and am currently studying Japanese and French.
      </p>
    </section>
  )
}

export default About
