import { type Kline, type NormalizedKlinePoint } from '~/types/api.types'

type Options = {
  width: number
  height: number
}

export type GraphSize = {
  width: number
  height: number
}

export const GRAPH_WIDTH = 140
export const GRAPH_HEIGHT = 30

function normalizeKlinesData(
  klineData: Kline[],
  options?: Options,
): NormalizedKlinePoint[] {
  const width = options?.width ?? GRAPH_WIDTH
  const height = options?.height ?? GRAPH_HEIGHT

  const prices = klineData.map((entry) => parseFloat(entry[1].toString()))
  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)
  const xInterval = width / (prices.length - 1)
  return prices.map((price, index) => ({
    x: index * xInterval,
    y: height - ((price - minPrice) / (maxPrice - minPrice)) * height,
  }))
}

export default normalizeKlinesData
