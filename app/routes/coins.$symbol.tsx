import { useLoaderData } from '@remix-run/react'
import { json, type LoaderFunction } from '@vercel/remix'
import CoinDetail from '~/components/CoinDetail/CoinDetail'
// import useCoinImage from '~/components/Icons/CoinIcon/hooks/useCoinImage'
// import Loading from '~/components/ui/Loading'
// import coinMock from '~/data/mocks/coin.mock'
import { type CoinSymbol } from '~/types/api.types'
import api from '~/utils/api'

export const loader: LoaderFunction = async ({ params }) => {
  // if (!params.symbol) throw new Error('Missing symbol param')
  //
  const res = await api.getCoin(params.symbol as CoinSymbol)

  return json({
    // coin: coinMock,
    coin: res.data,
  })
}

// function CoinsOld() {
//   const { coin } = useLoaderData<typeof loader>()
//
//   const coinImage = useCoinImage(coin.symbol)
//
//   return (
//     <>
//       <h1 className="text-2xl font-bold">Detail page for: {coin.symbol}</h1>
//       {coin ? (
//         <div key={coin.symbol}>
//           <img src={coinImage} alt={coin.symbol} />
//           <p>{coin.symbol}</p>
//           <p>{coin.price}</p>
//         </div>
//       ) : (
//         <Loading />
//       )}
//     </>
//   )
// }

function Coin() {
  const { coin } = useLoaderData<typeof loader>()

  return <div>{coin ? <CoinDetail coin={coin} /> : <p>Loading...</p>}</div>
}

export default Coin
