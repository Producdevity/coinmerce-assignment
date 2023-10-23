import { Link, Outlet } from '@remix-run/react'
import Container from '~/components/Layout/Container'
import Header from '~/components/Layout/Header'
import Page from '~/components/Layout/Page'
import PageTitle from '~/components/Layout/PageTitle'
import routes from '~/data/routes'
import t from '~/utils/t'

function Index() {
  return (
    <Page>
      <Header />
      <Container>
        <PageTitle>{t('home.title')}</PageTitle>

        <div className="mt-8 flex w-full flex-col justify-center">
          <Link
            to={routes.coins}
            className="group relative m-auto inline-flex w-[200px] items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
          >
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Go to Coins page
            </span>
          </Link>
          <small className="m-auto mt-4">
            <code>because that's the only page that I worked on 🤫</code>
          </small>
        </div>
        <Outlet />
      </Container>
    </Page>
  )
}

export default Index
