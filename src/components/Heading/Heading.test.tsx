import { render, screen } from '@testing-library/react'
import Heading from './'

describe('Heading', () => {
  test('Heading renders correctly', () => {
    render(<Heading text="Test Heading" />)
    const componentElement = screen.getByText('Test Heading')
    expect(componentElement).toBeInTheDocument()
  })
})
