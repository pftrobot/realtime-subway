import { ReactNode } from 'react'

interface IconProps {
  type: string
  color?: string
  size?: number
  viewBox?: number
  isFill?: boolean
}

interface Icons {
  [key: string]: ReactNode
}

const Icon = ({
  type,
  color = '#111',
  size = 24,
  viewBox = 24,
  isFill = false,
}: IconProps) => {
  const icons: Icons = {
    population: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    road: (
      <>
        <rect height="7" width="7" x="3" y="3" />
        <rect height="7" width="7" x="14" y="3" />
        <rect height="7" width="7" x="14" y="14" />
        <rect height="7" width="7" x="3" y="14" />
      </>
    ),
    weather: (
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    ),
    dust: (
      <g>
        <g>
          <path d="M60,35.8c0,6.5,5.3,11.9,11.9,11.9c6.6,0,11.9-5.3,11.9-11.9c0-6.6-5.3-11.8-11.9-11.8C65.4,24,60,29.3,60,35.8L60,35.8z" />
          <path d="M169.7,35.8c0,6.5,5.3,11.9,11.9,11.9c6.5,0,11.9-5.3,11.9-11.9c0-6.6-5.3-11.8-11.9-11.8C175,24,169.7,29.3,169.7,35.8z" />
          <path d="M60,162c0,6.6,5.3,11.9,11.9,11.9c6.6,0,11.9-5.3,11.9-11.9s-5.3-11.9-11.9-11.9C65.4,150.2,60,155.5,60,162z" />
          <path d="M169.7,162c0,6.6,5.3,11.9,11.9,11.9c6.5,0,11.9-5.3,11.9-11.9s-5.3-11.9-11.9-11.9C175,150.2,169.7,155.5,169.7,162z" />
          <path d="M220.7,99.3c0,6.6,5.3,11.9,11.9,11.9c6.5,0,11.9-5.3,11.9-11.9l0,0c0-6.5-5.3-11.9-11.9-11.9C226.1,87.4,220.7,92.8,220.7,99.3z" />
          <path d="M113.8,99.3c0,6.6,5.3,11.9,11.9,11.9c6.6,0,11.9-5.3,11.9-11.9l0,0c0-6.5-5.3-11.9-11.9-11.9C119.1,87.4,113.8,92.8,113.8,99.3z" />
          <path d="M10,99.3c0,6.6,5.3,11.9,11.9,11.9c6.6,0,11.9-5.3,11.9-11.9c0-6.5-5.3-11.9-11.9-11.9C15.3,87.4,10,92.8,10,99.3L10,99.3L10,99.3z" />
          <path d="M246,219.4c0-5-4-9-9-9H21.3c-5,0-9,4-9,9v3.6c0,5,4,9,9,9H237c5,0,9-4,9-9V219.4L246,219.4z" />
        </g>
      </g>
    ),
  }

  return (
    <svg
      className="feather feather-user"
      width={size}
      height={size}
      fill={isFill ? color : 'none'}
      stroke={isFill ? 'none' : color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[type]}
    </svg>
  )
}

export default Icon
