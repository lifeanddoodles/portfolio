import React from 'react'

interface InputProps {
  name: string
  value: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ name, value, type = 'text', onChange }: InputProps) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      className="text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  )
}

export default Input
