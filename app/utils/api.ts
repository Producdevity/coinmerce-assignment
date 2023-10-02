import type { AxiosPromise } from 'axios'
import axios from 'axios'
import type { SymbolPrice } from '~/types/api.types'

class Api {
  private http = axios.create({
    baseURL: process.env.BINANCE_API_BASE_URL,
    timeout: parseInt(process.env.BINANCE_API_TIMEOUT || '3000', 10),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  constructor() {
    this.http.interceptors.request.use(
      this.onRequestFulfilled,
      this.onRequestRejected,
    )
    this.http.interceptors.response.use(
      this.onResponseFulfilled,
      this.onResponseRejected,
    )
  }

  onRequestFulfilled = (config: any) => config

  onRequestRejected = (error: any) => {
    console.error('onRequestRejected', error)
    return Promise.reject(error)
  }

  onResponseFulfilled = (res: any) => res

  onResponseRejected = (error: any) => {
    this.handleError(error)

    // Resume Error handling flow
    return Promise.reject(error)
  }

  handleError = (error: any) => {
    if (!error?.response) return

    console.warn(`error status: ${error.response.status}`, error.response.data)
  }

  public getCoins(): GetCoinsPromise {
    return this.http.get('api/v3/ticker/price?symbols=') // TODO: add symbols
  }
}

// Axios Promise Types
type GetCoinsPromise = AxiosPromise<SymbolPrice[]>

const api = new Api()

export default api