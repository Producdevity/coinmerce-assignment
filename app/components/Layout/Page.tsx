import type { PropsWithChildren } from 'react'

function Page(props: PropsWithChildren) {
  return (
    <div className="space-between flex min-h-screen w-full flex-col bg-slate-50">
      {props.children}
    </div>
  )
}

export default Page
