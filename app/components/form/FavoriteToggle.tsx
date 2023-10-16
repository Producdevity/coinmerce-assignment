import { useSpring, animated, config } from '@react-spring/web'
import { useEffect, useState } from 'react'
import Star from '~/components/Icons/Star/Star'
import StarSelected from '~/components/Icons/Star/StarSelected'

interface Props {
  isFavorite: boolean
  onToggle?: () => void
}

function FavoriteToggle(props: Props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)
  const [initialized, setInitialized] = useState(false)
  const [style, setStyle] = useSpring(() => ({
    transform: 'scale(1) rotate(0deg)',
    config: {
      ...config.stiff,
      duration: 150,
    },
  }))

  // Initialization
  useEffect(() => {
    setIsFavorite(props.isFavorite)
    setInitialized(true)
  }, [])

  // Handle prop changes
  useEffect(() => {
    setIsFavorite(props.isFavorite)
  }, [props.isFavorite])

  // Main effect
  useEffect(() => {
    console.log(
      `Initialized: ${initialized}, isFavorite: ${isFavorite}, props.isFavorite: ${props.isFavorite}`,
    )

    if (!initialized) return

    if (isFavorite === props.isFavorite) return

    if (props.onToggle) {
      console.log(`Calling onToggle for ${isFavorite}`)
      props.onToggle()
    }
  }, [isFavorite, props.isFavorite, props.onToggle, initialized])

  const handleToggle = () => {
    setIsFavorite((prev) => !prev)

    setStyle({
      transform: 'scale(1.4) rotate(15deg)',
      onRest: () => {
        setStyle({
          transform: 'scale(1.1) rotate(-5deg)',
          onRest: () => {
            setStyle({
              transform: 'scale(1) rotate(0deg)',
            })
          },
        })
      },
    })
  }

  return (
    <animated.div
      style={style}
      onClick={handleToggle}
      className="cursor-pointer"
    >
      {isFavorite ? <StarSelected /> : <Star />}
    </animated.div>
  )
}

export default FavoriteToggle
