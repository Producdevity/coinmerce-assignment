import { Outlet } from '@remix-run/react'
import Container from '~/components/layout/Container'
import Header from '~/components/layout/Header'
import Page from '~/components/layout/Page'

function Orders() {
  return (
    <Page>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Page>
  )
}
export default Orders
