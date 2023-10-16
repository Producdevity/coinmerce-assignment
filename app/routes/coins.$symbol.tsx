import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import useCoinImage from '~/components/Icons/CoinIcon/hooks/useCoinImage'
import Loading from '~/components/ui/Loading'
import coinsMock from '~/data/mocks/coins.mock'

export const loader = async () => {
  // TODO: get coin from api based on url param
  return json({
    coin: coinsMock[0],
  })
}

function Coin() {
  const { coin } = useLoaderData<typeof loader>()

  const coinImage = useCoinImage(coin.symbol)

  return (
    <>
      <h1 className="text-2xl font-bold">Detail page for: {coin.symbol}</h1>
      {coin ? (
        <div key={coin.symbol}>
          <img src={coinImage} alt={coin.symbol} />
          <p>{coin.symbol}</p>
          <p>{coin.price}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
export default Coin
