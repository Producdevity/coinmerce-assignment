import routes, { type Route } from '~/data/routes'

type NavLink = { to: Route; label: string }

const navLinks: NavLink[] = [
  { to: routes.home as Route, label: 'Home' },
  { to: routes.coins as Route, label: 'Coins' },
  { to: routes.wallets as Route, label: 'Wallets' },
  { to: routes.orders as Route, label: 'Orders' },
  { to: routes.exchange as Route, label: 'Exchange' },
]

export default navLinks
