import { SvgIconProps } from '@mui/material';

export default function ProfilePicWrapper({ ...rest }: SvgIconProps) {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <circle cx='20' cy='20' r='19.5' stroke='url(#paint0_linear_1_887)' />
      <defs>
        <linearGradient
          id='paint0_linear_1_887'
          x1='8'
          y1='-0.999996'
          x2='45.1579'
          y2='23.0213'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#76A9FF' />
          <stop offset='0.405778' stopColor='#76A9FF' stopOpacity='0' />
          <stop offset='0.623613' stopColor='#76A9FF' stopOpacity='0' />
          <stop offset='1' stopColor='#76A9FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
