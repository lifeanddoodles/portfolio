import { DefaultTFuncReturn } from 'i18next'
import React from 'react'

type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const getHeadingTag = (
  level: number | string
): { component: HeadingComponent; className: string } => {
  const headingLevel = `h${level.toString()}` as HeadingComponent

  switch (headingLevel) {
    case 'h1':
      return {
        component: 'h1',
        className: 'text-white xl:text-5xl sm:text-4xl text-3xl',
      }
    case 'h2':
      return {
        component: 'h2',
        className: 'text-white sm:text-4xl text-3xl',
      }
    case 'h3':
      return {
        component: 'h3',
        className: 'text-white sm:text-3xl text-2xl',
      }
    case 'h4':
      return {
        component: 'h4',
        className: 'text-white sm:text-xl text-lg',
      }
    case 'h5':
      return {
        component: 'h5',
        className: '',
      }
    case 'h6':
      return {
        component: 'h6',
        className: '',
      }
  }
}

interface HeadingProps {
  level?: number | string
  text: string | DefaultTFuncReturn | React.ReactElement
  className?: string
  itemProp?: string
  marginBottom?: number | string
}

const Heading = ({
  level = 2,
  text,
  marginBottom = 4,
  className,
  itemProp,
}: HeadingProps) => {
  const HeadingTag = getHeadingTag(level)

  return (
    HeadingTag?.component && (
      <HeadingTag.component
        className={`title-font font-medium mb-${marginBottom}
        ${HeadingTag.className}
        ${className ? ` ${className}` : ''}`}
        itemProp={itemProp}
      >
        {text}
      </HeadingTag.component>
    )
  )
}

export default Heading
