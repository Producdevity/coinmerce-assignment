import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { json } from '@vercel/remix'
import take from 'lodash.take'
import CoinListContainer from '~/components/CoinList/components/CoinListContainer'
import SearchBar from '~/components/Form/SearchBar'
import TabBar from '~/components/TabBar/TabBar'
import Loading from '~/components/ui/Loading'
import { FavoriteContextProvider } from '~/context/FavoriteContext'
import { TabContextProvider } from '~/context/TabContext'
import supportedCoins, { type SupportedCoin } from '~/data/supportedCoins'
import api from '~/utils/api'
import t from '~/utils/t'

export const loader = async () => {
  const symbolsList: SupportedCoin[] = take(supportedCoins, 10)

  const res = await api.getCoins(symbolsList)

  return json({
    coins: res.data,
  })
}

function Coins() {
  const { coins } = useLoaderData<typeof loader>()

  return (
    <FavoriteContextProvider>
      <TabContextProvider>
        <SearchBar />
        <TabBar />
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
