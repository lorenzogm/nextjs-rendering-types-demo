import { useTrackingContext } from 'contexts/tracking-context/tracking-context'
import { ReactElement } from 'react'

const cellGreen = {
  backgroundColor: 'green',
  color: 'white',
}
const cellYellow = {
  backgroundColor: 'yellow',
}
const cellRed = {
  backgroundColor: 'red',
  color: 'white',
}

export default function DemoSummary(): ReactElement {
  const [{ metrics }] = useTrackingContext()

  return (
    <>
      <h1>Summary</h1>

      <p>
        The table below summarize the behaviour that we saw during the demo,
        together with other relevant topics to know the main differences between
        the 3 types of rendering:
      </p>

      <table>
        <thead>
          <tr>
            <th> </th>
            <th>CSR</th>
            <th>SSR</th>
            <th>SSG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Speed: Average speed to load the page</td>
            <td>{metrics.CSR.ONLINE.ENABLED.average}ms</td>
            <td>{metrics.SSR.ONLINE.ENABLED.average}ms</td>
            <td>{metrics.SSG.ONLINE.ENABLED.average}ms</td>
          </tr>

          <tr>
            <td>UX: Is the page flickering?</td>
            <td style={cellRed}>Yes</td>
            <td style={cellGreen}>No</td>
            <td style={cellGreen}>No</td>
          </tr>

          <tr>
            <td>Data: Is time valid?</td>
            <td style={cellGreen}>Yes</td>
            <td style={cellGreen}>Yes</td>
            <td style={cellRed}>No</td>
          </tr>

          <tr>
            <td>Data: Are the users updated?</td>
            <td style={cellGreen}>Yes</td>
            <td style={cellGreen}>Yes</td>
            <td style={cellRed}>No</td>
          </tr>

          <tr>
            <td>SEO</td>
            <td style={cellRed}>Bad</td>
            <td style={cellYellow}>Good</td>
            <td style={cellGreen}>Great</td>
          </tr>

          <tr>
            <td>Server costs</td>
            <td style={cellGreen}>Low</td>
            <td style={cellRed}>High</td>
            <td style={cellGreen}>Low</td>
          </tr>

          <tr>
            <td>Complexity</td>
            <td style={cellGreen}>Easy</td>
            <td style={cellYellow}>Medium</td>
            <td style={cellYellow}>Medium</td>
          </tr>

          <tr>
            <td>Benefits regarding security?</td>
            <td style={cellRed}>No</td>
            <td style={cellRed}>No</td>
            <td style={cellGreen}>Yes</td>
          </tr>

          <tr>
            <td>Is possible to use a CDN?</td>
            <td style={cellGreen}>Yes</td>
            <td style={cellRed}>No</td>
            <td style={cellGreen}>Yes</td>
          </tr>
        </tbody>
      </table>

      <p>
        The information provided in the table, it&apos;s extended with further
        information below:
      </p>

      <h3>Client-Side Rendering</h3>

      <h4>PROS</h4>
      <ul>
        <li>
          Data: The data is never stale because it&apos;s generated (time) or
          requested (users) on runtime.
        </li>
        <li>
          Server costs: A server is not needed because the scripts run in the
          browser.
        </li>
        <li>
          Complexity: it&apos; easier to build a website/app without SSR or SSG.
        </li>
      </ul>

      <h4>CONS</h4>
      <ul>
        <li>
          Speed: it could be improved with SSG. When rendering a more complex
          UI, we will notice that SSR is faster as well.
        </li>
        <li>
          UX: it has loading times (flickering) and it could be improved with
          SSR or SSG.
        </li>
        <li>
          SEO: the content may not be available when the search engine bot is
          crawling the page. So there is a risk of &quot;partial indexing&quot;.{' '}
        </li>
      </ul>

      <h3>Server-Side Rendering</h3>

      <h4>PROS</h4>
      <ul>
        <li>
          Data: The data is never stale because it&apos;s generated (time) or
          requested (users) on runtime.
        </li>
        <li>UX: there is no flickering, so the user will have a good UX.</li>
        <li>
          SEO: fully-renderer pages are sent to the bots, so there is no risk of
          partial indexing. In addition, SSR can speed up the page load times,
          which can help to improve the rank in the search engine.
        </li>
      </ul>

      <h4>CONS</h4>
      <ul>
        <li>Speed: it could be improved with SSG.</li>
        <li>Server costs: A server is needed to render the pages.</li>
        <li>Complexity: it&apos; easier to build a website without SSR.</li>
        <li>Cannot be deployed to a CDN.</li>
      </ul>

      <h3>Static Site Generation</h3>

      <h4>PROS</h4>
      <ul>
        <li>Speed: static pages are event faster than pages with SSR.</li>
        <li>UX: there is no flickering, so the user will have a good UX.</li>
        <li>
          SEO: fully-renderer pages are sent to the bots, so there is no risk of
          partial indexing. In addition, SSG can speed up the page load times
          (even more than SSR), which can help to improve the rank in the search
          engine.
        </li>
        <li>Server costs: A server is not needed to render the pages.</li>
        <li>
          Deployment: there are several platform that deploy the code directly
          from the git repository, which makes it easy to deploy.
        </li>
        <li>
          Security: with static files, the risk to been vulnerable to cyber
          attacks is minimal. This is because they don&apos; have a database.
        </li>
      </ul>

      <h4>CONS</h4>
      <ul>
        <li>
          Data: The data can be stale because it&apos;s generated (time) or
          requested (users) on build time. If the data change quite often or
          with every render. SSG won&apos;t be a valid approach.
        </li>
        <li>To update the content, you have to rebuild the site.</li>
        <li>
          Depending on the size of the application, the build time would
          increase.
        </li>
      </ul>
    </>
  )
}
