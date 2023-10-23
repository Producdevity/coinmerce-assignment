// All the types that are used in the Binance V3 API that we are using

export type CoinSymbol =
  | 'ADAEUR'
  | 'ALPINEEUR'
  | 'APEEUR'
  | 'APTEUR'
  | 'ARBEUR'
  | 'ATOMEUR'
  | 'AVAXEUR'
  | 'BCHEUR'
  | 'BNBEUR'
  | 'BTCEUR'
  | 'CHZEUR'
  | 'DAREUR'
  | 'DOGEEUR'
  | 'DOTEUR'
  | 'EDUEUR'
  | 'EGLDEUR'
  | 'ENJEUR'
  | 'EOSEUR'
  | 'ETCEUR'
  | 'ETHEUR'
  | 'FTMEUR'
  | 'GALEUR'
  | 'GALAEUR'
  | 'GMTEUR'
  | 'GRTEUR'
  | 'HOTEUR'
  | 'ICPEUR'
  | 'IDEUR'
  | 'JASMYEUR'
  | 'LAZIOEUR'
  | 'LINKEUR'
  | 'LTCEUR'
  | 'LUNAEUR'
  | 'MATICEUR'
  | 'NEAREUR'
  | 'OPEUR'
  | 'PORTOEUR'
  | 'RUNEEUR'
  | 'SHIBEUR'
  | 'SOLEUR'
  | 'SUIEUR'
  | 'SXPEUR'
  | 'THETAEUR'
  | 'TRXEUR'
  | 'UNIEUR'
  | 'VETEUR'
  | 'WAVESEUR'
  | 'WINEUR'
  | 'WRXEUR'
  | 'XLMEUR'
  | 'XRPEUR'
  | 'YFIEUR'
  | 'ZILEUR'

export interface SymbolTicker {
  symbol: CoinSymbol
}

// Symbol Price Ticker (GET /api/v3/ticker/price)
export interface SymbolPrice extends SymbolTicker {
  price: string
}

export interface Kline {
  0: number // Kline open time
  1: string // Open price
  2: string // High price
  3: string // Low price
  4: string // Close price
  5: string // Volume
  6: number // Kline close time
  7: string // Quote asset volume
  8: number // Number of trades
  9: string // Taker buy base asset volume
  10: string // Taker buy quote asset volume
  11: string // Unused field. Ignore.
}

export type ChartInterval =
  | '1m'
  | '3m'
  | '5m'
  | '15m'
  | '30m'
  | '1h'
  | '2h'
  | '4h'
  | '6h'
  | '8h'
  | '12h'
  | '1d'
  | '3d'
  | '1w'
  | '1M'

export type KlinesParams = {
  symbol: SymbolPrice['symbol']
  interval?: ChartInterval
  limit?: number
}

export interface NormalizedKlinePoint {
  x: number
  y: number
}

export interface WebSocketTickerResponse {
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
