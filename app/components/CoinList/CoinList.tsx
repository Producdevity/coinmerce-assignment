import { animated, config, useTransition } from '@react-spring/web'
import { useEffect, useState } from 'react'
import CoinListHeader from '~/components/CoinList/components/CoinListHeader'
import CoinListItem from '~/components/CoinList/components/CoinListItem'
import CoinListItemDivider from '~/components/CoinList/components/CoinListItemDivider'
import {
  GRAPH_HEIGHT,
  GRAPH_WIDTH,
  type GraphSize,
} from '~/components/CoinList/utils/normalizeKlinesData'
import type { SymbolPrice } from '~/types/api.types'

interface Props {
  coins: SymbolPrice[]
}

const ITEM_HEIGHT = 60

function CoinList(props: Props) {
  const [coins, setCoins] = useState<SymbolPrice[]>([])
  const [graphSize, setGraphSize] = useState<GraphSize>({
    width: GRAPH_WIDTH,
    height: GRAPH_HEIGHT,
  })

  useEffect(() => {
    setCoins(props.coins)
  }, [props.coins])

  const transitions = useTransition(coins, {
    keys: (coin: SymbolPrice) => coin.symbol,
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: {
      opacity: 1,
      transform: 'translateX(0px)',
      maxHeight: ITEM_HEIGHT,
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-50%)',
      maxHeight: 0,
    },
    config: config.stiff,
    trail: 25,
  })

  useEffect(() => {
    const sizes = [
      { max: 390, width: 0, height: 0 },
      { max: 410, width: 50, height: GRAPH_HEIGHT },
      { max: 440, width: 70, height: GRAPH_HEIGHT },
      { max: 460, width: 90, height: GRAPH_HEIGHT },
      { max: 490, width: 110, height: GRAPH_HEIGHT },
    ]

    function handleResize() {
      const width = window.innerWidth
      const foundSize = sizes.find((size) => width < size.max)

      setGraphSize(
        foundSize
          ? { width: foundSize.width, height: foundSize.height }
          : { width: GRAPH_WIDTH, height: GRAPH_HEIGHT },
      )
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="mt-6 flex flex-col self-stretch rounded-lg border border-solid border-slate-100 bg-white py-6 max-md:max-w-full">
      <CoinListHeader />
      <CoinListItemDivider />
      {transitions((style, coin) => (
        <animated.div style={style}>
          <CoinListItem {...coin} graphSize={graphSize} />
        </animated.div>
      ))}
    </section>
  )
}

export default CoinList
