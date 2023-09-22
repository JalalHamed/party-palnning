import { FC } from 'react';
import { TStep } from 'types';
import { Next, Previous } from './components';

const Buttons: FC<{ step: TStep }> = ({ step }) => (
  <>
    <Next />
    {step !== 'occasion' ? <Previous step={step} /> : null}
  </>
);

export default Buttons;
