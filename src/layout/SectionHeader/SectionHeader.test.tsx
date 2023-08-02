import { render, screen } from '@testing-library/react'
import SectionHeader from './index'

describe('SectionHeader', () => {
  test('SectionHeader renders correctly', () => {
    render(<SectionHeader>Test SectionHeader</SectionHeader>)
    const componentElement = screen.getByText('Test SectionHeader')
    expect(componentElement).toBeInTheDocument()
  })
})
