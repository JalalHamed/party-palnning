import { AppLayout } from 'components/global';
import { FC } from 'react';
import { CreateEventCard, Header } from './components';

const Plans: FC = () => (
  <AppLayout gap='24px'>
    <Header />
    <CreateEventCard />
  </AppLayout>
);

export default Plans;
