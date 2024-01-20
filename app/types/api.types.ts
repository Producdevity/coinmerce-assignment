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

// 24hr Ticker Price Change Statistics (GET /api/v3/ticker/24hr)
export interface SymbolPriceDetails extends SymbolTicker {
  priceChange: string
  priceChangePercent: string
  weightedAvgPrice: string
  prevClosePrice: string
  lastPrice: string
  lastQty: string
  bidPrice: string
  bidQty: string
  askPrice: string
  askQty: string
  openPrice: string
  highPrice: string
  lowPrice: string
  volume: string
  quoteVolume: string
  openTime: number
  closeTime: number
  firstId: number
  lastId: number
  count: number
}

export type Kline = [
  number, // Kline open time
  string, // Open price
  string, // High price
  string, // Low price
  string, // Close price
  string, // Volume
  number, // Kline close time
  string, // Quote asset volume
  number, // Number of trades
  string, // Taker buy base asset volume
  string, // Taker buy quote asset volume
  string, // Unused field. Ignore.
]

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
