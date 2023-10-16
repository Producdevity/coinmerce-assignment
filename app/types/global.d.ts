import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { src: string },
        HTMLElement
      >
    }
  }
}
