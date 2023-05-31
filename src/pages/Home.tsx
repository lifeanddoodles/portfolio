import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Hero from '../components/Hero'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (
    <>
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <Header />
      <div id="content" className="content">
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home
