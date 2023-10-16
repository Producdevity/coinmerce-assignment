import { Outlet } from '@remix-run/react'
import Container from '~/components/Layout/Container'
import Header from '~/components/Layout/Header'
import Page from '~/components/Layout/Page'
import PageTitle from '~/components/Layout/PageTitle'
import t from '~/utils/t'

function Wallets() {
  return (
    <Page>
      <Header />
      <Container>
        <PageTitle>{t('wallets.title')}</PageTitle>
        <Outlet />
      </Container>
    </Page>
  )
}
export default Wallets
