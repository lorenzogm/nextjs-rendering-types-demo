import { Dispatch } from 'react'

export type TrackingContextReturn = [
  TrackingContextState,
  Dispatch<TrackingContextAction>,
]

export type TrackingContextState = {
  metrics: MetricsByPageType
  time?: number
}

export enum DemoSteps {
  STEP_1_CSR_ONLINE_ENABLED,
  STEP_1_CSR_ONLINE_DISABLED,
}

export enum TrackingPageTypes {
  SSG = 'SSG',
  SSR = 'SSR',
  CSR = 'CSR',
}

type MetricsByPageType = {
  [TrackingPageTypes.SSG]: MetricsBySpeed
  [TrackingPageTypes.SSR]: MetricsBySpeed
  [TrackingPageTypes.CSR]: MetricsBySpeed
}
export enum TrackingSpeed {
  ONLINE = 'ONLINE',
  FAST_3G = 'FAST_3G',
  SLOW_3G = 'SLOW_3G',
}
type MetricsBySpeed = {
  [TrackingSpeed.ONLINE]: MetricsByCache
  [TrackingSpeed.FAST_3G]: MetricsByCache
  [TrackingSpeed.SLOW_3G]: MetricsByCache
}
export enum TrackingCache {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}
type MetricsByCache = {
  [TrackingCache.ENABLED]: Metrics
  [TrackingCache.DISABLED]: Metrics
}
export type Metrics = {
  list: number[]
  average: number | null
}

export enum TrackingContextActions {
  RESET = 'RESET',
  TRACKING_CSR_ONLINE_ENABLED_START = 'TRACKING_CSR_ONLINE_ENABLED_START',
  TRACKING_CSR_ONLINE_ENABLED_STOP = 'TRACKING_CSR_ONLINE_ENABLED_STOP',
  TRACKING_SSR_ONLINE_ENABLED_START = 'TRACKING_SSR_ONLINE_ENABLED_START',
  TRACKING_SSR_ONLINE_ENABLED_STOP = 'TRACKING_SSR_ONLINE_ENABLED_STOP',
  TRACKING_SSG_ONLINE_ENABLED_START = 'TRACKING_SSG_ONLINE_ENABLED_START',
  TRACKING_SSG_ONLINE_ENABLED_STOP = 'TRACKING_SSG_ONLINE_ENABLED_STOP',
}
export type TrackingContextAction =
  | { type: TrackingContextActions.RESET }
  | {
      type:
        | TrackingContextActions.TRACKING_CSR_ONLINE_ENABLED_START
        | TrackingContextActions.TRACKING_CSR_ONLINE_ENABLED_STOP
        | TrackingContextActions.TRACKING_SSR_ONLINE_ENABLED_START
        | TrackingContextActions.TRACKING_SSR_ONLINE_ENABLED_STOP
        | TrackingContextActions.TRACKING_SSG_ONLINE_ENABLED_START
        | TrackingContextActions.TRACKING_SSG_ONLINE_ENABLED_STOP
      time: number
    }
