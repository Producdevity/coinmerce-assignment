import { animated, config, useTransition } from '@react-spring/web'
import { useEffect, useState } from 'react'
import CoinListHeader from '~/components/CoinList/components/CoinListHeader'
import CoinListItem from '~/components/CoinList/components/CoinListItem'
import CoinListItemDivider from '~/components/CoinList/components/CoinListItemDivider'
import type { SymbolPrice } from '~/types/api.types'

interface Props {
  coins: SymbolPrice[]
}

function CoinList(props: Props) {
  const [coins, setCoins] = useState<SymbolPrice[]>([])

  useEffect(() => {
    setCoins(props.coins)
  }, [props.coins])

  const transitions = useTransition(coins, {
    keys: (coin: SymbolPrice) => coin.symbol,
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50%)' },
    config: config.stiff,
    trail: 25,
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
