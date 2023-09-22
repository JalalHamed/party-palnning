import { Stack } from '@mui/material';

const AppLayout = ({ ...rest }) => (
  <Stack
    width='100%'
    height='100vh'
    bgcolor='base.background'
    padding={{ xs: '18px 16px', sm: '24px' }}
    sx={{ overflowX: 'hidden' }}
    {...rest}
  >
    {rest.children}
  </Stack>
);

export default AppLayout;
