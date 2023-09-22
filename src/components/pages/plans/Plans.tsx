import { AppLayout } from 'components/global';
import { FC } from 'react';
import { CreateEventCard, Header } from './components';

const Plans: FC = () => {
  // const history = useSelector((state: any) => state.theme.theme);

  return (
    <AppLayout gap='24px'>
      <Header />
      <CreateEventCard />
    </AppLayout>
  );
};

export default Plans;
