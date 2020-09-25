import LinkFromNext from 'next/link'

type LinkProps = {
  children: React.ReactChild
  href: string
  onClick?: () => void
}

export default function Link({
  children,
  href,
  onClick,
}: LinkProps): React.ReactElement {
  return (
    <LinkFromNext href={href}>
      {onClick ? (
        <button type="button" onClick={onClick}>
          {children}
        </button>
      ) : (
        <a>{children}</a>
      )}
    </LinkFromNext>
  )
}
