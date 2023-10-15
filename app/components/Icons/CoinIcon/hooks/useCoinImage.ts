import trimBaseCoin from '~/utils/trimBaseCoin'

function useCoinImage(coinSymbol: string, size: 44 | 30 = 30) {
  const coin = trimBaseCoin(coinSymbol)

  return `/images/coins/${size}x${size}/${coin}.png`
}

export default useCoinImage
