import { render, screen } from '@testing-library/react'
import Group from './'

describe('Group', () => {
  test('Group renders correctly', () => {
    render(
      <Group>
        <button>Test group</button>
      </Group>
    )
    const componentElement = screen.getByRole('group')
    expect(componentElement).toBeInTheDocument()
  })

  test('Group has aria-label attribute', () => {
    render(
      <Group aria-label="test-aria-label">
        <button>Test group</button>
      </Group>
    )
    const componentElement = screen.getByRole('group')
    expect(componentElement).toHaveAttribute('aria-label', 'test-aria-label')
  })
})
