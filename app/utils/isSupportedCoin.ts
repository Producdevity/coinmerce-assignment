import supportedCoins from '~/data/supportedCoins'
import trimBaseCoin from '~/utils/trimBaseCoin'

function isSupportedCoin(coin: string) {
  return supportedCoins.includes(trimBaseCoin(coin))
}

export default isSupportedCoin
