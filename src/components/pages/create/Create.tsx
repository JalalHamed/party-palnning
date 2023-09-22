import { AppLayout } from 'components/global';
import { FC, useState } from 'react';
import { Header, Steps } from './components';
import { TStep } from './types';

const Create: FC = () => {
  const [step] = useState<TStep>('occasion');

  return (
    <AppLayout gap='16px'>
      <Header step={step} />
      <Steps step={step} />
    </AppLayout>
  );
};

export default Create;
