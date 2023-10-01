import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Loading from '~/components/ui/loading'
import coinsMock from '~/data/mocks/coins.mock'

export const loader = async () => {
  return json({
    coin: coinsMock[0],
  })
}

function Coin() {
  const { coin } = useLoaderData<typeof loader>()

  return (
    <>
      <h1 className="text-2xl font-bold">Detail page for: {coin.symbol}</h1>
      {coin ? (
        <div key={coin.symbol}>
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
