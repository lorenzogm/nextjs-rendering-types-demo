import {
  TrackingCache,
  TrackingContextState,
  TrackingPageTypes,
  TrackingSpeed,
} from './tracking-context.types'

const trackingContextStateInitial: TrackingContextState = {
  metrics: {
    [TrackingPageTypes.CSR]: {
      [TrackingSpeed.ONLINE]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
      [TrackingSpeed.FAST_3G]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
      [TrackingSpeed.SLOW_3G]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
    },
    [TrackingPageTypes.SSG]: {
      [TrackingSpeed.ONLINE]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
      [TrackingSpeed.FAST_3G]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
      [TrackingSpeed.SLOW_3G]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
    },
    [TrackingPageTypes.SSR]: {
      [TrackingSpeed.ONLINE]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
      [TrackingSpeed.FAST_3G]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
      [TrackingSpeed.SLOW_3G]: {
        [TrackingCache.ENABLED]: {
          list: [],
          average: null,
        },
        [TrackingCache.DISABLED]: {
          list: [],
          average: null,
        },
      },
    },
  },
}

export default function getInititalState(): TrackingContextState {
  if (process.browser) {
    const metricsAsString = localStorage.getItem('metrics')

    if (metricsAsString) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const metrics: TrackingContextState['metrics'] = metricsAsString
        ? JSON.parse(metricsAsString)
        : trackingContextStateInitial

      return {
        ...trackingContextStateInitial,
        metrics,
      }
    }
  }

  return trackingContextStateInitial
}
