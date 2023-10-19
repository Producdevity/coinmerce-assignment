import { animated, config, useSpring } from '@react-spring/web'
import { useEffect } from 'react'
import FavoriteToggle from '~/components/Form/FavoriteToggle'
import CoinIcon from '~/components/Icons/CoinIcon'
import { useFavoriteContext } from '~/context/FavoriteContext'

interface Props {
  symbol: string
  price: number
}

function CoinListItem(props: Props) {
  const { isFavorite, toggleFavorite } = useFavoriteContext()

  const [springProps, setSpringProps] = useSpring(() => ({
    number: props.price,
    config: config.stiff,
    trail: 25,
  }))

  useEffect(() => {
    // TODO: try do the parsing here to smooth out the animation
    setSpringProps({ number: props.price })
  }, [props.price, setSpringProps])

  return (
    <div className="flex max-w-full flex-row items-start justify-between gap-5 px-5 py-3.5 hover:backdrop-saturate-150 max-md:flex-wrap">
      <div className="flex flex-row items-start gap-2.5 self-center">
        <CoinIcon symbol={props.symbol} />
        <span className="self-center text-xs font-bold text-neutral-600">
          {props.symbol}
        </span>
      </div>
      <div className="flex max-w-full flex-row items-start justify-between gap-5 self-center">
        <animated.span className="mr-12 self-center text-right text-xs font-semibold text-neutral-600">
          {springProps.number.to((n) => `€ ${n}`)}
        </animated.span>
        <FavoriteToggle
          onToggle={() => toggleFavorite(props.symbol)}
          isFavorite={isFavorite(props.symbol)}
        />
      </div>
    </div>
  )
}

export default CoinListItem
