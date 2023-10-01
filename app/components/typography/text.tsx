import type { PropsWithChildren } from 'react'

interface Props {
  title?: string
}

function Text(props: PropsWithChildren<Props>) {
  return (
    <p className="self-center text-xs font-bold text-neutral-600">
      {props.title || props.children}
    </p>
  )
}

export default Text
