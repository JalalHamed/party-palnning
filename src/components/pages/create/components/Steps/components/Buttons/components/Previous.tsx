import { Button, Typography, alpha, useTheme } from '@mui/material';
import { STEPS } from 'constant';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setStep } from 'store/eventSlice';
import { TStep } from 'types';

const Previous: FC<{ step: TStep }> = ({ step }) => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const dispatch = useDispatch();

  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: 'input.background',
        position: 'fixed',
        bottom: '24px',
        width: '29%',
        opacity: 1,
        '&:hover': {
          backgroundColor: alpha(palette.input.background, 0.5),
        },
      }}
      onClick={() => dispatch(setStep(STEPS[STEPS.indexOf(step) - 1]))}
    >
      <Typography variant='body2' color='#FFF'>
        {t('previous')}
      </Typography>
    </Button>
  );
};

export default Previous;
