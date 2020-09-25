import { ReactNode, ReactElement } from 'react'
import Head from 'next/head'

import { TrackingContextProvider } from 'contexts/tracking-context/tracking-context'

type LayoutTemplateProps = {
  children: ReactNode
}

export default function LayoutTemplate({
  children,
}: LayoutTemplateProps): ReactElement {
  return (
    <>
      <Head>
        <title>Rendering Types Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrackingContextProvider>
        <main>{children}</main>
      </TrackingContextProvider>
    </>
  )
}
