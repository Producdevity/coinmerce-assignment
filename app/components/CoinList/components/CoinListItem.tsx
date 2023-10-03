import BTC from '~/assets/images/coins/30x30/BTC.png'
import CoinIcon, { type CoinSymbol } from '~/components/Icons/CoinIcon'

interface Props {
  symbol: CoinSymbol
  price: string
}

function CoinListItem(props: Props) {
  return (
    <div className="flex w-[739px] max-w-full flex-row items-start justify-between gap-5 max-md:flex-wrap">
      <div className="flex flex-row items-start gap-2.5 self-center">
        <CoinIcon symbol={props.symbol || 'ETH'} />
        <img
          loading="lazy"
          srcSet={BTC}
          className="aspect-[0.97] h-[33px] w-8 shrink-0 self-center object-contain object-center"
          alt=""
        />
        <a href="#" className="self-center text-xs font-bold text-neutral-600">
          {props.symbol}
        </a>
      </div>
      <div className="-mt-0.5 flex w-[152px] max-w-full flex-row items-start justify-between gap-5 self-center">
        <a
          href="#"
          className="mt-0.5 self-center text-right text-xs font-semibold text-neutral-600"
        >
          € {props.price}
        </a>
        <img
          loading="lazy"
          srcSet={BTC}
          className="aspect-[1] h-[22px] w-[22px] shrink-0 self-center object-contain object-center"
          alt=""
        />
      </div>
    </div>
  )
}

export default CoinListItem

/**
 * C_Blue '#0082FF'
 * blue_2: '#009BE2'
 * C_Dark-Purple '#000F21'
 * C_White '#FFFFFF'
 * Footer Blue '#010Е21'
 * Gray 1 '#F8F9FD'
 * Gray 2 '#EFF1F8'
 * Gray 3 '#E3E5ED'
 * Gray 6 '#9DA0AC'
 * Green '#0DAA49'
 * ReG '#E93230'
 * White '#FFFFFF'
 * White 50 #FFFFFF • 50%
 *
 */
