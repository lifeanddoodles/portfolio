import { render, screen } from '@testing-library/react'
import Paragraph from './'

describe('Paragraph', () => {
  test('Paragraph renders correctly', () => {
    render(<Paragraph text="Test Paragraph" />)
    const componentElement = screen.getByText('Test Paragraph')
    expect(componentElement).toBeInTheDocument()
  })
})
