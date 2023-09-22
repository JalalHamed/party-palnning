import { Box } from '@mui/material';
import { FC } from 'react';
import { TStep } from 'types';
import { Next, Previous } from './components';

const Buttons: FC<{ step: TStep }> = ({ step }) => {
  return (
    <Box>
      <Next step={step} />
      {step !== 'occasion' ? <Previous step={step} /> : null}
    </Box>
  );
};

export default Buttons;
