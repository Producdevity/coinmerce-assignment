import FavoriteToggle from '~/components/Form/FavoriteToggle'
import CoinIcon from '~/components/Icons/CoinIcon'
import { useFavoriteContext } from '~/context/FavoriteContext'

interface Props {
  symbol: string
  price: string
}

function CoinListItem(props: Props) {
  const { isFavorite, toggleFavorite } = useFavoriteContext()

  return (
    <div className="flex max-w-full flex-row items-start justify-between gap-5 px-5 py-3.5 hover:backdrop-saturate-150 max-md:flex-wrap">
      <div className="flex flex-row items-start gap-2.5 self-center">
        <CoinIcon symbol={props.symbol} />
        <a href="#" className="self-center text-xs font-bold text-neutral-600">
          {props.symbol}
        </a>
      </div>
      <div className="flex max-w-full flex-row items-start justify-between gap-5 self-center">
        <a
          href="#"
          className="mr-12 self-center text-right text-xs font-semibold text-neutral-600"
        >
          € {parseFloat(props.price)}
        </a>
        <FavoriteToggle
          onToggle={() => toggleFavorite(props.symbol)}
          isFavorite={isFavorite(props.symbol)}
        />
      </div>
    </div>
  )
}

export default CoinListItem
