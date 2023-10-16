import type { LottiePlayer } from '@lottiefiles/lottie-player'
import React, { useEffect, type CSSProperties } from 'react'
import Loading from '~/components/ui/Loading'

interface Props extends Partial<Omit<LottiePlayer, 'style'>> {
  autoplay?: LottiePlayer['autoplay']
  loop?: LottiePlayer['loop']
  hover?: LottiePlayer['hover']
  style?: CSSProperties
}

function AnimatedIcon(props: Props) {
  useEffect(() => {
    // // NB: otherwise, will cause app to crash. see https://remix.run/docs/en/v1/guides/constraints#third-party-module-side-effects
    import('@lottiefiles/lottie-player')
  }, [])

  const { style, src, ...rest } = props

  return typeof document === 'undefined' ? (
    <Loading />
  ) : (
    <div>
      {/* @ts-ignore */}
      <lottie-player
        id="player"
        mode="normal"
        src={typeof src === 'string' ? src : JSON.stringify(src)}
        style={{
          ...{
            width: '100%',
            backgroundColor: 'transparent',
          },
          ...style,
        }}
        {...rest}
      />
    </div>
  )
}

export default AnimatedIcon
