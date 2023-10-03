import { useEffect, useState } from 'react'

interface IconModule {
  default: string // Assuming the icon module exports a string URL as the default export
}

type IconSrc = string | null
type ImportError = Error | null

function useImportIcon(coinSymbol: string) {
  const [iconSrc, setIconSrc] = useState<IconSrc>(null)
  const [error, setError] = useState<ImportError>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    import(`../../../assets/images/coins/30x30/${coinSymbol}.png`)
      .then((iconModule: IconModule) => setIconSrc(iconModule.default))
      .catch((error: Error) => {
        console.error(`Failed to load icon for ${coinSymbol}:`, error)
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }, [coinSymbol])

  return {
    iconSrc,
    error,
    isLoading,
  }
}

export default useImportIcon
