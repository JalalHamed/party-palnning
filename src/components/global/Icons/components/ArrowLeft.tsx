import { SvgIconProps, useTheme } from '@mui/material';
import { useIsFa } from 'hooks/useIsFa';

export default function ArrowLeft({ ...rest }: SvgIconProps) {
  const { palette } = useTheme();
  const isFa = useIsFa();

  return (
    <svg
      width='14'
      height='12'
      viewBox='0 0 14 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        cursor: 'pointer',
        transform: `rotate(${isFa ? '180' : '0'}deg)`,
      }}
      {...rest}
    >
      <path
        d='M13.75 6C13.75 6.36819 13.4515 6.66667 13.0833 6.66667L2.44628 6.66667L6.14797 10.6185C6.38016 10.8664 6.38 11.252 6.1476 11.4997C5.89325 11.7707 5.46288 11.7709 5.20835 11.5L0.395956 6.37778C0.201349 6.17037 0.201349 5.83704 0.395956 5.62963L5.20854 0.500491C5.46292 0.229384 5.89337 0.229384 6.14775 0.500491C6.38007 0.748094 6.38023 1.13354 6.14812 1.38134L2.44628 5.33333L13.0833 5.33333C13.4515 5.33333 13.75 5.63181 13.75 6Z'
        fill={palette.icon.main}
      />
    </svg>
  );
}
