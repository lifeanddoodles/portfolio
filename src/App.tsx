import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <Router>
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <Header />
      <div id="content" className="content">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
