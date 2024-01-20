import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { json, type LoaderFunctionArgs } from '@vercel/remix'
import take from 'lodash.take'
import { matchSorter } from 'match-sorter'
import CoinListContainer from '~/components/CoinList/components/CoinListContainer'
import FilterBar from '~/components/Form/FilterBar'
import SearchBar from '~/components/Form/SearchBar'
import TabBar from '~/components/TabBar/TabBar'
import Loading from '~/components/ui/Loading'
import { FavoriteContextProvider } from '~/context/FavoriteContext'
import { TabContextProvider } from '~/context/TabContext'
import supportedCoins, { type SupportedCoin } from '~/data/supportedCoins'
import api from '~/utils/api'
import t from '~/utils/t'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const symbolsList: SupportedCoin[] = take(supportedCoins, 10)
  const res = await api.getCoins(symbolsList)
  const url = new URL(request.url)
  const q = url.searchParams.get('q')

  const filteredCoins = q
    ? matchSorter(res.data, q, { keys: ['symbol'] })
    : res.data

  return json({
    coins: filteredCoins,
    q,
  })
}

function Coins() {
  const { coins, q } = useLoaderData<typeof loader>()

  return (
    <FavoriteContextProvider>
      <TabContextProvider>
        <SearchBar q={q} />
        <TabBar />
        <FilterBar />
        {coins ? <CoinListContainer coins={coins} /> : <Loading />}
      </TabContextProvider>
    </FavoriteContextProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <div
      className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">{t('errors.oops')}</strong>
      <span className="block lg:inline">{t('errors.somethingWentWrong')}</span>
      <span className="block lg:inline">
        {isRouteErrorResponse(error)
          ? `${error.status} ${error.statusText}`
          : error instanceof Error
          ? error.message
          : t('errors.unknown')}
      </span>
    </div>
  )
}

export default Coins
