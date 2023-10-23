import axios from 'axios'
import { BINANCE_API_BASE_URL } from '~/data/env'
import type { SupportedCoin } from '~/data/supportedCoins'
import type { Kline, KlinesParams, SymbolPrice } from '~/types/api.types'
import encodeSymbols from '~/utils/encodeSymbols'

class Api {
  private http = axios.create({
    baseURL: BINANCE_API_BASE_URL,
    timeout: 3000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  constructor() {
    this.http.interceptors.request.use(
      (config) => config,
      this.onRequestRejected,
    )
    this.http.interceptors.response.use(
      this.onResponseFulfilled,
      this.onResponseRejected,
    )
  }

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

  public getCoins(symbolsList: SupportedCoin[]) {
    return this.http.get<SymbolPrice[]>(
      `api/v3/ticker/price?symbols=${encodeSymbols(symbolsList, 'EUR')}`,
    )
  }

  /**
   * uiKlines return modified kline data, optimized for presentation of candlestick charts.
   */
  public getKlines(params: KlinesParams) {
    const interval = params.interval ?? '1d'
    const limit = params.limit ?? 50

    return this.http.get<Kline[]>(
      `api/v3/uiKlines?symbol=${params.symbol}&interval=${interval}&limit=${limit}`,
    )
  }
}

const api = new Api()

export default api
