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
  const symbolsList = [
    'BTC',
    'ETH',
    'BCH',
    'XRP',
    'EOS',
    'LTC',
    'TRX',
    'ADA',
    'XLM',
    'LINK',
  ]

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

  console.log('coins', coins)
  const onChangeTab = (tab: Tab) => {
    console.log(`TODO: Tab Changed to ${tab.label}`)
  }

  return (
    <FavoriteProvider>
      <SearchBar />
      <TabBar onChangeTab={onChangeTab} />
      {coins ? <CoinList coins={coins} /> : <Loading />}
    </FavoriteProvider>
  )
}
export default Coins
