import React from 'react'

interface Props {
  size?: number
}
function Loading(props: Props) {
  const size = props.size || 32
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={`h-${size} w-${size} animate-spin rounded-full border-b-2 border-t-2 border-gray-900`}
      />
    </div>
  )
}

export default Loading
