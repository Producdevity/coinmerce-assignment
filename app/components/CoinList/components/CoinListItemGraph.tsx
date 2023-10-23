import { useEffect, useMemo, useState } from 'react'
import generatePath from '~/components/CoinList/utils/generatePath'
import normalizeKlinesData, {
  GRAPH_HEIGHT,
  GRAPH_WIDTH,
} from '~/components/CoinList/utils/normalizeKlinesData'
import { type Kline, type SymbolPrice } from '~/types/api.types'
import api from '~/utils/api'

interface Props {
  symbol: SymbolPrice['symbol']
}

function CoinListItemGraph(props: Props) {
  const [klines, setKlines] = useState<Kline[]>([])

  useEffect(() => {
    if (!props.symbol) return

    api
      .getKlines({ symbol: props.symbol })
      .then((res) => setKlines(res.data))
      .catch(console.error)
  }, [props.symbol])

  const pathData = useMemo(
    () =>
      klines.length
        ? generatePath(
            normalizeKlinesData(klines, {
              width: GRAPH_WIDTH,
              height: GRAPH_HEIGHT,
            }),
          )
        : null,
    [klines],
  )

  return klines.length && pathData ? (
    <svg width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
      <path d={pathData} fill="none" stroke="blue" strokeWidth="2" />
    </svg>
  ) : null
}

export default CoinListItemGraph
