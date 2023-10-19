import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import take from 'lodash.take'
import { useState } from 'react'
import CoinList from '~/components/CoinList/CoinList'
import SearchBar from '~/components/Form/SearchBar'
import TabBar from '~/components/TabBar/TabBar'
import tabs, { type Tab } from '~/components/TabBar/data'
import Loading from '~/components/ui/Loading'
import { FavoriteProvider } from '~/context/FavoriteContext'
import supportedCoins, { type SupportedCoin } from '~/data/supportedCoins'
import api from '~/utils/api'

export const loader = async () => {
  const symbolsList: SupportedCoin[] = take(supportedCoins, 10)

  const res = await api.getCoins(symbolsList)

  return json({
    coins: res.data,
  })
}

function Coins() {
  const { coins } = useLoaderData<typeof loader>()
  const [currentTabId, setCurrentTabId] = useState<Tab['id']>(tabs[0].id)

  return (
    <FavoriteProvider>
      <SearchBar />
      <TabBar onChangeTab={(tab) => setCurrentTabId(tab.id)} />
      {coins ? <CoinList tabId={currentTabId} coins={coins} /> : <Loading />}
    </FavoriteProvider>
  )
}
export default Coins
