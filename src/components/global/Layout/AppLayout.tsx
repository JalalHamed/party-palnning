import { Stack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <Stack
    width='100%'
    height='100vh'
    bgcolor='base.background'
    padding={{ xs: '18px 16px', sm: '24px' }}
    sx={{ overflowX: 'hidden' }}
  >
    {children}
  </Stack>
);

export default AppLayout;
