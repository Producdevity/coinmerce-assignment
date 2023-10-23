import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export {}

declare global {
  interface Window {
    ENV: {
      BINANCE_API_BASE_URL: string
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

declare module '*.css' {
  export let asset: string
  // extend the existing *.css definition to include a named export
  export const styles: Record<string, string>
}
