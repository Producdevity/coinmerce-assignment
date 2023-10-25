import { Link, Outlet } from '@remix-run/react'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon'
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
            className="group relative m-auto inline-flex w-[200px] items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-blue-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
          >
            <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 transition-all duration-150 ease-in-out group-hover:h-full" />
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <ArrowRightIcon />
            </span>
            <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
              <ArrowRightIcon />
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              {t('home.goToCoinsPage')}
            </span>
          </Link>
          <small className="m-auto mt-4">
            <code>{t('home.explanation')}</code>
          </small>
        </div>
        <Outlet />
      </Container>
    </Page>
  )
}

export default Index
