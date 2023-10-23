import { animated, config, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'
import CoinListItemDivider from '~/components/CoinList/components/CoinListItemDivider'
import CoinListItemGraph from '~/components/CoinList/components/CoinListItemGraph'
import CoinListItemPulse from '~/components/CoinList/components/CoinListItemPulse'
import { type GraphSize } from '~/components/CoinList/utils/normalizeKlinesData'
import FavoriteToggle from '~/components/Form/FavoriteToggle'
import CoinIcon from '~/components/Icons/CoinIcon'
import { useFavoriteContext } from '~/context/FavoriteContext'
import type { SymbolPrice } from '~/types/api.types'

interface Props {
  symbol: SymbolPrice['symbol']
  price: SymbolPrice['price']
  graphSize: GraphSize
}

function CoinListItem(props: Props) {
  const { isFavorite, toggleFavorite } = useFavoriteContext()
  const [isUpdating, setIsUpdating] = useState(false)

  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const tooltipTransition = useSpring({
    opacity: isTooltipVisible ? 1 : 0,
    config: { duration: 200 },
  })
  const parsedPrice = parseFloat(props.price)

  const [priceSpringProps, priceSpringRef] = useSpring(() => ({
    number: parsedPrice,
    from: { number: 0 },
    reset: true,
    reverse: isUpdating,
    onRest: () => setTimeout(() => setIsUpdating(false), 1000),
    onStart: () => setIsUpdating(true),
    config: {
      ...config.stiff,
      duration: 200,
    },
  }))

  useEffect(() => {
    priceSpringRef.start({ number: parsedPrice })
  }, [parsedPrice, priceSpringRef])

  return (
    <>
      <div className="flex max-w-full flex-row items-start justify-between gap-5 px-5 py-3.5 hover:backdrop-saturate-150 max-md:flex-wrap">
        <div className="flex flex-grow flex-row items-start gap-2.5 self-center">
          <CoinIcon symbol={props.symbol} />
          <span className="self-center text-xs font-bold text-neutral-600">
            {props.symbol}
          </span>
        </div>
        <div className="absolute left-36 flex md:left-64 lg:left-1/2">
          <CoinListItemGraph symbol={props.symbol} size={props.graphSize} />
        </div>
        <div className="flex max-w-full flex-row items-start justify-between gap-5 self-center">
          <div
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() =>
              setTimeout(() => setIsTooltipVisible(false), 200)
            }
            className="relative"
          >
            <CoinListItemPulse isVisible={isUpdating} />
            <animated.span className="mr-12 self-center text-right text-xs font-semibold text-neutral-600">
              {priceSpringProps.number.to((n) => `€ ${n.toFixed(2)}`)}
            </animated.span>
            {isTooltipVisible && (
              <animated.div
                style={tooltipTransition}
                className="absolute -left-16 -top-12 rounded bg-gray-900 p-2 text-sm text-white shadow-2xl"
              >
                {`€ ${props.price}`}
              </animated.div>
            )}
          </div>
          <FavoriteToggle
            onToggle={() => toggleFavorite(props.symbol)}
            isFavorite={isFavorite(props.symbol)}
          />
        </div>
      </div>
      <CoinListItemDivider />
    </>
  )
}

export default CoinListItem
