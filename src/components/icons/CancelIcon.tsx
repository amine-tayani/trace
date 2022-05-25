import { IconProps } from '@/types/step'
import * as React from 'react'

const CancelIcon: React.FunctionComponent<IconProps> = ({
  sw,
  h,
  w,
  color,
}) => {
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
        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CancelIcon
