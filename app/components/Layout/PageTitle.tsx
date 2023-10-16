import type { PropsWithChildren } from 'react'

interface Props {
  title?: string
}

function PageTitle(props: PropsWithChildren<Props>) {
  return (
    <div className="w-full py-6">
      <h1 className="text-5xl font-semibold slashed-zero text-gray-800">
        {props.title || props.children}
      </h1>
    </div>
  )
}

export default PageTitle
