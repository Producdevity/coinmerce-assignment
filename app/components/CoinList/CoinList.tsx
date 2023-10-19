import { animated, config, useTransition } from '@react-spring/web'
import { useEffect, useMemo, useState } from 'react'
import CoinListHeader from '~/components/CoinList/components/CoinListHeader'
import CoinListItem from '~/components/CoinList/components/CoinListItem'
import CoinListItemDivider from '~/components/CoinList/components/CoinListItemDivider'
import type { Tab } from '~/components/TabBar/data'
import { useFavoriteContext } from '~/context/FavoriteContext'
import type {
  ParsedSymbolPrice,
  SymbolPrice,
  WebSocketResponse,
} from '~/types/api.types'
import useEffectOnce from '~/utils/hooks/useEffectOnce'

interface Props {
  tabId: Tab['id']
  coins: SymbolPrice[]
}

function CoinList(props: Props) {
  const { isFavorite } = useFavoriteContext()
  const [coins, setCoins] = useState<SymbolPrice[]>([])

  useEffect(() => {
    setCoins(props.coins)
  }, [props.coins])

  const parsedFilteredCoins = useMemo<ParsedSymbolPrice[]>(() => {
    const filteredCoins =
      props.tabId === 'favorites'
        ? coins.filter((coin) => isFavorite(coin.symbol))
        : coins

    return filteredCoins.map((coin) => ({
      ...coin,
      price: parseFloat(coin.price),
    }))
  }, [isFavorite, coins, props.tabId])

  const transitions = useTransition(parsedFilteredCoins, {
    keys: (coin: ParsedSymbolPrice) => coin.symbol,
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50%)' },
    config: config.stiff,
    trail: 25,
  })

  useEffectOnce(() => {
    const ws = new WebSocket(window.ENV.BINANCE_WEBSOCKET_URL)

    ws.addEventListener('open', () => {
      const coinsSubscription = coins.map(
        (coin) => `${coin.symbol.toLowerCase()}@ticker`,
      )

      const msg = {
        method: 'SUBSCRIBE',
        params: coinsSubscription,
        id: 1,
      }
      ws.send(JSON.stringify(msg))
    })

    ws.addEventListener('message', (event: MessageEvent) => {
      const res = JSON.parse(event.data) as WebSocketResponse // Replace 'unknown' with your actual response type

      const currentCoin = parsedFilteredCoins.find(
        (coin) => coin.symbol === res.s,
      )
      console.log('currentCoin', currentCoin)

      const newParsedPrice = parseFloat(res.c)

      if (currentCoin?.price === newParsedPrice) return

      console.log('currentCoin', currentCoin)
      console.log(`symbol: ${res.s}, price: ${parseFloat(res.c)}`)

      setCoins((prevCoins) =>
        prevCoins.map((coin) =>
          coin.symbol === res.s ? { ...coin, price: res.c } : coin,
        ),
      )
    })

    ws.addEventListener('error', (event: Event) => {
      console.log(`WebSocket Error: ${JSON.stringify(event)}`)
    })

    ws.addEventListener('close', () => {
      console.log('WebSocket connection closed')
    })

    return () => ws.close()
  })

  return (
    <section className="mt-6 flex flex-col self-stretch rounded-lg border border-solid border-slate-100 bg-white py-6 max-md:max-w-full">
      <CoinListHeader />
      <CoinListItemDivider />
      {transitions((styles, coin) => (
        <animated.div style={styles}>
          <CoinListItem {...coin} />
          <CoinListItemDivider />
        </animated.div>
      ))}
    </section>
  )
}

export default CoinList
