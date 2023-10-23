import { type NormalizedKlinePoint } from '~/types/api.types'

const generatePath = (points: NormalizedKlinePoint[]): string => {
  return points
    .map((point, index) =>
      index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`,
    )
    .join(' ')
}
export default generatePath
