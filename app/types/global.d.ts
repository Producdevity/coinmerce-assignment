import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export {}

declare global {
  interface Window {
    ENV: {
      BINANCE_WEBSOCKET_URL: string
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { src: string },
        HTMLElement
      >
    }
  }
}
