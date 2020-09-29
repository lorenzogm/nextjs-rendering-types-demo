import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

import LayoutTemplate from 'components/templates/LayoutTemplate/LayoutTemplate'
import { useGtagHandlerouteChange } from 'services/gtag'

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  useGtagHandlerouteChange()

  return (
    <LayoutTemplate>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </LayoutTemplate>
  )
}
