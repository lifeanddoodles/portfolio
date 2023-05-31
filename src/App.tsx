import { Route, Routes } from 'react-router-dom'
// import './App.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Home from './pages/Home'

export const App = () => {
  return (
    <>
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <Header />
      <div id="content" className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
