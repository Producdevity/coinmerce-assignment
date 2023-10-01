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

export interface SymbolTicker {
  symbol: Symbol
}

// Symbol Price Ticker (GET /api/v3/ticker/price)
export interface SymbolPrice extends SymbolTicker {
  price: string
}
