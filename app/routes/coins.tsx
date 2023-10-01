import { Outlet } from '@remix-run/react'
import Container from '~/components/layout/container'
import Footer from '~/components/layout/footer'
import Header from '~/components/layout/header'
import Page from '~/components/layout/page'

function Coins() {
  return (
    <Page>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Page>
  )
}
export default Coins
