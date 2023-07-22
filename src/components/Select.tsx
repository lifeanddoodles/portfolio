import { ChangeEvent, Fragment } from 'react'
import { OptionProps, SelectProps } from '../types/Model'
import Group from './Group'

const Option = ({ label, value }: OptionProps) => {
  return <option value={value}>{label}</option>
}

const Select = ({
  label,
  ariaLabel,
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
      <select
        id={id}
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => handleChange(e)}
        disabled={disabled}
        className="text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-700 rounded-lg border focus:ring-blue-500 focus:border-blue-500 block p-2 pr-4 dark:placeholder-neutral-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <Option
            label={option.label}
            value={option.value}
            key={option.value}
          />
        ))}
      </select>
    </SelectWrapper.component>
  )
}

export default Select
