import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'components/foundations/Link/Link'
import { TrackingContextActions } from 'contexts/tracking-context/tracking-context.types'
import { useTrackingContext } from 'contexts/tracking-context/tracking-context'

export default function HomeTemplate(): ReactElement {
  const [, dispatch] = useTrackingContext()

  return (
    <>
      <Head>
        <title>Rendering Types Demo</title>
      </Head>

      <h1>Rendering Types Demo</h1>
      <p>
        This is an interactive demo to show the options available when rendering
        a frontend application with React and Next.js.
      </p>
      <p>
        Who care about styling when we are going to have fun with performance?
        :)
      </p>
      <p>
        Let&apos;s start with some context to know what&apos;s going to be
        tested.
      </p>

      <hr />

      <h2>Rendering Types</h2>

      <p>
        There are 3 types of rendering analyzed in this demo: Static Rendering,
        Server-Side Rendering and Client-Side rendering
      </p>

      <h3>Static Rendering</h3>
      <p>
        Renders the app at build time. Generally involves generating a static
        HTML page for every URL.
      </p>

      <h3>Server-Side Rendering</h3>
      <p>
        Renders the app on the Server in response to each request, and then
        sends the hydrated HTML and Javascript back to the Client.
      </p>

      <h3>Client-Side Rendering</h3>
      <p>Renders the app on the Client in the browser at run time.</p>

      <hr />

      <Link
        variant="button"
        href="/demo/csr-online-enabled-1"
        onClick={() => dispatch({ type: TrackingContextActions.RESET })}
      >
        Let&apos;s start!
      </Link>
    </>
  )
}
