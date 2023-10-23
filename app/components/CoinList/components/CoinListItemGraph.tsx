import { useEffect, useMemo, useState } from 'react'
import determineLineColor from '~/components/CoinList/utils/determineLineColor'
import generatePath from '~/components/CoinList/utils/generatePath'
import normalizeKlinesData, {
  type GraphSize,
} from '~/components/CoinList/utils/normalizeKlinesData'
import { type Kline, type SymbolPrice } from '~/types/api.types'
import api from '~/utils/api'

interface Props {
  symbol: SymbolPrice['symbol']
  size: GraphSize
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
              width: props.size.width,
              height: props.size.height,
            }),
          )
        : null,
    [klines, props.size.height, props.size.width],
  )

  return klines.length && pathData ? (
    <svg
      width={props.size.width}
      height={props.size.width}
      className={`${determineLineColor(klines)} lineGraphEnter m-auto`}
    >
      <path d={pathData} fill="none" strokeWidth="2" />
    </svg>
  ) : null
}

export default CoinListItemGraph
