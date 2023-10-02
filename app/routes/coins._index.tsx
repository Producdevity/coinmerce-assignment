import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import SearchBar from '~/components/form/SearchBar'
import Loading from '~/components/ui/loading'
import coinsMock from '~/data/mocks/coins.mock'
import routes from '~/data/routes'

export const loader = async () => {
  return json({
    coins: coinsMock,
  })
}

function Coins() {
  const { coins } = useLoaderData<typeof loader>()

  return (
    <>
      <SearchBar />
      {coins ? (
        coins.map((coin) => (
          <Link key={coin.symbol} to={routes.coin({ id: coin.symbol })}>
            <p>{coin.symbol}</p>
            <p>{coin.price}</p>
          </Link>
        ))
      ) : (
        <Loading />
      )}
    </>
  )
}
export default Coins
