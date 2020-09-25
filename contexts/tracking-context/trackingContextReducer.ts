import deepmerge from 'deepmerge'

import {
  Metrics,
  TrackingCache,
  TrackingContextAction,
  TrackingContextActions,
  TrackingContextState,
  TrackingPageTypes,
  TrackingSpeed,
} from './tracking-context.types'
import getInititalState from './getInititalState'

export default function trackinContextReducer(
  state: TrackingContextState,
  action: TrackingContextAction,
): TrackingContextState {
  switch (action.type) {
    case TrackingContextActions.TRACKING_CSR_ONLINE_ENABLED_START:
      return {
        ...state,
        time: action.time,
      }

    case TrackingContextActions.TRACKING_CSR_ONLINE_ENABLED_STOP:
      return {
        ...state,
        time: undefined,
        metrics: getMetrics({
          state,
          pageType: TrackingPageTypes.CSR,
          speed: TrackingSpeed.ONLINE,
          cache: TrackingCache.ENABLED,
          time: action.time,
        }),
      }

    case TrackingContextActions.TRACKING_SSR_ONLINE_ENABLED_START:
      return {
        ...state,
        time: action.time,
      }

    case TrackingContextActions.TRACKING_SSR_ONLINE_ENABLED_STOP:
      return {
        ...state,
        time: undefined,
        metrics: getMetrics({
          state,
          pageType: TrackingPageTypes.SSR,
          speed: TrackingSpeed.ONLINE,
          cache: TrackingCache.ENABLED,
          time: action.time,
        }),
      }

    case TrackingContextActions.TRACKING_SSG_ONLINE_ENABLED_START:
      return {
        ...state,
        time: action.time,
      }

    case TrackingContextActions.TRACKING_SSG_ONLINE_ENABLED_STOP:
      return {
        ...state,
        time: undefined,
        metrics: getMetrics({
          state,
          pageType: TrackingPageTypes.SSG,
          speed: TrackingSpeed.ONLINE,
          cache: TrackingCache.ENABLED,
          time: action.time,
        }),
      }

    case TrackingContextActions.RESET:
      if (process.browser) {
        localStorage.removeItem('metrics')
      }
      return getInititalState()

    default:
      return state
  }
}

type GetMetricsProps = {
  state: TrackingContextState
  pageType: TrackingPageTypes
  speed: TrackingSpeed
  cache: TrackingCache
  time: number
}

function getMetrics({ state, pageType, speed, cache, time }: GetMetricsProps) {
  if (!state.time) {
    return state.metrics
  }

  const metricPrevious: Metrics = state.metrics[pageType][speed][cache]

  const pageLoadTime = time - state.time
  const list = [...metricPrevious.list, pageLoadTime]
  const average = Math.round(list.reduce((a, b) => a + b) / list.length)

  const metrics = deepmerge(state.metrics ? state.metrics : {}, {
    [pageType]: {
      [speed]: {
        [cache]: {
          list: [pageLoadTime],
          average,
        },
      },
    },
  })

  if (process.browser) {
    localStorage.setItem('metrics', JSON.stringify(metrics))
  }

  return metrics
}
