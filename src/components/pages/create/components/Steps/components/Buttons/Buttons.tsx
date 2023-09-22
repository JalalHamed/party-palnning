import { FC } from 'react';
import { TStep } from 'types';
import Next from './components/Next';
import Previous from './components/Previous';

const Buttons: FC<{ step: TStep }> = ({ step }) => (
  <>
    <Next />
    {step !== 'occasion' ? <Previous step={step} /> : null}
  </>
);

export default Buttons;
