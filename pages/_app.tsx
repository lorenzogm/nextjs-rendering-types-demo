import type { AppProps } from 'next/app'

import LayoutTemplate from 'components/templates/LayoutTemplate/LayoutTemplate'
import { ReactElement } from 'react'

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <LayoutTemplate>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </LayoutTemplate>
  )
}
