import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './index'

describe('Header', () => {
  test('Header renders correctly', () => {
    render(
      <Router>
        <Header />
      </Router>
    )
    const componentElement = screen.getByTestId('site-header')
    expect(componentElement).toBeInTheDocument()
  })
})
