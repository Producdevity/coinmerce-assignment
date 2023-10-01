import { Outlet } from '@remix-run/react'
import Container from '~/components/layout/container'
import Header from '~/components/layout/header'
import Page from '~/components/layout/page'

function Dashboard() {
  return (
    <Page>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Page>
  )
}
export default Dashboard
