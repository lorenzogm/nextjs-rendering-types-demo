import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

import { TrackingContextReturn } from './tracking-context.types'
import trackingContextReducer from './trackingContextReducer'
import getInititalState from './getInititalState'

const TrackingContext = createContext<TrackingContextReturn>([
  getInititalState(),
  () => {},
])

type TrackingProviderProps = {
  children: ReactNode
}
export function TrackingContextProvider({
  children,
}: TrackingProviderProps): ReactElement {
  const reducer = useReducer(trackingContextReducer, getInititalState())

  return (
    <TrackingContext.Provider value={reducer}>
      {children}
    </TrackingContext.Provider>
  )
}

export function useTrackingContext(): TrackingContextReturn {
  const context = useContext(TrackingContext)
  if (context === undefined) {
    throw new Error(
      '"useTrackingContext" must be used within a "TrackingProviderProps"',
    )
  }

  return context
}
