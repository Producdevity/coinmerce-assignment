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
  isFavorite: () => false,
  toggleFavorite: () => {},
})

export function useFavoriteContext() {
  return useContext(FavoriteContext)
}

export function FavoriteProvider(props: PropsWithChildren<{}>) {
  const [favorites, setFavorites] = useState<SupportedCoin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log('storedFavorites', storedFavorites)
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
    console.log('toggleFavorite is called', coin)
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
