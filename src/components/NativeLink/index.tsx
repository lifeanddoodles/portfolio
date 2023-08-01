import { DefaultTFuncReturn } from 'i18next'
import React, { useCallback, useMemo, useState } from 'react'

interface NativeLinkProps {
  ariaLabel?: string
  label?: string | DefaultTFuncReturn
  icon?: JSX.Element
  url: string
  className?: string
  children?: React.ReactElement | React.ReactFragment | React.ReactPortal
}

const NativeLink: React.FC<NativeLinkProps> = ({
  ariaLabel,
  label,
  icon,
  url,
  className,
  children,
}) => {
  const [isHash] = useState(url.startsWith('#'))
  const externalPatterns = useMemo(() => ['http', 'mailto:', 'tel:'], [])
  const externalLinkProps = useMemo(
    () => (!isHash ? { target: '_blank', rel: 'noreferrer' } : {}),
    [isHash]
  )

  /*
   * Check if URL matches one of the protocol or attributes
   * and return match for further tests.
   */
  const hasExternalPatternMatch = useCallback(
    (url: string) => {
      return externalPatterns.some((pattern) => url.startsWith(pattern))
    },
    [externalPatterns]
  )

  const getUrl = useCallback(
    (url: string) => {
      if (isHash) return url
      /*
       * Add 'https://' to avoid accidental internal links
       * in case no protocol or attribute matches were found.
       */
      if (!hasExternalPatternMatch(url)) return `https://${url}`
      return url
    },
    [hasExternalPatternMatch, isHash]
  )

  /*
   * Handle edge cases for interpolation with translations
   */
  const renderChildren = () => {
    if (Array.isArray(children)) {
      return children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))
    }
  }

  return (
    <a
      href={getUrl(url)}
      aria-label={ariaLabel}
      {...externalLinkProps}
      className={className}
    >
      {icon && <span className="native-link__icon">{icon}</span>}
      {label ? <span className="native-link__label">{label}</span> : ''}
      {children && !label ? renderChildren() : ''}
    </a>
  )
}

export default NativeLink
