import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Input from './'

describe('Input', () => {
  test('Input renders correctly', () => {
    const handleOnChange = jest.fn()
    render(
      <Input name="test-input" value="Test Input" onChange={handleOnChange} />
    )
    const componentElement = screen.getByRole('textbox')
    expect(componentElement).toBeInTheDocument()
  })

  test('Input handles onChange', async () => {
    user.setup()
    const handleOnChange = jest.fn()
    render(
      <Input
        name="test-input"
        value="Previous Input"
        onChange={handleOnChange}
      />
    )
    const componentElement = screen.getByRole('textbox')
    await user.type(componentElement, 'New Input')
    expect(handleOnChange).toHaveBeenCalled()
  })
})
