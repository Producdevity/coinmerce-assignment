import { Outlet } from '@remix-run/react'
import Container from '~/components/Layout/Container'
import Footer from '~/components/Layout/Footer'
import Header from '~/components/Layout/Header'
import Page from '~/components/Layout/Page'
import PageTitle from '~/components/Layout/PageTitle'
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
