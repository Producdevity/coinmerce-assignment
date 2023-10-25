import { type SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {}

function ArrowRightIcon(props: Props) {
  return (
    <svg
      className="h-5 w-5 text-green-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  )
}

export default ArrowRightIcon
