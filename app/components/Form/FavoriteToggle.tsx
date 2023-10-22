import { useSpring, animated, config } from '@react-spring/web'
import { useEffect, useState } from 'react'
import Star from '~/components/Icons/Star/Star'
import StarSelected from '~/components/Icons/Star/StarSelected'

interface Props {
  isFavorite: boolean
  onToggle: () => void
}

function FavoriteToggle(props: Props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)
  const [style, springRef] = useSpring(() => ({
    transform: 'scale(1) rotate(0deg)',
    config: {
      ...config.stiff,
      duration: 150,
    },
  }))

  useEffect(() => {
    setIsFavorite(props.isFavorite)
  }, [props.isFavorite])

  const handleToggle = () => {
    setIsFavorite((prev) => !prev)

    props.onToggle()

    springRef.start({
      transform: 'scale(1.4) rotate(15deg)',
      onRest: () => {
        springRef.start({
          transform: 'scale(1.1) rotate(-5deg)',
          onRest: () => {
            springRef.start({
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
