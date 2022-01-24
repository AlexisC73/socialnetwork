import { SVGProps } from 'react'

export default function ZondiconsLocation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 20 20' {...props}>
      <path
        d='M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
