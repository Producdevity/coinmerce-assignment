import type { PropsWithChildren } from 'react'

interface Props {
  title?: string
}

function Heading(props: PropsWithChildren<Props>) {
  return (
    <h1 className="text-4xl font-semibold slashed-zero text-gray-800">
      {props.title || props.children}
    </h1>
  )
}

export default Heading
