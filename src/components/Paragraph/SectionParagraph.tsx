import React from 'react'
import Paragraph, { ParagraphProps } from './index'

const SectionParagraph = ({ text, children, ...props }: ParagraphProps) => {
  return (
    <Paragraph className="text-left mx-auto" text={text} {...props}>
      {children}
    </Paragraph>
  )
}

export default SectionParagraph
