// All the types that are used in the Binance V3 API that we are using

type Symbol =
  | 'ADAEUR'
  | 'ATOMEUR'
  | 'AVAXEUR'
  | 'BCHEUR'
  | 'BNBEUR'
  | 'BTCEUR'
  | 'DOGEEUR'
  | 'DOTEUR'
  | 'EGLDEUR'
  | 'EOSEUR'
  | 'ETHEUR'
  | 'GRTEUR'
  | 'LINKEUR'
  | 'LTCEUR'
  | 'SXPEUR'
  | 'UNIEUR'
  | 'XLMEUR'
  | 'XRPEUR'
  | 'YFIEUR'
  | string // TODO: Lets see what we can do here, this is not ideal

export interface SymbolTicker {
  symbol: Symbol
}

// Symbol Price Ticker (GET /api/v3/ticker/price)
export interface SymbolPrice extends SymbolTicker {
  price: string
}

export interface ParsedSymbolPrice extends SymbolTicker {
  price: number
}

export interface WebSocketResponse {
  A: string // Best ask quantity
  B: string // Best bid quantity
  C: number // Statistics close time
  E: number // Event time
  F: number // First trade ID
  L: number // Last trade Id
  O: number // Statistics open time
  P: string // Price change percent
  Q: string // Last quantity
  a: string // Best ask price
  b: string // Best bid price
  c: string // Last price
  e: string // Event type
  h: string // High price
  l: string // Low price
  n: number // Total number of trades
  o: string // Open price
  p: string // Price change
  q: string // Total traded quote asset volume
  s: string // Symbol pair (e.g. BTCEUR or ETHEUR)
  v: string // Total traded base asset volume
  w: string // Weighted average price
  x: string // First trade(F)-1 price (first trade before the 24hr rolling window)
}
