import { createContext, useContext } from 'react'

interface EnvContextType {
  BINANCE_WEBSOCKET_URL: string
}

export const EnvContext = createContext<EnvContextType>({
  BINANCE_WEBSOCKET_URL: '',
})

export const useEnvContext = () => useContext(EnvContext)
