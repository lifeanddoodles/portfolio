import { render, screen } from '@testing-library/react'
import { Footer } from './index'

describe('Footer', () => {
  test('Footer renders correctly', () => {
    render(<Footer />)
    const componentElement = screen.getByTestId('site-footer')
    expect(componentElement).toBeInTheDocument()
  })
})
