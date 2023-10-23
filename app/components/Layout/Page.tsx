import type { PropsWithChildren } from 'react'

function Page(props: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {props.children}
    </div>
  )
}

export default Page
