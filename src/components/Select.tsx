import { Fragment } from 'react'
import { OptionProps, SelectProps } from '../types/Model'
import Group from './Group'

const Option = ({ label, value }: OptionProps) => {
  return <option value={value}>{label}</option>
}

const Select = ({ label, options, value, onChange, disabled }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event)
  }

  const SelectWrapper = label ? Group : Fragment

  return (
    <SelectWrapper>
      {label && <label>{label}</label>}
      <div>
        <select value={value} onChange={handleChange} disabled={disabled}>
          {options.map((option) => (
            <Option
              label={option.label}
              value={option.value}
              key={option.value}
            />
          ))}
        </select>
        <span className="focus"></span>
      </div>
    </SelectWrapper>
  )
}

export default Select
