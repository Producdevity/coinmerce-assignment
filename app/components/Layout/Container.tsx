import type { PropsWithChildren } from 'react'

function Container(props: PropsWithChildren) {
  return <div className="container mx-auto mb-auto py-14">{props.children}</div>
}

export default Container
