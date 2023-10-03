import CoinListItem from '~/components/CoinList/components/CoinListItem'
import type { SymbolPrice } from '~/types/api.types'

interface Props {
  coins: SymbolPrice[]
}

function CoinList(props: Props) {
  return (
    <section className="mt-6 flex flex-col self-stretch rounded-lg border border-solid border-slate-100 bg-white py-6 pl-3 pr-4 max-md:max-w-full">
      <div className="ml-2 mt-px flex w-[644px] max-w-full flex-row items-start justify-between gap-5 max-md:flex-wrap">
        <a href="#" className="text-xs font-semibold text-gray-400">
          Coin
        </a>
        <a href="#" className="text-right text-xs font-semibold text-gray-400">
          Price (€)
        </a>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="mt-2.5 aspect-[740] h-px w-[740px] shrink-0 self-center object-contain object-center max-md:max-w-full"
      />
      <CoinListItem symbol="BTC" price="66715.10" />
      <img
        loading="lazy"
        srcSet="..."
        className="mt-3.5 aspect-[742] h-px w-[742px] shrink-0 object-contain object-center max-md:max-w-full"
      />
      <CoinListItem symbol="XRP" price="2.40" />
      <img
        loading="lazy"
        srcSet="..."
        className="mt-3.5 aspect-[742] h-px w-[742px] shrink-0 object-contain object-center max-md:max-w-full"
      />
      <CoinListItem symbol="ETH" price="0.047647" />
      <img
        loading="lazy"
        srcSet="..."
        className="mt-3.5 aspect-[742] h-px w-[742px] shrink-0 object-contain object-center max-md:max-w-full"
      />
      <CoinListItem symbol="ICON" price="7.14" />
      <img
        loading="lazy"
        srcSet="..."
        className="mt-3.5 aspect-[742] h-px w-[742px] shrink-0 object-contain object-center max-md:max-w-full"
      />
      <CoinListItem symbol="LINK" price="66715.10" />
      <img
        loading="lazy"
        srcSet="..."
        className="ml-2.5 mt-3.5 aspect-[742] h-px w-[742px] shrink-0 object-contain object-center max-md:max-w-full"
      />
      <CoinListItem symbol="BTC" price="66715.10" />
      <img
        loading="lazy"
        srcSet="..."
        className="mt-3.5 aspect-[742] h-px w-[742px] shrink-0 object-contain object-center max-md:max-w-full"
      />
      {props.coins.map((coin) => (
        <CoinListItem key={coin.symbol} {...coin} />
      ))}
    </section>
  )
}

export default CoinList
