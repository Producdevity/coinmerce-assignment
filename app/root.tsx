import { cssBundleHref } from '@remix-run/css-bundle'
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import { json, type MetaFunction, type LinksFunction } from '@vercel/remix'
import { EnvContext } from '~/context/EnvContext'
import styles from '~/styles/tailwind.css'
import t from '~/utils/t'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
]

export const meta: MetaFunction = () => {
  return [
    { title: t('appTitle') },
    { name: 'description', content: t('appDescription') },
  ]
}

export async function loader() {
  return json({
    ENV: {
      BINANCE_WEBSOCKET_URL: process.env.BINANCE_WEBSOCKET_URL || '',
    },
  })
}

function App() {
  const data = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-base-200 relative h-auto min-h-screen w-full overflow-y-auto">
        <EnvContext.Provider value={data.ENV}>
          <Outlet />
          <ScrollRestoration />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
          <Scripts />
          <LiveReload />
          <Analytics />
        </EnvContext.Provider>
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <html>
      <head>
        <Meta />
        <Links />
        <title>{t('errors.title')}</title>
      </head>
      <body>
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">{t('errors.oops')}</strong>
          <span className="block lg:inline">
            {t('errors.somethingWentWrong')}
          </span>
          <span className="block lg:inline">
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : error instanceof Error
              ? error.message
              : t('errors.unknown')}
          </span>
        </div>
        <Scripts />
      </body>
    </html>
  )
}

export default App
