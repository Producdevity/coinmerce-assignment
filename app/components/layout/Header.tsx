import { Link, NavLink } from '@remix-run/react'
import { useState } from 'react'
import CoinmerceLogo from '~/assets/images/coinmerce-logo.svg'
import MenuIcon from '~/components/Icons/MenuIcon'
import navLinks from '~/data/navLinks'
import routes from '~/data/routes'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <nav className="flex flex-col bg-slate-950 py-2 max-md:max-w-full">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to={routes.home} className="flex items-center px-4">
          <img
            loading="lazy"
            srcSet={CoinmerceLogo}
            className="aspect-[4.78] w-[150px] self-center object-contain object-center"
            alt="Coinmerce Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-main"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-main"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((prevState) => !prevState)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon />
        </button>
        <div
          id="navbar-main"
          onClick={() => setIsNavOpen((prevState) => !prevState)}
          className={`md:px-auto  w-full px-4 md:block md:w-auto ${
            isNavOpen ? '' : 'hidden'
          }`}
        >
          <ul className="mt-0.5 flex w-[469px] max-w-full flex-row items-start justify-between gap-5 self-center max-md:flex-wrap max-md:justify-center max-sm:flex-wrap">
            {navLinks.map((navLink) => (
              <li key={navLink.to}>
                <NavLink
                  to={navLink.to}
                  className={({ isActive }) =>
                    `block rounded py-2 pl-3 pr-4 slashed-zero md:bg-transparent md:p-0 ${
                      isActive ? 'text-blue-500' : 'text-white'
                    }`
                  }
                >
                  {navLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
