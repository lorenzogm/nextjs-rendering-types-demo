import { ReactElement, useEffect, useState } from 'react'

import Link from 'components/foundations/Link/Link'
import { User } from 'api/user'
import getUsers from 'api/getUsers'
import { useTrackingContext } from 'contexts/tracking-context/tracking-context'
import {
  TrackingContextActions,
  TrackingPageTypes,
} from 'contexts/tracking-context/tracking-context.types'
import LinkWithTracking from 'components/elements/LinkWithTracking'

enum Status {
  LOADING,
  SUCCESS,
  FAILURE,
}

type State = {
  status: Status
  users?: User[]
}

type DemoCSRTemplateProps = {
  pageNumber: number
}

export default function DemoCSRTemplate({
  pageNumber,
}: DemoCSRTemplateProps): ReactElement {
  const [{ metrics }, dispatch] = useTrackingContext()
  const date = new Date()

  const [{ status, users }, setState] = useState<State>({
    status: Status.LOADING,
  })

  useEffect(() => {
    getUsers()
      .then((data) => {
        setState((state) => ({
          ...state,
          status: Status.SUCCESS,
          users: data,
        }))

        dispatch({
          type: TrackingContextActions.TRACKING_CSR_ONLINE_ENABLED_STOP,
          time: performance.now(),
        })
      })
      .catch(() => setState((state) => ({ ...state, status: Status.FAILURE })))
  }, [dispatch])

  if (status === Status.LOADING) {
    return <p>Loading...</p>
  }

  if (status === Status.FAILURE || !users) {
    return <p>Error</p>
  }

  const link = (
    <LinkWithTracking
      pageType={TrackingPageTypes.CSR}
      pageNumber={pageNumber}
      trackingContextDispatch={dispatch}
      actionType={TrackingContextActions.TRACKING_CSR_ONLINE_ENABLED_START}
    />
  )

  return (
    <>
      <h1>This page is rendered with Client-Side Rendering (CSR)</h1>

      <ul>
        <li>This is CSR Page {pageNumber}</li>
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

      {metrics.CSR.ONLINE.ENABLED.average && (
        <>
          <hr />
          <h2>Remarks</h2>
          <dl>
            <dt>
              This is the average speed load:
              <strong>{metrics.CSR.ONLINE.ENABLED.average}ms</strong>
            </dt>
            <dd>
              The speed will improve a bit after a few clicks because the pages
              are cached by the browser.
            </dd>

            <dt>
              The page is <strong>flickering</strong>
            </dt>
            <dd>
              The page is flickering and a &quot;Loading...&quot; message is
              displayed because the data is being request on runtime by the
              browser.
            </dd>

            <dt>
              The <strong>time is updated</strong> (check above)
            </dt>
            <dd>
              The time is updated because it&apos;s checked on runtime in the
              browser.
            </dd>

            <dt>
              The list of <strong>random users change</strong> (check above)
            </dt>
            <dd>
              It&apos;s updated because it&apos; requested to the backend on
              runtime.
            </dd>
          </dl>
          <hr />
          <p>Keep clicking to verify the remarks</p>
          {link}

          <hr />
          <Link variant="link" href="/demo/ssr-online-enabled-1">
            Go to next step
          </Link>
        </>
      )}
    </>
  )
}
