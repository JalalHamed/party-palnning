import { AppLayout } from 'components/global';
import { FC } from 'react';
import Header from './components/Header';
import Steps from './components/Steps/Steps';

const Create: FC = () => (
  <AppLayout gap='16px'>
    <Header />
    <Steps />
  </AppLayout>
);

export default Create;
