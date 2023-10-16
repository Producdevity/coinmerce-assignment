import SearchBar from '../components/Form/SearchBar'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import CoinList from '~/components/CoinList/CoinList'
import TabBar from '~/components/TabBar/TabBar'
import type { Tab } from '~/components/TabBar/data'
import Loading from '~/components/ui/Loading'
import { FavoriteProvider } from '~/context/FavoriteContext'

function encodeSymbols(symbols: string[], baseSymbol: string) {
  const symbolsArray = symbols.map((symbol) => `${symbol}${baseSymbol}`)
  return encodeURIComponent(JSON.stringify(symbolsArray))
}

export const loader = async () => {
  const symbolsList: SupportedCoin[] = take(supportedCoins, 10)

  // make an api request
  function getCoins() {
    return fetch(
      `${
        process.env.BINANCE_API_BASE_URL
      }/api/v3/ticker/price?symbols=${encodeSymbols(symbolsList, 'EUR')}`,
    )
  }

  const response = await getCoins()
  const coins = await response.json()

  return json({
    coins,
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
