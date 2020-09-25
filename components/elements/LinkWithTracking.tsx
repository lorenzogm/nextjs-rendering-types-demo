import Link from 'components/foundations/Link/Link'
import {
  TrackingContextAction,
  TrackingContextActions,
  TrackingPageTypes,
} from 'contexts/tracking-context/tracking-context.types'
import { Dispatch, ReactElement } from 'react'

type LinkWithTrackingProps = {
  pageType: TrackingPageTypes
  pageNumber: number
  trackingContextDispatch: Dispatch<TrackingContextAction>
  actionType: TrackingContextActions
}

export default function LinkWithTracking({
  pageType,
  pageNumber,
  trackingContextDispatch,
  actionType,
}: LinkWithTrackingProps): ReactElement {
  return (
    <Link
      href={`/demo/${pageType.toLowerCase()}-online-enabled-${
        pageNumber === 1 ? 2 : 1
      }`}
      onClick={() =>
        trackingContextDispatch({
          type: actionType,
          time: performance.now(),
        })
      }
    >
      {`Go to ${pageType} Page ${pageNumber === 1 ? 2 : 1}`}
    </Link>
  )
}
