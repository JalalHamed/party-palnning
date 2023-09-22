import { SvgIconProps } from '@mui/material';

export default function Time({ ...rest }: SvgIconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <g opacity='0.8'>
        <path
          d='M12 20.5714C16.7339 20.5714 20.5714 16.7339 20.5714 12C20.5714 7.26612 16.7339 3.42856 12 3.42856C7.26615 3.42856 3.42859 7.26612 3.42859 12C3.42859 16.7339 7.26615 20.5714 12 20.5714Z'
          stroke='#787878'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 6.85715V12L15.4286 13.7143'
          stroke='#787878'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}
