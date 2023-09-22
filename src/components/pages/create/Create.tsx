import { AppLayout } from 'components/global';
import { FC } from 'react';
import { Header, Steps } from './components';

const Create: FC = () => (
  <AppLayout gap='16px'>
    <Header />
    <Steps />
  </AppLayout>
);

export default Create;
