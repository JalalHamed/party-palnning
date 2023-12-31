import { SvgIconProps } from '@mui/material';

export default function Date({ ...rest }: SvgIconProps) {
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
          d='M18 5.14285H5.99999C5.05322 5.14285 4.28571 5.91036 4.28571 6.85714V18.8571C4.28571 19.8039 5.05322 20.5714 5.99999 20.5714H18C18.9468 20.5714 19.7143 19.8039 19.7143 18.8571V6.85714C19.7143 5.91036 18.9468 5.14285 18 5.14285Z'
          stroke='#787878'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.4286 3.42856V6.85713'
          stroke='#787878'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.57141 3.42856V6.85713'
          stroke='#787878'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.28571 10.2857H19.7143'
          stroke='#787878'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}
