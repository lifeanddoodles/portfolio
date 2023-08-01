import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Select from './'

const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
]

describe('Select', () => {
  test('Select renders correctly', () => {
    const handleOnChange = jest.fn()
    render(
      <Select options={options} value="Option 1" onChange={handleOnChange} />
    )
    const componentElement = screen.getByRole('combobox')
    expect(componentElement).toBeInTheDocument()
  })

  test('Select has default value', async () => {
    user.setup()
    const handleOnChange = jest.fn()
    render(
      <Select options={options} value="Option 1" onChange={handleOnChange} />
    )
    const componentElement: HTMLSelectElement = screen.getByRole('combobox')
    await user.selectOptions(componentElement, 'Option 1')
    expect(componentElement).toHaveValue('Option 1')
  })

  test('Select handles onChange', async () => {
    user.setup()
    const handleOnChange = jest.fn()
    render(<Select options={options} onChange={handleOnChange} />)
    const componentElement: HTMLSelectElement = screen.getByRole('combobox')
    await user.selectOptions(componentElement, 'Option 2')
    expect(
      (screen.getByText('Option 2') as HTMLOptionElement).selected
    ).toBeTruthy()
  })
})
