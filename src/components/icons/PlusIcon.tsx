import { IconProps } from '@/types/step'
import * as React from 'react'

const PlusIcon: React.FunctionComponent<IconProps> = ({ sw, h, w, color }) => {
  return (
    <svg
      width={w}
      height={h}
      strokeWidth={sw}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H12M18 12H12M12 12V6M12 12V18"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default PlusIcon
