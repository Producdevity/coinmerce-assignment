import useCoinImage from '~/components/Icons/CoinIcon/hooks/useCoinImage'
import { type SymbolPriceDetails } from '~/types/api.types'

interface Props {
  coin: SymbolPriceDetails
}

function CoinDetail(props: Props) {
  const coinImage = useCoinImage(props.coin.symbol)

  console.log(`TODO: implement coinImage: ${coinImage}`)

  // Placeholder for the chart component
  const renderChart = () => {
    // Here you would render your chart component with the data
    return <div>Chart will be implemented here</div>
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{props.coin.symbol}</h1>
        <p className="text-xl">{`€ ${parseFloat(props.coin.lastPrice).toFixed(
          2,
        )}`}</p>
        <p className="text-sm text-green-600">{`${parseFloat(
          props.coin.priceChangePercent,
        ).toFixed(2)} %`}</p>
      </div>
      <div className="mb-4">
        {/* Chart placeholder */}
        {renderChart()}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="border border-gray-200 p-4">
          <h2 className="text-lg font-bold">Wallet</h2>
          {/* Mock wallet data */}
          <p>Total: € 45.22</p>
          <p>Past 24h: € 0.87</p>
        </div>
        <div className="border border-gray-200 p-4">
          <h2 className="text-lg font-bold">Trading</h2>
          {/* Trading actions */}
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Buy
          </button>
          <button className="ml-2 rounded bg-gray-500 px-4 py-2 text-white">
            Sell
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoinDetail
