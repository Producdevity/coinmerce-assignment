import { Outlet } from '@remix-run/react'
import Container from '~/components/layout/Container'
import Header from '~/components/layout/Header'
import Page from '~/components/layout/Page'
import PageTitle from '~/components/layout/PageTitle'
import t from '~/utils/t'

function Index() {
  return (
    <Page>
      <Header />
      <Container>
        <PageTitle>{t('home.title')}</PageTitle>
        <Outlet />
      </Container>
    </Page>
  )
}

export default Index
