import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { SupportedCoin } from '~/data/supportedCoins'

interface FavoriteContextType {
  favorites: SupportedCoin[]
  isFavorite: (coin: SupportedCoin) => boolean
  toggleFavorite: (coin: SupportedCoin) => void
}

const LOCAL_STORAGE_KEY = 'cryptoTracker.favorites'

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  isFavorite: (coin) => {
    throw new Error(
      `isFavorite was called with ${coin} before being initialized.`,
    )
  },
  toggleFavorite: (coin) => {
    throw new Error(
      `toggleFavorite was called with ${coin} before being initialized.`,
    )
  },
})

export const useFavoriteContext = () => useContext(FavoriteContext)

export function FavoriteContextProvider(props: PropsWithChildren) {
  const [favorites, setFavorites] = useState<SupportedCoin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (loading) return
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites, loading])

  const isFavorite = (coin: SupportedCoin) => favorites.includes(coin)

  const toggleFavorite = (coin: SupportedCoin) => {
    setFavorites((prevState) =>
      isFavorite(coin)
        ? prevState.filter((fav) => fav !== coin)
        : [...prevState, coin],
    )
  }

  const contextValue = {
    favorites,
    isFavorite,
    toggleFavorite,
  }

  return (
    <FavoriteContext.Provider value={contextValue}>
      {props.children}
    </FavoriteContext.Provider>
  )
}
