import type { PropsWithChildren } from 'react'

function Container(props: PropsWithChildren) {
  return (
    <div className="container mx-auto mb-auto flex-grow px-2 py-14 md:px-0">
      {props.children}
    </div>
  )
}

export default Container
