import { render, screen } from '@testing-library/react'
import NativeLink from './'

describe('NativeLink', () => {
  test('NativeLink renders correctly', () => {
    render(<NativeLink url="https://sandravargas.dev" />)
    const componentElement = screen.getByRole('link')
    expect(componentElement).toBeInTheDocument()
  })
})
