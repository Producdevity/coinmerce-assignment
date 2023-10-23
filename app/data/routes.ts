type RouteParams = { id: number | string }

const routes = {
  home: '/',
  coins: '/coins',
  coin: ({ id }: RouteParams) => `/coins/${id}`,
  notFound: '/404',
  wallets: '/wallets',
  wallet: ({ id }: RouteParams) => `/wallets/${id}`,
  orders: '/orders',
  order: ({ id }: RouteParams) => `/orders/${id}`,
  exchange: '/exchange',
} as const

type StaticRoute = {
  [K in keyof typeof routes]: (typeof routes)[K] extends string ? K : never
}[keyof typeof routes]

type DynamicRoute = {
  [K in keyof typeof routes]: (typeof routes)[K] extends (
    params: RouteParams,
  ) => string
    ? K
    : never
}[keyof typeof routes]

type Route = StaticRoute | DynamicRoute

export type { Route }

export default routes
