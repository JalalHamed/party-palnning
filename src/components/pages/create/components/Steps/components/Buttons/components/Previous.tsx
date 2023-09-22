import { Button, Typography, alpha, useTheme } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setStep } from 'store/eventSlice';
import { TStep } from 'types';

const Previous: FC<{ step: TStep }> = ({ step }) => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const dispatch = useDispatch();

  const handlePrevClick = () => {
    switch (step) {
      case 'guestSize':
        dispatch(setStep('occasion'));
        break;
      case 'form':
        dispatch(setStep('guestSize'));
        break;
      case 'eInvite':
        dispatch(setStep('form'));
        break;
    }
  };

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
      onClick={handlePrevClick}
    >
      <Typography variant='body2' color='#FFF'>
        {t('previous')}
      </Typography>
    </Button>
  );
};

export default Previous;
