import React from 'react'

interface SectionHeaderProps {
  children: React.ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <div className="section__header text-center">{children}</div>
}

export default SectionHeader
