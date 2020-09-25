import Head from 'next/head'
import { ReactElement } from 'react'

export default function ConclusionsTemplate(): ReactElement {
  return (
    <>
      <Head>
        <title>Conclusions - Rendering Types Demo</title>
      </Head>
      <h1>Rendering Types Comparison</h1>
      <p>
        There are, at least, 3 main options when rendering the data in front-end
        development.
      </p>

      <table>
        <thead>
          <tr>
            <th />
            <th>Static Site Generation</th>
            <th>Server-Side Rendering</th>
            <th>Client-Side Rendering</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition</td>
            <td>
              Renders the app at build time. Generally involves generating a
              static HTML page for every URL.
            </td>
            <td>
              Renders the app on the Server in response to each request, and
              then sends the hydrated HTML and Javascript back to the Client.
            </td>
            <td>Renders the app on the Client in the browser at run time.</td>
          </tr>
          <tr>
            <td>Is the data updated?</td>
            <td>
              The data could be stale. Every change in the data, requires a new
              site generation.
            </td>
            <td>
              Yes, the data is fetched in the server when the page is requested.
            </td>
            <td>
              Yes, the data is fetched in the client when the page is requested.
            </td>
          </tr>
          <tr>
            <td>Flickering caused by rendering data</td>
            <td>
              No, the page is generated on build time and rendered once by the
              client.
            </td>
            <td>
              No, the page is generated in the server and rendered once by the
              client.
            </td>
            <td>
              Yes, the page is rendered client and there is a loading time since
              the first render because the data is being fetched by the client.
            </td>
          </tr>
          <tr>
            <td>SPA capable</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Server Costs</td>
            <td>
              A server is not required, the static pages are generated on build
              time.
            </td>
            <td>
              {`It's required to render the pages on demand. It's the most
          expensive option.`}
            </td>
            <td>
              {`Not required, the code runs in the client. It's the cheapest
          option.`}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
