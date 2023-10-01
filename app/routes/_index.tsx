import type { MetaFunction } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'
import Container from '~/components/layout/container'
import Header from '~/components/layout/header'
import Page from '~/components/layout/page'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

function Index() {
  return (
    <Page>
      <Header />
      <Container>
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
          <h1 className="border-2 text-3xl font-bold underline">
            Hello world! After TailwindCSS
          </h1>
          <h1>Welcome to Remix</h1>
          <ul>
            <li>
              <Link to="/dashboard" />
            </li>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
              >
                15m Quickstart Blog Tutorial
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
              >
                Deep Dive Jokes App Tutorial
              </a>
            </li>
            <li>
              <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                Remix Docs
              </a>
            </li>
          </ul>
        </div>
        <Outlet />
      </Container>
    </Page>
  )
}

export default Index
