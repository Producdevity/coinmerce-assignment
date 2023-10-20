import { useEffect, useState } from 'react'
import type { SymbolPrice, WebSocketTickerResponse } from '~/types/api.types'

function useBinanceTicker(url: string, coins: SymbolPrice[]) {
  const [data, setData] = useState<WebSocketTickerResponse | null>(null)

  useEffect(() => {
    const ws = new WebSocket(url)

    const coinsSubscription = coins.map(
      (coin) => `${coin.symbol.toLowerCase()}@ticker`,
    )

    const subscribeMessage = {
      method: 'SUBSCRIBE',
      params: coinsSubscription,
      id: 1,
    }

    ws.addEventListener('open', () => {
      if (ws.readyState !== WebSocket.OPEN) return

      if (coinsSubscription.length === 0) return

      ws.send(JSON.stringify(subscribeMessage))
    })

    ws.addEventListener('message', (event) => {
      try {
        const responseData = JSON.parse(event.data) as WebSocketTickerResponse
        setData(responseData)
      } catch (error) {
        console.error('Error parsing message:', error)
      }
    })

    ws.addEventListener('error', (error) => {
      console.error('WebSocket error:', error)
    })

    ws.addEventListener('close', (event) => {
      console.warn('WebSocket connection closed', event)
    })

    return () => {
      if (ws.readyState !== WebSocket.OPEN) return

      ws.close()
    }
  }, [coins, url])

  return data
}

export default useBinanceTicker
