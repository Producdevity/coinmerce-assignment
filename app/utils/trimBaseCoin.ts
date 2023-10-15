import type { SupportedCoin } from '~/data/supportedCoins'

function trimBaseCoin(coin: string): SupportedCoin {
  return coin.replace(/EUR|USDT/, '')
}

export default trimBaseCoin
