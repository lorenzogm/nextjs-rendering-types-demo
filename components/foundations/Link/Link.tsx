import LinkFromNext from 'next/link'
import { ReactChild, ReactElement } from 'react'

type LinkProps = {
  children: ReactChild
  href: string
  variant: 'link' | 'button'
  onClick?: () => void
}

export default function Link({
  children,
  href,
  variant,
  onClick,
}: LinkProps): ReactElement {
  return (
    <LinkFromNext href={href}>
      {variant === 'button' ? (
        <button type="button" onClick={onClick}>
          {children}
        </button>
      ) : (
        <a>{children}</a>
      )}
    </LinkFromNext>
  )
}
