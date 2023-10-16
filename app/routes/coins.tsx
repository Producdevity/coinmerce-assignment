import { Outlet } from '@remix-run/react'
import Container from '~/components/layout/Container'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import Page from '~/components/layout/Page'
import PageTitle from '~/components/layout/PageTitle'
import t from '~/utils/t'

function Coins() {
  return (
    <Page>
      <Header />
      <Container>
        <PageTitle>{t('coins.title')}</PageTitle>
        <Outlet />
      </Container>
      <Footer />
    </Page>
  )
}
export default Coins
