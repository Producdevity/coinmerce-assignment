import type { WebSocketResponse } from '~/types/api.types'

const websocketResponseMock: WebSocketResponse = {
  A: '100', // Best ask quantity
  B: '10', // Best bid quantity
  C: 86400000, // Statistics close time
  E: 1672515782136, // Event time
  F: 0, // First trade ID
  L: 18150, // Last trade Id
  O: 0, // Statistics open time
  P: '250.00', // Price change percent
  Q: '10', // Last quantity
  a: '0.0026', // Best ask price
  b: '0.0024', // Best bid price
  c: '0.0025', // Last price
  e: '24hrTicker', // Event type
  h: '0.0025', // High price
  l: '0.0010', // Low price
  n: 18151, // Total number of trades
  o: '0.0010', // Open price
  p: '0.0015', // Price change
  q: '18', // Total traded quote asset volume
  s: 'BNBBTC', // Symbol
  v: '10000', // Total traded base asset volume
  w: '0.0018', // Weighted average price
  x: '0.0009', // First trade(F)-1 price (first trade before the 24hr rolling window)
}

export default websocketResponseMock
