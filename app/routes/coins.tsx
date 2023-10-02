import { Outlet } from '@remix-run/react'
import Container from '~/components/layout/Container'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import Page from '~/components/layout/Page'

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
