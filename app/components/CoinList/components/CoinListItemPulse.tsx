import { useSpring, animated } from '@react-spring/web'

interface Props {
  isVisible: boolean
}

function CoinListItemPulse(props: Props) {
  const springProps = useSpring({
    opacity: props.isVisible ? 1 : 0,
    transform: props.isVisible ? 'scale(1)' : 'scale(0)',
    config: { duration: 300 },
  })

  return (
    <animated.span
      style={springProps}
      className="absolute right-8 flex h-3 w-3"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
    </animated.span>
  )
}

export default CoinListItemPulse
