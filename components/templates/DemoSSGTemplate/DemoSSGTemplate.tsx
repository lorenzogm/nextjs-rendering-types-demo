import { ReactElement, useEffect } from 'react'

import Link from 'components/foundations/Link/Link'
import { useTrackingContext } from 'contexts/tracking-context/tracking-context'
import {
  TrackingContextActions,
  TrackingPageTypes,
} from 'contexts/tracking-context/tracking-context.types'
import { User } from 'api/user'
import LinkWithTracking from 'components/elements/LinkWithTracking'

type DemoSSGTemplateProps = {
  pageNumber: number
  date: Date
  users: User[]
}

export default function DemoSSGTemplate({
  pageNumber,
  date,
  users,
}: DemoSSGTemplateProps): ReactElement {
  const [{ metrics }, dispatch] = useTrackingContext()

  useEffect(() => {
    dispatch({
      type: TrackingContextActions.TRACKING_SSG_ONLINE_ENABLED_STOP,
      time: performance.now(),
    })
  }, [dispatch])

  const link = (
    <LinkWithTracking
      pageType={TrackingPageTypes.SSG}
      pageNumber={pageNumber}
      trackingContextDispatch={dispatch}
      actionType={TrackingContextActions.TRACKING_SSG_ONLINE_ENABLED_START}
    />
  )

  return (
    <>
      <h1>This page is generated as Static Page (SSG)</h1>

      <ul>
        <li>This is SSG Page {pageNumber}</li>
        <li>
          And this is the time now: <strong>{date.toLocaleString()}</strong>
        </li>
        <li>
          Finally, a list of <strong>random users</strong> requested to the BE:
          {users.map((user) => (
            <span key={user.name}> - {user.name}</span>
          ))}
        </li>
      </ul>

      <hr />

      <p>
        Now, let&apos;s click the button below several times to switch between
        Page 1 and Page 2 to track the page speed.
      </p>
      {link}

      {metrics.SSG.ONLINE.ENABLED.average && (
        <>
          <hr />

          <h2>Remarks</h2>

          <dl>
            <dt>
              This is the average speed load:
              <strong>{metrics.SSG.ONLINE.ENABLED.average}ms</strong>
            </dt>
            <dd>
              The speed will improve a bit after a few clicks because the pages
              are cached by the browser.
            </dd>

            <dt>
              The page is <strong>NOT flickering</strong>
            </dt>
            <dd>
              The data is being requested on runtime by the server. So there is
              no flickering because the data is available in the frontend since
              the first render.
            </dd>

            <dt>
              The <strong>time is NOT updated</strong> (check above)
            </dt>
            <dd>
              The time is updated because it&apos;s checked on every page
              generation in the server.
            </dd>

            <dt>
              The list of <strong>random users does NOT change</strong> (check
              above)
            </dt>
            <dd>
              It&apos;s NOT updated because only one request was made on build
              time.
            </dd>
          </dl>

          <hr />

          <p>Keep clicking to verify the remarks</p>
          {link}

          <hr />

          <Link variant="link" href="/summary">
            Go to next step
          </Link>
        </>
      )}
    </>
  )
}
