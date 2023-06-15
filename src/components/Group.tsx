import React from 'react'

export interface GroupProps {
  children:
    | boolean
    | React.ReactElement
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  className?: string
  id?: string
  'aria-label'?: string
  role?: string
}

const Group: React.FC<GroupProps> = ({
  role = 'group',
  children,
  className,
  id,
  'aria-label': ariaLabel,
}) => {
  return (
    <div
      role={role}
      className={`flex${className ? ` ${className}` : ''}`}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  )
}

export default Group
