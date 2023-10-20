import { useEffect, useMemo, useState } from 'react'
import CoinList from '~/components/CoinList/CoinList'
import { useEnvContext } from '~/context/EnvContext'
import { useFavoriteContext } from '~/context/FavoriteContext'
import { useTabContext } from '~/context/TabContext'
import type { SymbolPrice } from '~/types/api.types'
import useBinanceTicker from '~/utils/hooks/useBinanceTicker'

interface Props {
  coins: SymbolPrice[]
}

function CoinListContainer(props: Props) {
  const { BINANCE_WEBSOCKET_URL } = useEnvContext()
  const [coins, setCoins] = useState<SymbolPrice[]>([])
  const { isFavorite } = useFavoriteContext()
  const { currentTab } = useTabContext()

  const filteredCoins = useMemo(
    () =>
      currentTab.id === 'favorites'
        ? coins.filter((coin) => isFavorite(coin.symbol))
        : coins,
    [coins, currentTab.id, isFavorite],
  )

  const tickerData = useBinanceTicker(BINANCE_WEBSOCKET_URL, coins)

  useEffect(() => {
    setCoins(props.coins)
  }, [props.coins])

  useEffect(() => {
    if (!tickerData) return

    const currentCoin = coins.find((coin) => coin.symbol === tickerData.s)

    if (!currentCoin || currentCoin.price === tickerData.c) return

    setCoins((prevCoins) =>
      prevCoins.map((coin) =>
        coin.symbol === tickerData.s ? { ...coin, price: tickerData.c } : coin,
      ),
    )
  }, [coins, tickerData])

  return <CoinList coins={filteredCoins} />
}

export default CoinListContainer
