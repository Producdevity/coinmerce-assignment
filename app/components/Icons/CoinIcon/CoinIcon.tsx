import useCoinImage from '~/components/Icons/CoinIcon/hooks/useCoinImage'

interface Props {
  symbol: string
  size?: number
}

function CoinIcon(props: Props) {
  const size = props.size || 32
  const coinImage = useCoinImage(props.symbol, 30)

  return coinImage ? (
    <img
      loading="lazy"
      className={`h-[${size}px] w-[${size}px] self-center rounded-full object-center shadow-sm`}
      src={coinImage}
      alt={props.symbol}
    />
  ) : (
    <div
      className={`h-[${size}px] w-[${size}px] rounded-full bg-gray-400 shadow-sm`}
    />
  )
}

export default CoinIcon
