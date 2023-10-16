import { useTransition, animated, config } from '@react-spring/web'
import { useEffect, useState } from 'react'
import CoinListHeader from '~/components/CoinList/components/CoinListHeader'
import CoinListItem from '~/components/CoinList/components/CoinListItem'
import CoinListItemDivider from '~/components/CoinList/components/CoinListItemDivider'
import type { Tab } from '~/components/TabBar/data'
import { useFavoriteContext } from '~/context/FavoriteContext'
import type { SymbolPrice, WebSocketResponse } from '~/types/api.types'
import useEffectOnce from '~/utils/hooks/useEffectOnce'

interface Props {
  tabId: Tab['id']
  coins: SymbolPrice[]
}

function CoinList(props: Props) {
  const { isFavorite } = useFavoriteContext()
  const [updatedCoins, setUpdatedCoins] = useState<SymbolPrice[]>([])

  useEffect(() => {
    const filteredCoins =
      props.tabId === 'favorites'
        ? props.coins.filter((coin) => isFavorite(coin.symbol))
        : props.coins

    setUpdatedCoins(filteredCoins)
  }, [isFavorite, props.coins, props.tabId])

  const transitions = useTransition(updatedCoins, {
    keys: (coin: SymbolPrice) => coin.symbol,
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50%)' },
    config: config.stiff,
    trail: 25,
  })

  useEffectOnce(() => {
    const coinsSubscription = props.coins.map(
      (coin) => `${coin.symbol.toLowerCase()}@ticker`,
    )

    // Initialize WebSocket connection
    const ws = new WebSocket(window.ENV.BINANCE_WEBSOCKET_URL)

    ws.addEventListener('open', () => {
      const msg = {
        method: 'SUBSCRIBE',
        params: coinsSubscription,
        id: 1,
      }
      ws.send(JSON.stringify(msg))
    })

    ws.addEventListener('message', (event: MessageEvent) => {
      const response = JSON.parse(event.data) as WebSocketResponse // Replace 'unknown' with your actual response type

      // Update your coins state here
      console.log('WebSocket response:', response)

      // Assume you have a function like `updateCoinPrice` to update the coin's price
      // updateCoinPrice(response as SymbolPrice); // Again, replace 'SymbolPrice' with your actual type if different
    })

    ws.addEventListener('error', (event: Event) => {
      console.log(`WebSocket Error: ${event}`)
    })

    ws.addEventListener('close', () => {
      console.log('WebSocket connection closed')
    })

    // TODO: remove, temp
    setTimeout(() => {
      ws.close()
    }, 2000)

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
