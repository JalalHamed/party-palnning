import { AppLayout } from 'components/global';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Header, Steps } from './components';

const Create: FC = () => {
  const step = useSelector((state: any) => state.event.step);

  return (
    <AppLayout gap='16px'>
      <Header step={step} />
      <Steps step={step} />
    </AppLayout>
  );
};

export default Create;
