import { DefaultTFuncReturn } from 'i18next'
import React from 'react'

export interface ParagraphProps {
  text?: string | DefaultTFuncReturn | React.ReactElement
  className?: string
  size?: string
  marginBottom?: number | string
  itemProp?: string
  children?: string
}

const Paragraph = ({
  text,
  marginBottom = 4,
  size = 'base',
  className,
  itemProp,
  children,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={`text-${size} leading-relaxed mb-${marginBottom} lg:max-w-xl
        ${className ? ` ${className}` : ''}`}
      itemProp={itemProp}
      {...props}
    >
      {text || children}
    </p>
  )
}

export default Paragraph
