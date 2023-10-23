import { type Kline } from '~/types/api.types'

/**
 * The returned value is a tailwindcss class name.
 */
function determineLineColor(klinesData: Kline[]): string {
  if (!klinesData || klinesData.length === 0) return 'stroke-cyan-100'
  const firstValue = parseFloat(klinesData[0][1])
  const currentValue = parseFloat(klinesData[klinesData.length - 1][4])
  return currentValue > firstValue ? 'stroke-green-500' : 'stroke-red-500'
}

export default determineLineColor
