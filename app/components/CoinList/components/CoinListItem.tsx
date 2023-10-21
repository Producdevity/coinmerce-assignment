import { animated, config, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'
import CoinListItemPulse from '~/components/CoinList/components/CoinListItemPulse'
import FavoriteToggle from '~/components/Form/FavoriteToggle'
import CoinIcon from '~/components/Icons/CoinIcon'
import { useFavoriteContext } from '~/context/FavoriteContext'
import type { SymbolPrice } from '~/types/api.types'

interface Props {
  symbol: SymbolPrice['symbol']
  price: SymbolPrice['price']
}

function CoinListItem({ symbol, price }: Props) {
  const { isFavorite, toggleFavorite } = useFavoriteContext()
  const [isUpdating, setIsUpdating] = useState(false)
  const [isFirstUpdate, setIsFirstUpdate] = useState(true)

  const parsedPrice = parseFloat(price)

  const [springProps, springRef] = useSpring(() => ({
    number: parsedPrice,
    from: { number: 0 },
    config: config.stiff,
    trail: 25,
  }))

  useEffect(() => {
    springRef.start({ number: parsedPrice })
    if (isFirstUpdate) {
      setIsFirstUpdate(false)
      return
    }
    setIsUpdating(true)
    const timeoutId = setTimeout(() => setIsUpdating(false), 1500)
    return () => clearTimeout(timeoutId)
  }, [parsedPrice, springRef, isFirstUpdate])

  return (
    <div className="flex max-w-full flex-row items-start justify-between gap-5 px-5 py-3.5 hover:backdrop-saturate-150 max-md:flex-wrap">
      <div className="flex flex-row items-start gap-2.5 self-center">
        <CoinIcon symbol={symbol} />
        <span className="self-center text-xs font-bold text-neutral-600">
          {symbol}
        </span>
      </div>
      <div className="flex max-w-full flex-row items-start justify-between gap-5 self-center">
        <div className="relative">
          <CoinListItemPulse isVisible={isUpdating} />
          <animated.span className="mr-12 self-center text-right text-xs font-semibold text-neutral-600">
            {springProps.number.to((n) => `€ ${n}`)}
          </animated.span>
        </div>
        <FavoriteToggle
          onToggle={() => toggleFavorite(symbol)}
          isFavorite={isFavorite(symbol)}
        />
      </div>
    </div>
  )
}

export default CoinListItem
