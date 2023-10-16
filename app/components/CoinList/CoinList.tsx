import { Fragment } from 'react'
import CoinmerceLogo from '~/assets/images/coinmerce-logo.svg'
import CoinListItem from '~/components/CoinList/components/CoinListItem'
import CoinListItemDivider from '~/components/CoinList/components/CoinListItemDivider'
import type { SymbolPrice } from '~/types/api.types'

interface Props {
  coins: SymbolPrice[]
}

function CoinList(props: Props) {
  return (
    <section className="mt-6 flex flex-col self-stretch rounded-lg border border-solid border-slate-100 bg-white py-6 max-md:max-w-full">
      <div className="mb-4 ml-2 flex w-[644px] max-w-full flex-row items-start justify-between gap-5 px-5 max-md:flex-wrap">
        <a href="#" className="text-xs font-semibold text-gray-400">
          Coin
        </a>
        <a
          href="#"
          className="mr-16 text-right text-xs font-semibold text-gray-400"
        >
          Price (€)
        </a>
      </div>
      <CoinListItemDivider />
      {props.coins.map((coin) => (
        <Fragment key={coin.symbol}>
          <CoinListItem key={coin.symbol} {...coin} />
          <CoinListItemDivider />
        </Fragment>
      ))}
    </section>
  )
}

export default CoinList
