import { createContext, useContext } from 'react'
import { type Env } from '~/types/env'

type EnvContextType = Env

export const EnvContext = createContext<EnvContextType>({
  BINANCE_API_BASE_URL: '',
  BINANCE_WEBSOCKET_URL: '',
})

export const useEnvContext = () => useContext(EnvContext)
