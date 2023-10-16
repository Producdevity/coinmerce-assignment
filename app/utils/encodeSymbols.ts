import type { SupportedCoin } from '~/data/supportedCoins'

type BaseSymbol = 'EUR' | 'USD' | 'USDT'

function encodeSymbols(
  symbols: SupportedCoin[],
  baseSymbol: BaseSymbol = 'EUR',
) {
  const symbolsArray = symbols.map((symbol) => `${symbol}${baseSymbol}`)
  return encodeURIComponent(JSON.stringify(symbolsArray))
}

export default encodeSymbols
