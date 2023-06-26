import { ChangeEvent, Fragment } from 'react'
import { OptionProps, SelectProps } from '../types/Model'
import Group from './Group'

const Option = ({ label, value }: OptionProps) => {
  return <option value={value}>{label}</option>
}

const Select = ({
  label,
  options,
  value,
  onChange,
  id,
  disabled,
}: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target?.value)
  }

  const SelectWrapper = label
    ? { component: Group, props: { className: 'flex items-center gap-2' } }
    : { component: Fragment, props: {} }

  return (
    <SelectWrapper.component {...SelectWrapper.props}>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <select
          id={id}
          value={value}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pr-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map((option) => (
            <Option
              label={option.label}
              value={option.value}
              key={option.value}
            />
          ))}
        </select>
      </div>
    </SelectWrapper.component>
  )
}

export default Select
