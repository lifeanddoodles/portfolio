import { DefaultTFuncReturn } from 'i18next'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const getHeadingTag = (
  level: number | string
): { component: HeadingComponent; className: string } => {
  const headingLevel = `h${level.toString()}` as HeadingComponent

  switch (headingLevel) {
    case 'h1':
      return {
        component: 'h1',
        className: 'text-white text-3xl md:text-4xl xl:text-5xl',
      }
    case 'h2':
      return {
        component: 'h2',
        className: 'text-white text-4xl',
      }
    case 'h3':
      return {
        component: 'h3',
        className: 'text-white text-2xl',
      }
    case 'h4':
      return {
        component: 'h4',
        className: 'text-white text-lg',
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
  const mergedClasses = twMerge(
    `title-font font-medium mb-${marginBottom} ${HeadingTag.className}`,
    className
  )

  return (
    HeadingTag?.component && (
      <HeadingTag.component className={mergedClasses} itemProp={itemProp}>
        {text}
      </HeadingTag.component>
    )
  )
}

export default Heading
