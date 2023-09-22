import { Stack } from '@mui/material';
import { AppLayout } from 'components/global';
import { FC } from 'react';
import { CreateEventCard, Header } from './components';

const Plans: FC = () => {
  // const history = useSelector((state: any) => state.theme.theme);

  return (
    <AppLayout>
      <Stack gap='24px'>
        <Header />
        <CreateEventCard />
      </Stack>
    </AppLayout>
  );
};

export default Plans;
